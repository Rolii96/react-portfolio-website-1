import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfoliooo.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portofolio Website- Roland Ajeti",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/index.html",
  },
  {
    id: 2,
    image: IMG2,
    title: "JavaScript Calculator",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/javascript%20calculator/",
  },
  {
    id: 3,
    image: IMG3,
    title: "jQuery Calendar",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/calendar%20project%20using%20jquery/",
  },
  {
    id: 4,
    image: IMG4,
    title: "GetYourGatged.com- Website Idea",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/project%20rolandajeti/rolandajeti/",
  },
  {
    id: 5,
    image: IMG5,
    title: "HTML, CSS & JAVASCRIPT Website",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/complete%20web%20page%20(html,%20css%20&%20js)/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Facebook.com - Website ",
    github: "https://github.com",
    demo: "https://suspicious-wilson-154a58.netlify.app/facebook%20page-like/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
