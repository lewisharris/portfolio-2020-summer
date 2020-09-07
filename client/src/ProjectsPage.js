import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import H2 from "./styledcomponents/H2";
import Section from "./styledcomponents/Section";
import Gallery from "./styledcomponents/Gallery";
import H3 from "./styledcomponents/H3";
import GitHubInfo from "./styledcomponents/GitHubInfo";

const ProjectsPage = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    console.log(headerRef);
    gsap.from(headerRef.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "none",
      delay: 1
    });
  });
  return (
    <Section>
      <GitHubInfo />
      <H2 ref={headerRef} className="header">
        Projects
      </H2>
      <H3>Some of my most recent projects using a range of technologies.</H3>
      <Gallery />
    </Section>
  );
};

export default ProjectsPage;
