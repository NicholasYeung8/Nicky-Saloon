import { Outlet, ScrollRestoration } from "react-router-dom";

import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
