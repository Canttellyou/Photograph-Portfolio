import React from "react";
import home1 from "../img/porthead2.jpg";
import { About, Description, Image, Hide } from "../style";
import { Link } from "react-router-dom";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
//Waves
import Wave from "./Waves";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>

          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>Jason Akbar</span>
            </motion.h2>
          </Hide>

          <motion.p variants={fade}>
            My full name is Anim Jason Akbar, a software engineer. I got the passion to code when I witnessed a friend coding and thought it was super cryptic and difficult. I made up my mind to learn and hopefully master this strange world of programming.




          </motion.p>

          <motion.p variants={fade}>There's a lot to know about me and how we can work together to build great things. I want to hear from you soon... </motion.p>

          <Link to="/contact">
            <motion.button variants={fade}>Let's talk</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home1}
          alt="self portrait"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
