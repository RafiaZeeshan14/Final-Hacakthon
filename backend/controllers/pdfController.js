const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const generateVoucher = (req, res) => {
    try {
        const { data } = req.body;
        const doc = new PDFDocument({
            size: 'A4',
            margins: { top: 30, bottom: 30, left: 30, right: 30 }
        });
        const filename = `Voucher-${data.voucherCode}`;

        // Set response headers
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');

        // Pipe the PDF document to the response
        doc.pipe(res);

        // Custom font
        doc.registerFont('Poppins', path.join(__dirname, '../font/Poppins Light 300.ttf'));
        doc.registerFont('Poppins-bold', path.join(__dirname, '../font/Poppins-Bold.ttf'));
        doc.font('Poppins');

        // Page size and margins
        const margin = 30;
        const pageWidth = doc.page.width;
        const pageHeight = doc.page.height;
        let y = margin;

        // Function to draw a grid
        const drawGrid = (columns, height, columnWidths) => {
            const colWidth = columnWidths || Array(columns).fill((pageWidth - margin * 2) / columns);
            const startX = margin;
            const startY = y;

            for (let i = 0; i < columns; i++) {
                doc.rect(startX + colWidth.slice(0, i).reduce((acc, width) => acc + width, 0), startY, colWidth[i], height).stroke();
            }
            doc.rect(startX, startY, colWidth.reduce((acc, width) => acc + width, 0), height).stroke();
            y += height; // Update y position for next section
        };

        // Logo
        drawGrid(1, 60);
        const logoWidth = 50;
        const logoHeight = 50; // Assume the logo is a square
        const centerX = (pageWidth - logoWidth) / 2;
        const centerY = (pageHeight - logoHeight) / 2;
        const imagePath = path.join(__dirname, '../logo/logo-stdnt.png');
        doc.image(imagePath, centerX, y - 55, { width: logoWidth, height: logoHeight });


        // Shift and Voucher type
        drawGrid(2, 40);
        doc.text('Shift: Morning', margin + 5, y - 28);
        doc.text('Voucher: Bank Copy', pageWidth / 2 + 5, y - 28);

        // Recipient information
        drawGrid(1, 45);
        doc.text('For The Credit Of: SMIT Morning Fee Collection', margin + 5, y - 40);
        doc.fontSize(8);
        doc.text('Pay at any Bank Branches *', margin + 5, y - 20);
        doc.fontSize(10);

        let columnWidths1 = [133.5, 134, 133.5, 134]

        // Voucher details
        
        drawGrid(4, 30, columnWidths1);
        doc.text(`Date: `, margin + 5, y - 20);
        doc.text(`${formatDate(data.createdAt)}`, margin + 140, y - 20);
        doc.text(`Voucher No:`, margin + 280, y - 20);
        doc.text(`${data.voucherCode.slice(8, 17)}`, margin + 410, y - 20);

        // student details
        drawGrid(4, 30, columnWidths1);
        doc.text(`Student ID `, margin + 5, y - 20);
        doc.text(`${data.rollNo}`, margin + 140, y - 20);
        doc.text(`Batch`, margin + 280, y - 20);
        doc.text(`${data.batch}`, margin + 410, y - 20);

        // Student name and course
        drawGrid(2, 30);
        doc.text(`Student Name `, margin + 5, y - 20);
        doc.text(`${data.name}`, pageWidth / 2 + 10, y - 20);

        drawGrid(2, 30);
        doc.text(`Course `, margin + 5, y - 20);
        doc.text(`${data.course}`, pageWidth / 2 + 10, y - 20);

        doc.font("Poppins-bold")

        // Fees table with specific column widths
        let columnWidths = [370, 165]; // Adjust widths as needed
        drawGrid(2, 30, columnWidths);
        doc.text(`Fees Head`, margin + 5, y - 20)
        const textWidth = doc.widthOfString('Amount'); // Get the width of the text
        const x1 = pageWidth - 40 - textWidth; // Calculate the x position
        doc.text(`Amount`, x1, y - 20)

        doc.font("Poppins")

        drawGrid(2, 30, columnWidths);
        doc.text(`MonthlyFees`, margin + 5, y - 20);
        doc.text(`Rs 1000/-`, x1, y - 20);

        drawGrid(2, 30, columnWidths);
        doc.text(`MonthlyFees With Due Date (${formatDate(data.dueDate)})`, margin + 5, y - 20);
        doc.text(`Rs 1100/-`, x1, y - 20);

        drawGrid(1, 40);
        doc.text(`In words: One Thousand Only`, margin + 5, y - 25, { align: 'center' });

        drawGrid(2, 60);
        doc.text(`_______________________`, margin + 60, y - 20);
        doc.text(`_______________________`, pageWidth / 2 + 50, y - 20);

        drawGrid(2, 60);
        doc.text('Applicant\'s Signature', margin + 70, y - 35);
        doc.text('Bank Authorized Signature & Stamp', pageWidth / 2 + 40, y - 35);

        doc.end();
        

    } catch (error) {
        res.send({ error: error.message })
        console.log("🚀 ~ generateVoucher ~ error:", error)
    }

};

module.exports = {
    generateVoucher
};
