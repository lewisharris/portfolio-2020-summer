import React from "react";
import "./app.css";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "./styledcomponents/PageFooter";
import NavBar from "./styledcomponents/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
