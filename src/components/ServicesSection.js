import React from "react";

///Import Icons
import react from "../img/react-icon.png";
import cplus from "../img/cplus-icon.png";
import python from "../img/python-icon.png";
import javascript from "../img/javascript-icon.png";
import html from "../img/html-icon.png";
import node from "../img/node-icon.png";
import css_icon from "../img/css_icon.png";
import sass_icon from "../img/sass-icon.png";
import udemy from "../img/udemy.png";
import github from "../img/github.svg";
import redux from "../img/redux.svg";

import aws from "../img/aws.png";
import { useScroll } from "./useScroll";
//Styles
import styled from "styled-components";

import { scrollReveal } from "../animation";
import { About, Description, Image } from "../style";


const ServicesSection = () => {


  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>Tools</span> and <span>Certifications</span>
        </h2>
        <Cards>
          <Card className="card">
            <div className="icon">
              <img src={react} alt="des-icon" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={python} alt="python" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={github} alt="github" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={cplus} alt="cplus" />

            </div>

          </Card>
          <Card className="card">
            <a href="https://www.credly.com/badges/4634f373-347f-4752-8977-8162252f7488?source=linked_in_profile"><div className="icon">
              <img src={aws} alt="des-icon" />

            </div></a>


          </Card>

          <Card className="card">
            <div className="icon">
              <img src={redux} alt="github" />

            </div>

          </Card>
          <Card className="card">
            <a href="https://www.udemy.com/certificate/UC-5f6e6dde-b071-4ea4-a304-fc051c1311d4/"><div className="icon">
              <img src={udemy} alt="des-icon" />

            </div></a>


          </Card>
          <Card className="card">
            <div className="icon">
              <img src={javascript} alt="javascript" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={node} alt="des-icon" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={html} alt="des-icon" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={css_icon} alt="des-icon" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={sass_icon} alt="des-icon" />

            </div>

          </Card>

        </Cards>
      </Description>


    </Services>
  );
};



const Services = styled(About)`
width: 100%;
padding:0 10%;

  h2 {
    padding-bottom: 2rem;
    text-align:center;
    width: 100%;
  }
  p {
    width: 70%;
    padding: .2rem 0 .5rem 0;
    text-align:center;
    width: 100%;
    @media (max-width: 600px) {
      padding: 2rem 0;
    }
  }
`;
const Cards = styled.div`

  display: flex;
  flex-wrap:wrap;
   padding:0 2rem ;
  
  
  gap:3rem;
  margin-top: 1rem;
  width:100%;
   justify-content: center;
   align-items: center;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;
const Card = styled.div`


  .icon {
   
    display: flex;
    align-items: center;
   
    
    @media (max-width: 600px) {
    width:4rem;
      
  }
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
    img{
      width:6rem;
      height:6rem;
      @media (max-width: 600px) {
    width:4rem;
      height:4rem;
  }
      transition: all .3s ease;
      &:hover{
        transform: scale(1.3);
      }
    }
  }
`;
export default ServicesSection;
