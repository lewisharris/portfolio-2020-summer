import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { DarkTheme, LightTheme } from "./theme/Theme";
import "./app.css";
import LandingPage from "./LandingPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import Footer from "./styledcomponents/PageFooter";
import NavBar from "./styledcomponents/NavBar";
import AboutMePage from "./AboutMePage";
import ParticlesContainer from "./ParticlesContainer";
import SplashPage from "./SplashPage";
import Container from "./styledcomponents/Container";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, theme: LightTheme };
  }
  countdown = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  setInitialTheme = () => {
    var d = new Date();
    d.getHours() >= 20
      ? this.setState({ theme: DarkTheme })
      : this.setState({ theme: LightTheme });
  };

  toggleTheme = () => {
    this.state.theme === LightTheme
      ? this.setState({ theme: DarkTheme })
      : this.setState({ theme: LightTheme });
  };

  componentDidMount() {
    const interval = setInterval(this.countdown, 1000);
    this.setInitialTheme();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <ParticlesContainer />
          <Container>
            {this.state.count > 0 ? (
              <SplashPage count={this.state.count} />
            ) : (
              <>
                <NavBar
                  toggleTheme={this.toggleTheme}
                  currentTheme={this.state.theme}
                />
                <LandingPage />
                <ProjectsPage />
                <AboutMePage dark="true" id="about" />
                <ContactPage id="contact" />
                <Footer />
              </>
            )}
          </Container>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
