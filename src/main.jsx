import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./components/Footer";
import SecondSection from "./SecondSection";
import "./index.css";
import ParticlesBg from "particles-bg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    <SecondSection />
    <Footer />
    <ParticlesBg type="cobweb" bg={true} />
  </>
);
