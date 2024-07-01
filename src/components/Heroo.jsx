import React from "react";
import Homee from "../pages/Homee";
import About from "../pages/About";
import Service from "../pages/Service";
import Portfolio from "../pages/Portfolio";
import Testi from "../pages/Testi";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Counter from "./counter";

export default function Heroo() {
  return (
    <>
      <Homee />
      <About />
      <Service />
      <Counter />
      <Portfolio />
      <Testi />
      <Blog />
      <Contact />
    </>
  );
}
