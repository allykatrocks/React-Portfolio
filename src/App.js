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
            <li className={currentPage === 'About Me' ? "active": ""}
              onClick={() => {
                setCurrentPage("About Me");
              }}
            >
              About Me
            </li>
            <li
              onClick={() => {
                setCurrentPage("Contact");
              }}
            >
              Contact
            </li>
            <li
              onClick={() => {
                setCurrentPage("Portfolio");
              }}
            >
              Portfolio
            </li>
            <li
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
    </div>
  );
}

export default App;
