import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { testimonials } from "../dummydata";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React from "react";

const Testi = () => {
  return (
    <>
      <section className="testi overflow-hidden">
        <div className="testi-hero">
          <Carousel showDots={false} arrows={false}>
            {testimonials.map((item) => (
              <div className="testi-box">
                <i>
                  <FormatQuoteIcon />
                </i>
                <p>{item.text}</p>
                <div className="testi-img">
                  <img src={item.image} alt="" />
                </div>
                <h3 data-aos="zoom-out-left">{item.name}</h3>
                <label data-aos="zoom-out">{item.post}</label>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};
export default Testi;
