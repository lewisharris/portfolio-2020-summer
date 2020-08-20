import React from "react";
import "./app.css";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "./styledcomponents/PageFooter";

function App() {
  return (
    <div className="App">
      <h1>Portfolio</h1>
      <LandingPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
