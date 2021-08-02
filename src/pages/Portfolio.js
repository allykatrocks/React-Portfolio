import React from "react";
import Sports_Image from "../assets/images/sports app.png";
import Weather_Image from "../assets/images/final weather dashboard.png"

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
        <section>
          <h3>Ballad Dating App</h3>
          <a href="https://github.com/ericrudeen/rockstar-group">
            <img
              class="work-small-images"
              height="200"
              width="200"
              src="./images/ballad.png"
            />
          </a>
          <p>
            Heroku Link:<a href="https://ballad-ucsd.herokuapp.com/">Ballad</a>
          </p>
        </section>
        <section>
          <h3>Employee Tracker</h3>
          <a href="https://github.com/allykatrocks/homework-employee-tracker">
            <img class="work-small-images" src="./images/employee.png" />
          </a>
        </section>
      </div>
      <div class="flex-row">
        <section>
          <h3>Day Planner</h3>
          <a href=" https://allykatrocks.github.io/homework-planner/">
            <img
              class="work-small-images"
              width="200"
              src="./images/planner.png"
            />
          </a>
          <p>
            Link to Github Repo:
            <a href="https://github.com/allykatrocks/homework-planner">
              Planner Repo
            </a>
          </p>
        </section>
        <a href="https://github.com/allykatrocks">
          <img
            class="work-small-images"
            height="200"
            width="200"
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/empty-paved-road-at-sunset-in-the-chilean-patagonia-royalty-free-image-1591901619.jpg"
          />
        </a>
        <a href="https://github.com/allykatrocks">
          <img
            class="work-small-images"
            src="https://www.wakesmiles.org/wp-content/uploads/2018/02/female-placeholder-300x300.jpg"
          />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
