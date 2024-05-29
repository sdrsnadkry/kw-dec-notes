import React from "react";
import Header from "./components/header";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUs";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
