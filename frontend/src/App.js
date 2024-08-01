
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div style={{fontFamily:"Poppins"}}>
    <BrowserRouter> 
      <AppRoutes/>
      <ToastContainer position="top-center"/>
    </BrowserRouter>
  </div>
  );
}

export default App;
