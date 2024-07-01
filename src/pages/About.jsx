import React from "react";
// import React, { useEffect } from "react"
import { about } from "../dummydata";
import man from "../components/images/man.png";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="container ">
          {about.map((val, i) => (
            <>
              <div className="left">
                <img src={man} alt="" />
              </div>
              <div className="right col-lg-7  ms-5">
                <h1>About me</h1>
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className="primaryBtn" data-aos="fade-up-right">
                  Download CV
                </button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}
