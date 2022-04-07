import React from "react";
import home1 from "../img/home1.png";
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
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any photography or videography ideas that you have.
            We have professionals with amazing skills.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact Us</motion.button>
          </Link>
        </motion.div>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          initial="hidden"
          animate="show"
          src={home1}
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
