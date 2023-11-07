import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from "./logo.svg";
// import './index.css';
import Login from "./Pages/Login";
import ForgotPass from './Pages/ForgotPass';
import ProductMain from './Pages/ProductMain';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* <Login/> */}
      {/* <Provider store={Store}> */}

      <Router>
        {" "}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgotPass" element={<ForgotPass/>} />
          <Route path="/prodcutCatalogue" element={<ProductMain/>}/>
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
