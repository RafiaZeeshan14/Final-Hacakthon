import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFVoucher from "../../UserFeePortal/PdfVoucher";
import { formatDate } from "../../helperFunction/helperFunction";

const Table = ({ vouchers }) => {
  const renderFallbackRow = () => (
    <tr className="bg-gray-50 even:bg-gray-100">
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
      <td className="py-2 text-center">--</td>
    </tr>
  );

  return (
    <div className="container pl-4 mx-auto mt-8">
      <h2 className="text-2xl font-semibold gradient-text">Summary</h2>
      <table className="min-w-full bg-white mt-4">
        <thead>
          <tr>
            <th className="py-2 w-1/12">User ID</th>
            <th className="py-2 w-2/12">Date</th>
            <th className="py-2 w-2/12">Amount</th>
            <th className="py-2 w-2/12">Due Date</th>
            <th className="py-2 w-2/12">Status</th>
            <th className="py-2 w-3/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.length === 0
            ? renderFallbackRow()
            : vouchers.map((item, index) => (
                <tr key={index} className="bg-gray-50 even:bg-gray-100 text-sm">
                  <td className="py-2 text-center">
                    {item.voucherCode
                      ? `#${item.voucherCode.slice(8, 17)}`
                      : "--"}
                  </td>
                  <td className="py-2 text-center">
                    {item.createdAt ? formatDate(item.createdAt) : "--"}
                  </td>
                  <td className="py-2 text-center">
                    {item.feeAmount ? `Rs.${item.feeAmount}/=` : "--"}
                  </td>
                  <td className="py-2 text-center">
                    {item.dueDate ? formatDate(item.dueDate) : "--"}
                  </td>
                  <td className="py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : item.status === "Pending"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status || "--"}
                    </span>
                  </td>
                  <td className="py-2 text-center text-sm space-x-2">
                    <PDFDownloadLink
                      document={<PDFVoucher data={item} />}
                      fileName={`voucher-${item.voucherCode}.pdf`}
                    >
                      {({ loading }) => (
                        <button
                          className="px-2 py-2 bg-pink-100 text-pink-700 border border-pink-300 rounded"
                          disabled={loading}
                        >
                          {"Download PDF"}
                        </button>
                      )}
                    </PDFDownloadLink>
                    <button className="px-2 py-2 bg-blue-100 text-blue-700 border border-blue-300 rounded">
                      Pay Online
                    </button>
                    {/* <PayOnline voucher={item} /> */}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
