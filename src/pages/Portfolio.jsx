import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import port1 from "./images/port/port1.jpg";
import port2 from "./images/port/port2.jpg";
import port3 from "./images/port/port3.jpg";
import port4 from "./images/port/port4.jpg";
import port5 from "./images/port/port5.jpg";
import port6 from "./images/port/port6.jpg";

import React from "react";
const Portfolio = () => {
  const buttons = [
    {
      id: 1,
      cat: "All",
    },
    {
      id: 1,
      cat: "Design",
    },
    {
      id: 1,
      cat: "Marketing",
    },
    {
      id: 1,
      cat: "Development",
    },
  ];
  const portfolioItems = [
    {
      id: 1,
      cover: port1,
      name: "Brand",
      category: "All",
      title: "Brex Logo",
    },
    {
      id: 2,
      cover: port2,
      name: "Brand",
      category: "Design",
      title: "Brex Logo",
    },
    {
      id: 3,
      cover: port3,
      name: "Brand",
      category: "development",
      title: "Brex Logo",
    },
    {
      id: 4,
      cover: port4,
      name: "Brand",
      category: "marketing",
      title: "Brex Logo",
    },
    {
      id: 5,
      cover: port5,
      name: "Brand",
      category: "marketing",

      title: "Brex Logo",
    },
    {
      id: 6,
      cover: port6,
      name: "Brand",
      category: "marketing",

      title: "Brex Logo",
    },
  ];

  return (
    <>
      <section className="portfolio">
        <h1>Portfolio</h1>
        <div className="catButton m-5 ">
          {buttons.map((item) => (
            <button className="primaryBtn" data-aos="zoom-out-down">
              {item.cat}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="box-1 bg-black" data-aos="fade-up">
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="overlay">
                <h3>{item.title}</h3>
                <span>{item.name}</span>
                <VisibilityOutlinedIcon />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
