/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/book.png";

const imageAltText = "desktop with books and pen";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "What I’ve Built",
    description:
      "Explore a selection of projects I’ve developed, showcasing my skills in web development and software engineering. Each project highlights my passion for creating efficient, user-friendly, and innovative solutions.",
    url: "https://github.com/Akshata-hub-max",
  },
  {
    title: "Achievements",
    description:
      "Earned multiple certifications and badges that demonstrate my skills and expertise in advanced technologies and tools. These achievements highlight my dedication to continuous learning and professional development.",
    url: "https://learn.microsoft.com/en-us/users/akshatahabib-8401/",
  },
  {
    title: "My Resume",
    description:
      "Designed a professional and visually appealing resume using Overleaf, showcasing my skills, experience, and accomplishments with precision and clarity.",
    url: "https://drive.google.com/file/d/1WKPMyuEH62hc9TNb2Wl0nPYyzPgxl5_S/view?usp=drive_link",
  },
  {
    title: "HackerRank Profile",
    description:
      "Completed various coding challenges on HackerRank, demonstrating proficiency in algorithms, data structures, and problem-solving skills. These achievements reflect my dedication to improving my technical expertise and tackling complex coding problems.",
    url: "https://www.hackerrank.com/profile/akshatarhabib",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
