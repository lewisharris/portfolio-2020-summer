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
      "A useful workout tool that allows you to enter exercises with specified sets and reps and create a workout for your gym routine. With workout stats and variable rest periods you can create your own HIIT workouts in no time.",
    demo: "https://lewisharris.github.io/pushFIT/#/",
    code: "https://github.com/lewisharris/pushFIT",
    design: "https://dribbble.com/shots/14207881-Personal-Fitness-App",
    keyId: 1
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
    design: "link to design",
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
    design: "link to design",
    keyId: 4
  },
  {
    name: "Drum Kit",
    technology: "Vanilla Javascript, CSS3, HTML5",
    image: DrumKitImg,
    description:
      "A keypad drum kit for instant musical fun. Tap the keys to make your own beats from your keyboard. This was made using Vanilla javascript.",
    demo: "https://lewisharris.github.io/drum-kit/",
    code: "https://github.com/lewisharris/drum-kit",
    design: "link to design",
    keyId: 5
  },
  {
    name: "Random Destination",
    technology: "Vanilla Javascript, CSS3, HTML5",
    image: HolidayPickerImg,
    description:
      "This is a random destination picker that utilises the Countries API to pick a random destination to go on holiday, where will you go next.",
    demo: "https://lewisharris.github.io/random-holiday-generator/",
    code: "https://github.com/lewisharris/random-holiday-generator",
    design: "link to design",
    keyId: 6
  }
];

const Container = styled.div`
  display: grid;
  margin: 0px auto;
  grid-template-columns: ${props => {
    if (props.displayType === "Grid") {
      return "repeat(auto-fill, minmax(300px, 1fr));";
    }
    return "auto;";
  }};
  justify-content: center;
  width: 90%;
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
