import React from "react";
import H2 from "./styledcomponents/H2";
import Section from "./styledcomponents/Section";
import Gallery from "./styledcomponents/Gallery";
import H3 from "./styledcomponents/H3";

const ProjectsPage = props => {
  return (
    <Section id="projects">
      <H2>Projects.</H2>
      <H3>Some of my most recent projects using a range of technologies.</H3>
      <Gallery />
    </Section>
  );
};

export default ProjectsPage;
