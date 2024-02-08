import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/services" element={<Services />} />
       </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;
