import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Heroo from "./Heroo";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Testi from "../pages/Testi";
import Blog from "../pages/Blog";
import Navbar from "./NavBar";
import Footer from "./Footer";
export default function Pages() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route path="/Heroo">
          <Heroo />{" "}
        </Route>
        <Route path="/About">
          {" "}
          <About />
        </Route>
        <Route path="/Service">
          {" "}
          <Service />
        </Route>
        <Route path="/Portfolio">
          {" "}
          <Portfolio />{" "}
        </Route>
        <Route path="/Testi">
          {" "}
          <Testi />
        </Route>
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Footer />
      </BrowserRouter>
    </>
  );
}
