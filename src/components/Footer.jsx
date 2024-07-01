import React from "react";
import { social } from "../dummydata";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          {social.map((val, i) => (
            <>
              <i data-aos="zoom-in">{val.icon}</i>
            </>
          ))}
          <p data-aos="zoom-in" className="mt-4">
            All Right Resceved 2018
          </p>
        </div>
      </footer>
    </>
  );
}
