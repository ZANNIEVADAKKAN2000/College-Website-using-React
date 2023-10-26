import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import "./Components/common.css"
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<About />} path="/about-us"></Route>
        <Route element={<Contact />} path="/contact-us"></Route>
        <Route element={<Gallery />} path="/gallery"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
