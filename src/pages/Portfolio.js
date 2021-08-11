import React from "react";
import Sports_Image from "../assets/images/sports app.png";
import Weather_Image from "../assets/images/final weather dashboard.png";
import Ballad_Image from "../assets/images/ballad.png";
import Employee_Image from "../assets/images/employee.png";
import Planner_Image from "../assets/images/planner.png";
import Blog_Image from "../assets/images/techblog.png";

const Portfolio = () => {
  let projects = [
    {
      name: "MLB Database App",
      location: "https://maxwellstickels.github.io/sports-app/",
      imagePath: Sports_Image,
      github_url: "https://github.com/maxwellstickels/sports-app/",
      repo_name: "MLB Repo",
      project_summary:
        "A website for avid baseball fans that uses Third Party APIs to retrieve stats on players and teams.",
    },
    {
      name: "Weather Forecast App",
      location: "https://allykatrocks.github.io/homework-weather/",
      imagePath: Weather_Image,
      github_url: "https://github.com/allykatrocks/homework-weather",
      repo_name: "Weather Repo",
      project_summary:
        "A weather forecast app that uses Server-Side APIs to produce the current and 5 day forecast for any US city.",
    },
    {
      name: "Ballad Dating App",
      location: "https://github.com/ericrudeen/rockstar-group",
      imagePath: Ballad_Image,
      github_url: "https://ballad-ucsd.herokuapp.com/",
      repo_name: "Heroku App",
      project_summary: "A dating app that uses a MySql database to match people based on shared music interests.",
    },
    {
      name: "Employee Tracker",
      location: "https://github.com/allykatrocks/homework-employee-tracker",
      imagePath: Employee_Image,
      github_url: "https://github.com/allykatrocks/homework-employee-tracker",
      repo_name: "Employee Tracker",
      project_summary: "A tracking system that also utilizes a MySql database to keep track of a company's employees.",
    },
    {
      name: "Day Planner",
      location: "https://allykatrocks.github.io/homework-planner/",
      imagePath: Planner_Image,
      github_url: "https://github.com/allykatrocks/homework-planner",
      repo_name: "Day Planner",
      project_summary: "A work planner that uses Moment.js and Third Party APIs to plan out one's day.",
    },
    {
      name: "Tech Blog",
      location: "https://bcs-tech-blog.herokuapp.com",
      imagePath: Blog_Image,
      github_url: "https://github.com/allykatrocks/homework-techblog",
      repo_name: "Blog on Heroku",
      project_summary: "A blog that uses MVC and Handlebar.js for developers to share ideas."
    },
  ];
  return (
    <div>
      <h2>Portfolio</h2>
      <section className="my-work" id="my-work">
        {projects.map((project) => {
          return (
            <div className="block">
              <h4>{project.name}</h4>
              <a href={project.location}>
                <img className="work-large-image" src={project.imagePath} />
              </a>
              <p>
                Link to Github repo:
                <a href={project.github_url}>{project.repo_name}</a>
              </p>
              <p>{project.project_summary}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
