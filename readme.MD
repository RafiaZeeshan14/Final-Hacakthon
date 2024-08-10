
# Fee Portal of SMIT
### Deployed Link
https://finalhacakthon.vercel.app/
## Overview :

The **Fee Portal of SMIT** is a comprehensive web application designed to streamline the fee management process for SMIT. The portal provides a user-friendly interface for students and administrators to manage fee payments, view payment history, and generate PDF receipts. It integrates with various modern technologies to ensure a seamless user experience.

## Features

- **User Authentication**: 
  - Secure login and registration functionality.
  
- **Fee Management**: 
  - View fee details.
  - Make payments via Stripe.
  - Download payment receipts as PDFs.
  
- **Form Validation**: 
  - Robust form validation using Formik and Yup.
  
- **Notifications**: 
  - Real-time notifications using React-Toastify.
   
- **Analytics**: 
  - Visualize fee-related data with Chart.js.
  
- **Routing**: 
  - Smooth navigation across the portal with React-Router.
  
- **PDF Generation**: 
  - Generate and download receipts using React-PDF.

## Technologies Used

- **Frontend**: 
  - **React**: JavaScript library for building user interfaces.
  - **Tailwind CSS**: Utility-first CSS framework for custom designs.
  - **React-Router**: Routing library for React applications.
  - **Formik & Yup**: Libraries for handling form state and validation.
  - **React-Toastify**: For elegant toast notifications.
  - **Chart.js**: JavaScript library for data visualization.
  - **React-PDF**: Library to create and view PDFs in React.
  
- **Backend**:
  - **Express.js**: Web application framework for Node.js.
  - **MongoDB**: NoSQL database for storing user and fee data.
  - **Stripe**: Payment processing platform.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/username/final-hackathon.git
   cd final-hackathon
   ```

2. **Install Dependencies**:
   ```bash
   # Install server dependencies
   npm install
   
   # Install client dependencies
   cd client
   npm install
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root directory with the following:
     ```
     MONGO_URI=your_mongodb_uri
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```

4. **Run the Application**:
   ```bash
   # Run the server
   npm run dev
   
   # Run the client
   cd client
   npm start
   ```

5. **Access the Application**:
   - Open your browser and go to `http://localhost:3000`.

## Usage

- **Users**: 
  - Log in, view their fee details, make payments, and download receipts.
  
- **Admins**: 
  - Manage fee records, view payment analytics, and monitor payment statuses.

## Contributing

- Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

- This project is licensed under the MIT License.

---

