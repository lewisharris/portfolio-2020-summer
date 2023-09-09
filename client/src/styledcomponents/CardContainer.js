import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import Card from "./Card";
import EatWellImg from "../images/eatwell-mockup.jpg";
import PushFitImg from "../images/pushfit-mockup.jpg";
import AlienEscapeImg from "../images/alien-escape.jpeg";
import DrumKitImg from "../images/drum-kit.jpeg";
import NutritionChecker from "../images/nutrition-checker.jpeg";
import ToggleGallery from "./ToggleGallery";

const List = [
  {
    name: "EatWell",
    stack: "Full Stack",
    technology: "React, NodeJS, Express, MongoDB",
    image: EatWellImg,
    description:
      "Calculate your daily intake of food with this full stack food tracking app. With a food API search tool, manual entry option, and custom calorie targets. Created with node and express on the back end, and React on the front end",
    demo: "https://eat-well-food-tracker.herokuapp.com/login",
    code: "https://github.com/lewisharris/Eatwell",
    design: "https://github.com/lewisharris/Eatwell/blob/master/README.md",
    keyId: 1
  },
  {
    name: "PushFit",
    technology: "React, React-Router, styled-components, CSS3, HTML5",
    image: PushFitImg,
    description:
      "A useful workout tool that allows you to enter exercises with specified sets and reps and create a workout for your gym routine. With workout stats and variable rest periods you can create your own HIIT workouts in no time.",
    demo: "https://lewisharris.github.io/pushFIT/#/",
    code: "https://github.com/lewisharris/pushFIT",
    design: "https://dribbble.com/shots/14207881-Personal-Fitness-App",
    keyId: 2
  },
  // {
  //   name: "Workout Tracker",
  //   technology: "React, NodeJS, GraphQL, Express, MongoDB",
  //   image: "none",
  //   description:
  //     "Log into your account and keep track of your workouts for the week. With the option to add multiple workouts for each day and categorise them, you will never miss a workout again.",
  //   demo: "link to demo",
  //   code: "link to code",
  //   design: "link to design",
  //   keyId: 2
  // },
  {
    name: "Alien Escape",
    technology: "Vanilla Javascript, Sass, CSS3 HTML5",
    image: AlienEscapeImg,
    description:
      "Try and help the alien escape to his ship in time before it departs without him. This is a hangman style game in which the user has to guess the correct programming language. Don't get left behind.",
    demo: "https://lewisharris.github.io/alien-escape/",
    code: "https://github.com/lewisharris/alien-escape",
    design: "",
    keyId: 3
  },
  {
    name: "Nutrition Checker",
    technology: "React, Edamam API, Vanilla Javascript, CSS3",
    image: NutritionChecker,
    description:
      "A nutrition checker using the Edamam api to find nutritional information about various foods using a search bar.",
    demo: "https://lewisharris.github.io/React-Nutrition-Checker/",
    code: "https://github.com/lewisharris/React-Nutrition-Checker",
    design: "",
    keyId: 4
  }
];

const Container = styled.div`
  visibility: none;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  justify-content: center;
  align-self: center;
`;

const Button = styled.button`
  background: none;
  border: none;
`;

const CardContainer = () => {
  const [displaySlides, setDisplaySlides] = useState(true);
  const handleDragStart = e => e.preventDefault();

  function cards() {
    const cardList = List.map(project => {
      return <Card details={project} key={project.keyId} />;
    });
    return cardList;
  }

  const projects = List.map(project => (
    <Card
      details={project}
      key={project.keyId}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));

  return (
    <>
      <Button onClick={() => setDisplaySlides(prev => !prev)}>
        {`${displaySlides ? "List" : "Slide"} View`}
      </Button>
      {displaySlides ? (
        <AliceCarousel
          mouseTracking
          items={projects}
          autoPlay={true}
          autoPlayInterval={3500}
          infinite={true}
        />
      ) : (
        <Container>{cards()}</Container>
      )}
    </>
  );
};

export default CardContainer;
