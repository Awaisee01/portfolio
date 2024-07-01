import React from "react";
import { blog } from "../dummydata";
export default function Blog() {
  return (
    <>
      <section className="blog">
        <h1>Blog</h1>
        <div className="blog-grid">
          {blog.map((item) => (
            <div className="blog-box" data-aos="flip-left">
              <div className="img" data-aos="fade-up">
                <img src={item.cover} alt="" data-aos="fade-down" />
              </div>
              <div className="text">
                <h3 data-aos="fade-right">{item.title}</h3>
                <label data-aos="fade-left">
                  By {item.author} {item.date}
                </label>
                <p data-aos="fade-up-right">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
