import React, { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

function App() {
  const [currentPage, setCurrentPage] = useState("About Me");
  const getCurrentPage = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    } else if (currentPage === "Contact") {
      return <Contact />;
    } else if (currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Resume />;
    }
  };
  return (
    <div>
      <div>
        <a
          onClick={() => {
            setCurrentPage("About Me");
          }}
          href="#AboutMe"
        >
          About Me
        </a>
        <a
          onClick={() => {
            setCurrentPage("Contact");
          }}
          href="#Contact"
        >
          Contact
        </a>
        <a
          onClick={() => {
            setCurrentPage("Portfolio");
          }}
          href="#Portfolio"
        >
          Portfolio
        </a>
        <a
          onClick={() => {
            setCurrentPage("Resume");
          }}
          href="Resume"
        >
          Resume
        </a>
      </div>
      {getCurrentPage()}
    </div>
  );
}

export default App;
