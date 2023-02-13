import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any Question ?<span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How long have you been doing this?">
          <div className="answer">
            <p>For more than 4 years.</p>

            <p>
              I've worked and built my experience with various programming languages over the course of my career.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Well it's all about priorities.</p>
            <p>
              I believe success must be wholesome. That's why in my schedule I make sure to always prioritize working out and reading books but mostly... It's all coding. If I'm not coding, I'm definitely watching something educative or taking in some fresh air.
            </p>
          </div>
        </Toggle>
        <Toggle title="Are you willing to work remotely?">
          <div className="answer">
            <p>Yes!</p>
            <p>
              I'm always eager to work online, abroad or remotely. These do not hinder my progress or effectiveness. Hourly, weekly, monthly... I always believe we can always find a way to both win big.
            </p>
          </div>
        </Toggle>

      </AnimateSharedLayout>
    </Faq>
  );
};
const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
    @media (max-width: 600px) {
      font-size: 3rem;
    }
  }
  .faq-line {
    background: #ccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 1rem 0;
    cursor: pointer;
  }
  h4 {
    color: white;
    font-size: 1.8rem;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;
export default FaqSection;
