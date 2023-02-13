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
          <span>Tools I use</span> 
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgcSmLa3RCRUDEkcakMDMNFR8EH3_VJht1Q&usqp=CAU" alt="angular" />

            </div>

          </Card>
          <Card className="card">
            <div className="icon">
              <img src={cplus} alt="cplus" />

            </div>

          </Card>
<Card className="card">
            <div className="icon">
              <img src="data:image/png;base64,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" alt="typsescript" />

            </div>

          </Card>
        

          <Card className="card">
            <div className="icon">
              <img src={redux} alt="github" />

            </div>

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
