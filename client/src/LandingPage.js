import React from "react";
import H1 from "./styledcomponents/H1";
import NavBar from "./styledcomponents/NavBar";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <H1>Lewis Harris</H1>
      <h2>Full Stack Developer</h2>
      <h3>Mechanical design engineer turned full stack developer. </h3>
      <button>Explore Projects</button>
    </div>
  );
};

export default LandingPage;
