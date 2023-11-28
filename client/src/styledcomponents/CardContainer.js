import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import Card from "./Card";
import EatWellImg from "../images/eatwell-mockup.jpg";
import PushFitImg from "../images/pushfit-mockup.jpg";
import AlienEscapeImg from "../images/alien-escape.jpg";
import NutritionChecker from "../images/nutrition-checker.jpg";

const List = [
  {
    name: "EatWell",
    stack: "Full Stack",
    technology: "React, NodeJS, Express, MongoDB",
    image: EatWellImg,
    description:
      "Calculate your daily intake of food with this full stack food tracking app. With a food API search tool, manual entry option, and custom calorie targets. Created with node and express on the back end, and React on the front end",
    demo: "https://eatwell-yi7a.onrender.com",
    code: "https://github.com/lewisharris/Eatwell",
    design: "https://github.com/lewisharris/Eatwell/blob/master/README.md",
    keyId: 1,
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
    keyId: 2,
  },
  {
    name: "Alien Escape",
    technology: "Vanilla Javascript, Sass, CSS3 HTML5",
    image: AlienEscapeImg,
    description:
      "Try and help the alien escape to his ship in time before it departs without him. This is a hangman style game in which the user has to guess the correct programming language. Don't get left behind.",
    demo: "https://lewisharris.github.io/alien-escape/",
    code: "https://github.com/lewisharris/alien-escape",
    design: "",
    keyId: 3,
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
    keyId: 4,
  },
];

const Container = styled.div`
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

const ViewText = styled.span`
  margin: auto 6px;
`;
const ToggleDiv = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  color: ${(props) => props.theme.darkText};
  margin: 10px auto;
  cursor: pointer;
  border: solid 1px #eb706e;
  border-radius: 5px;
  font-size: 16px;
  @media screen and (max-width: 368px) {
    font-size: 12px;
  }
`;

const CardContainer = () => {
  const [displaySlides, setDisplaySlides] = useState(true);
  const handleDragStart = (e) => e.preventDefault();

  function cards() {
    const cardList = List.map((project) => {
      return <Card details={project} key={project.keyId} />;
    });
    return cardList;
  }

  const projects = List.map((project) => (
    <Card
      details={project}
      key={project.keyId}
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));

  return (
    <>
      <Button onClick={() => setDisplaySlides((prev) => !prev)}>
        <ToggleDiv>
          {displaySlides ? (
            <ion-icon name="list-outline"></ion-icon>
          ) : (
            <ion-icon name="tv-outline"></ion-icon>
          )}

          <ViewText>{`View ${displaySlides ? "List" : "Slides"}`}</ViewText>
        </ToggleDiv>
      </Button>
      {displaySlides ? (
        <AliceCarousel
          mouseTracking
          items={projects}
          autoPlay={true}
          autoPlayInterval={3500}
          infinite={true}
          disableButtonsControl
          //NExt and prev buttons disabled in root CSS
        />
      ) : (
        <Container>{cards()}</Container>
      )}
    </>
  );
};

export default CardContainer;
