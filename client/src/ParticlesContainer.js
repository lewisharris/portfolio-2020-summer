import Particles from "react-particles-js";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ParticlesContainer = () => {
  return (
    <Container>
      <Particles
        params={{
          particles: {
            number: {
              value: 24,
              density: {
                enable: true,
                value_area: 1025.8919341219544
              }
            },
            color: {
              value: "CDCDCD"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#F8AEAC"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 57.54245754245754,
                size_min: 4.795204795204795,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#EC6D69",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3.1565905665290903,
              direction: "top",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 100,
                size: 4,
                duration: 1.1988011988011988,
                opacity: 8,
                speed: 2
              },
              repulse: {
                distance: 300,
                duration: 0.4
              },
              push: {
                particles_nb: 20
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: "-1"
        }}
      />
      <Particles
        params={{
          particles: {
            number: {
              value: 24,
              density: {
                enable: true,
                value_area: 1025.8919341219544
              }
            },
            color: {
              value: "#000000"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#F8AEAC"
              },
              polygon: {
                nb_sides: 5
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 57.54245754245754,
                size_min: 4.795204795204795,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 200,
              color: "#EC6D69",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 3.1565905665290903,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 100,
                size: 4,
                duration: 1.1988011988011988,
                opacity: 8,
                speed: 2
              },
              repulse: {
                distance: 300,
                duration: 0.4
              },
              push: {
                particles_nb: 20
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: "-1"
        }}
      />
    </Container>
  );
};

export default ParticlesContainer;
