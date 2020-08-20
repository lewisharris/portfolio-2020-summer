import React from "react";
import H2 from "./styledcomponents/H2";
import H3 from "./styledcomponents/H3";
import H4 from "./styledcomponents/H4";
import Form from "./styledcomponents/ContactForm";
import Section from "./styledcomponents/Section";
import ContactFlexSection from "./styledcomponents/ContactFlexSection";

const ContactPage = () => {
  return (
    <Section>
      <H2>Contact</H2>
      <H3>Looking to work with me or just want to get in touch?</H3>
      <div>
        <div>
          <H4>Connect with me...</H4>
          <Form></Form>
          <p>or</p>
          <img alt="linkedin-logo"></img>
        </div>
      </div>

      <div>
        <H4>Find me on...</H4>

        <ContactFlexSection
          image={"Github"}
          header="Github"
          text="I regularly push my projects to GitHub. Here is where you can
                find most of my finished work along with the code."
        />
        <hr />
        <ContactFlexSection
          image={"Dribbble"}
          header="Dribbble"
          text="I post most of my design work for projects on dribbble. Head
            over to check out my latest designs."
        />
        <hr />
        <ContactFlexSection
          image={"Medium"}
          header="Medium"
          text="I regularly share my opinions and thoughts on various topics,
            from technologies, to personal experiences."
        />
      </div>
    </Section>
  );
};

export default ContactPage;
