
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/AppRoutes';



function App() {
  return (
    <div style={{fontFamily:"Poppins"}}>
    <BrowserRouter> 
      <AppRoutes/>
    </BrowserRouter>
  </div>
  );
}

export default App;
