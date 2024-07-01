import React from "react";
// import React, { useEffect } from "react"
import { home } from "../dummydata";
import Typewriter from "typewriter-effect";
export default function Homee() {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div className="hero-contanier">
            <h3>{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-left">{val.desc}</p>
            <button className="primaryBtn" data-aos="fade-up-right">
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
