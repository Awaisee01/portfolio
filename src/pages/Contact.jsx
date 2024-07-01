import React from "react";
import { contact } from "../dummydata";
export default function Contact() {
  return (
    <>
      <section className="contact">
        <h1>Contact Us</h1>
        <div className="contact-box">
          <div className="right-contact">
            <form action="/Heroo">
              <div className="flex m-3">
                <input className="me-4" type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="flex-2 m-3">
                <input className="mb-3" type="text" placeholder="Subject" />
                <textarea
                  placeholder="Textarea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  data-aos="flip-down"
                ></textarea>
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div className="left-contact">
            {contact.map((item) => (
              <div className="data">
                <i>{item.icon}</i>
                <p>{item.text1}</p>
                <p>{item.text2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
