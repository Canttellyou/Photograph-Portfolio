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
              <span>JayDev.</span>
            </motion.h2>
          </Hide>

          <motion.p variants={fade}>
            I am a highly motivated software engineer with expertise in JavaScript, CSS, Python, C, C++, React.js, Data Analysis and Cloud Engineering. I am well organized, detail oriented, and a team player with prolific leadership and soft skills. I possess strong analytical research, and time management skills with a high degree of commitment to my work.
          </motion.p>
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
          alt="guy with a camera"
        />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
