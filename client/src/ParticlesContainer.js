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
              value: 467,
              density: {
                enable: true,
                value_area: 3367.1653278175977
              }
            },
            color: {
              value: "#282828"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
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
              value: 59.186073122420446,
              random: true,
              anim: {
                enable: false,
                speed: 40.75924075924076,
                size_min: 4.795204795204795,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#a4a4a4",
              opacity: 0.30464829156444934,
              width: 1
            },
            move: {
              enable: true,
              speed: 1.5782952832645452,
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
                enable: false,
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
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 383.61638361638364,
                size: 0,
                duration: 1.1988011988011988,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
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
          zIndex: "-1",
          background: "#2a2a2a"
        }}
      />
    </Container>
  );
};

export default ParticlesContainer;
