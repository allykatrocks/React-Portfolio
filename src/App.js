import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  const getCurrentPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (currentPage === "Resume") {
      return <Resume />;
    }
  };
  return (
    <div>
      <header>
        <h1>Alex DeMarco</h1>
        {/* <div> */}
        <ul className="navbar">
          <li
            className={currentPage === "About Me" ? "active" : ""}
            onClick={() => {
              setCurrentPage("About Me");
            }}
          >
            About Me
          </li>
          <li
            className={currentPage === "Contact" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Contact");
            }}
          >
            Contact
          </li>
          <li
            className={currentPage === "Portfolio" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Portfolio");
            }}
          >
            Portfolio
          </li>
          <li
            className={currentPage === "Resume" ? "active" : ""}
            onClick={() => {
              setCurrentPage("Resume");
            }}
          >
            Resume
          </li>
        </ul>
        {/* </div> */}
      </header>
      {getCurrentPage()}
      <footer>
      <h2>Contact Me</h2>
        <ul>
          <li>Cell: (760)685-7136</li>
          <li>
          Email:
            <a href="demarcoalexandria5@gmail.com"
              > demarcoalexandria5@gmail.com</a>
          </li>
          <li>
            <a href="https://www.facebook.com/alex.demarco.16/">
              Facebook</a>
          </li>
          <li>
            <a href="www.linkedin.com/in/alex-demarco-002906b7">
              LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/allykatrocks">
               Github</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
