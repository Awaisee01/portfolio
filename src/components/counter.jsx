import React from "react";
import { project } from "../dummydata";
import CountUp from "react-countup";
export default function Counter() {
  return (
    <>
      <div className="counter">
        <div className="counter-grid">
          {project.map((val, i) => (
            <div className="counter-1 col-lg-3 ">
              <i> {val.icon} </i>
              <h1>
                <CountUp enableScrollSpy duration={2} end={val.num} />
              </h1>
              <p> {val.title} </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
