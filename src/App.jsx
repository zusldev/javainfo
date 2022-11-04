import React from "react";
import Card from "./components/Card";
import "./index.css";
import Sidebar from "./Sidebar";
import Portada from "./components/Portada";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Portada />
      <div className="flex justify-center ">
        <Sidebar />
        {/* <Navbar /> */}
        <Card />
      </div>
    </>
  );
}

export default App;
