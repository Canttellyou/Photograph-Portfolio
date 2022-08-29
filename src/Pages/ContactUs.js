import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle>.</Circle>
            <a href="mailto: akbar123jason@gmail.com"><h2>Send An Email</h2></a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle>.</Circle>
            <a href="https://www.linkedin.com/in/jason-akbar-2813bb21a/"><h2>LinkedIn</h2></a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle>.</Circle>
            <a href="https://twitter.com/Jaydevop"><h2>Twitter</h2></a>

          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 4rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 600px) {
    padding: 2rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  font-size: 3rem;
  background: #353535;
  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  a:link,a:visited,a:active{
    text-decoration: none;
    color:black;
  }
  h2 {
    font-size: 3rem;
    margin: 2rem;
    @media (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
`;
export default ContactUs;
