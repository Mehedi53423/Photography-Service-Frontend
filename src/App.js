import "./App.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./components/pages/Home";
//import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <RouterProvider router={routes}></RouterProvider> */}
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
