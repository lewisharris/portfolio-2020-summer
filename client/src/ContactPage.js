import React from "react";
import H2 from "./styledcomponents/H2";
import H3 from "./styledcomponents/H3";
import H4 from "./styledcomponents/H4";
import Form from "./styledcomponents/ContactForm";
import Section from "./styledcomponents/Section";
import ContactFlexSection from "./styledcomponents/ContactFlexSection";
import ContactFlexContainer from "./styledcomponents/ContactFlexContainer";
import ContactFlexBox from "./styledcomponents/ContactFlexBox";
import Github from "./images/icons/github-icon.png";
import Medium from "./images/icons/medium-icon.png";
import Dribbble from "./images/icons/dribbble-icon.svg";

const ContactPage = () => {
  return (
    <Section id="contact">
      <H2>Contact.</H2>
      <H3>Looking to work with me or just want to get in touch?</H3>
      <ContactFlexContainer>
        <ContactFlexBox>
          <div>
            <H4>Connect with me...</H4>
            <Form></Form>
          </div>
        </ContactFlexBox>

        <ContactFlexBox>
          <H4>Find me on...</H4>
          <ContactFlexSection
            image={Github}
            header="Github"
            text="I regularly push my projects to GitHub. Here is where you can
                  find most of my finished work along with the code."
            link="https://www.github.com/lewisharris"
          />
          <ContactFlexSection
            image={Dribbble}
            header="Dribbble"
            text="I post most of my design work for projects on dribbble. Head
              over to check out my latest designs."
            link="https://dribbble.com/lewisharris"
          />
          <ContactFlexSection
            image={Medium}
            header="Medium"
            text="I regularly share my opinions and thoughts on various topics,
              from technologies, to personal experiences."
            link="https://medium.com/@lewisdanielharris"
          />
        </ContactFlexBox>
      </ContactFlexContainer>
    </Section>
  );
};

export default ContactPage;
