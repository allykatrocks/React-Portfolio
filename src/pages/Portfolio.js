import React from "react";
import Sports_Image from "../assets/images/sports app.png";
import Weather_Image from "../assets/images/final weather dashboard.png";
import Ballad_Image from "../assets/images/ballad.png";
import Employee_Image from "../assets/images/employee.png";
import Planner_Image from "../assets/images/planner.png";

const Portfolio = () => {
  let projects = [
    {
      name: "MLB Database App",
      location: "https://maxwellstickels.github.io/sports-app/",
      imagePath: Sports_Image,
      github_url: "https://github.com/maxwellstickels/sports-app/",
      repo_name: 'MLB Repo',
    },
    {
      name: "Weather Forecast App",
      location: "https://allykatrocks.github.io/homework-weather/",
      imagePath: Weather_Image,
      github_url: "https://github.com/allykatrocks/homework-weather",
      repo_name: 'Weather Repo'
    },
    {
      name: "Ballad Dating App",
      location: "https://github.com/ericrudeen/rockstar-group",
      imagePath: Ballad_Image,
      github_url: "https://ballad-ucsd.herokuapp.com/",
      repo_name: 'Heroku App',
    },
    {
      name: "Employee Tracker",
      location: "https://github.com/allykatrocks/homework-employee-tracker",
      imagePath: Employee_Image,
      github_url: "https://github.com/allykatrocks/homework-employee-tracker",
      repo_name: 'Employee Tracker',
    },
    {
      name: "Day Planner",
      location: "https://allykatrocks.github.io/homework-planner/",
      imagePath: Planner_Image,
      github_url: "https://github.com/allykatrocks/homework-planner",
      repo_name: 'Day Planner',
    }
  ];
  return (
    <section class="my-work" id="my-work">
      <h2>Portfolio</h2>
      {projects.map((project) => {
        return (
          <div>
            <h3>{project.name}</h3>
            <a href={project.location}>
              <img class="work-large-image" src={project.imagePath} />
            </a>
            <p>
              Link to Github repo:
              <a href={project.github_url}>{project.repo_name}</a>
            </p>
          </div>
        );
      })}
      <div class="flex-row">
      </div>
      <div class="flex-row">
      </div>
    </section>
  );
};

export default Portfolio;
