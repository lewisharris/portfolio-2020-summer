import React, { useEffect, useState } from "react";
import "./app.css";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "./styledcomponents/PageFooter";
import NavBar from "./styledcomponents/NavBar";
import AboutMePage from "./AboutMePage";
import ParticlesContainer from "./ParticlesContainer";
import SplashPage from "./SplashPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  countdown = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  componentDidMount() {
    const interval = setInterval(this.countdown, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="App">
        <ParticlesContainer />
        {this.state.count > 0 ? (
          <SplashPage count={this.state.count} />
        ) : (
          <>
            <NavBar />
            <LandingPage />
            <ProjectsPage />
            <AboutMePage dark="true" />
            <ContactPage />
            <Footer />
          </>
        )}
      </div>
    );
  }
}

export default App;
