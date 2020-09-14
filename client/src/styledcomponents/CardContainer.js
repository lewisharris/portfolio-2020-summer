import React from "react";
import styled from "styled-components";
import Card from "./Card";
import PushFitImg from "../images/pushfit-mockup.jpg";
import AlienEscapeImg from "../images/alien-escape.jpeg";
import HolidayPickerImg from "../images/destination-somewhere.jpeg";
import DrumKitImg from "../images/drum-kit.jpeg";
import NutritionChecker from "../images/nutrition-checker.jpeg";

const List = [
  {
    name: "PushFit",
    technology: "React, React-Router, Sass, CSS3, HTML5",
    image: PushFitImg,
    description:
      "A useful workout tool that allows you to enter exercises with specified sets and reps and create a workout for your gym routine.",
    demo: "https://www.google.com",
    code: "link to code",
    design: "link to design",
    keyId: 1
  },
  {
    name: "Workout Tracker",
    technology: "React, NodeJS, GraphQL, Express, MongoDB",
    image: "none",
    description: "Log into your account and keep track of your workouts",
    demo: "link to demo",
    code: "link to code",
    design: "link to design",
    keyId: 2
  },
  {
    name: "Alien Escape",
    technology: "Vanilla Javascript, Sass, CSS3 HTML5",
    image: AlienEscapeImg,
    description: "lorem text",
    demo: "link to demo",
    code: "link to code",
    design: "link to design",
    keyId: 3
  },
  {
    name: "Nutrition Checker",
    technology: "javascript",
    image: NutritionChecker,
    description: "lorem text",
    demo: "link to demo",
    code: "link to code",
    design: "link to design",
    keyId: 4
  },
  {
    name: "Drum Kit",
    technology: "javascript",
    image: DrumKitImg,
    description: "lorem text",
    demo: "link to demo",
    code: "link to code",
    design: "link to design",
    keyId: 5
  },
  {
    name: "Random Destination",
    technology: "javascript",
    image: HolidayPickerImg,
    description: "lorem text",
    demo: "link to demo",
    code: "link to code",
    design: "link to design",
    keyId: 6
  }
];

const Container = styled.div`
  display: grid;
  grid-template-columns: ${props => {
    if (props.displayType === "Grid") {
      return "repeat(auto-fill, minmax(300px, 1fr));";
    }
    return "auto;";
  }};
  justify-content: center;
  width: 100%;
`;

const CardContainer = props => {
  const displayType = props.displayType;

  function cards() {
    const cardList = List.map(project => {
      return (
        <Card displayType={displayType} details={project} key={project.keyId} />
      );
    });
    return cardList;
  }

  return <Container displayType={displayType}>{cards()}</Container>;
};

export default CardContainer;
