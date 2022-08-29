import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScroll } from "../components/useScroll";
//Images
import ignite from "../img/ignite.png";
import jaymdb from "../img/jaymdb.png";
import dalukwa from "../img/dalukwa.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
  scrollReveal,
} from "../animation";
const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>Ignite Games</motion.h2>
        <motion.div
          variants={lineAnimation}
          initial="hidden"
          animate="show"
          className="line"
        ></motion.div>
        <a href="https://ignitevgames.netlify.app/" >
          <motion.img variants={photoAnimation} src={ignite} alt="athlete" />
        </a>
      </Movie>
      <Movie
        ref={element}
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
      >
        <h2>JayMDB</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <a href="https://jaymdb.netlify.app/">
          <Hide>
            <img src={jaymdb} alt="theracer" />
          </Hide>
        </a>
      </Movie>
      <Movie
        ref={element2}
        variants={scrollReveal}
        animate={controls2}
        initial="hidden"
      >
        <h2>Dalukwa</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <a href="https://www.dalukwa.com/">
          <img src={dalukwa} alt="goodtimes" />
        </a>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 4rem;
  @media (max-width: 600px) {
    padding: 2rem;
  }
  h2 {
    padding: 1rem 0;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
///Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
