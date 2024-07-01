import React from "react";
import { services } from "../dummydata";

export default function Service() {
  return (
    <>
      <section className="service">
        <div>
          <h1 className=" mb-5">Services</h1>
        </div>
        <div className="service-grid ">
          {services.map((val, i) => (
            <div className="box">
              <i> {val.icon} </i>
              <h4 className="mt-3"> {val.title} </h4>
              <p> {val.desc} </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
