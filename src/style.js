import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
///Styled Components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  color: white;
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 4rem 2rem;
  }
`;
export const Description = styled.div`
  z-index: 2;
  width:100%;
  
  flex: 1;
  padding-right: 1%;
 

  h2 {
    /* font-weight: lighter; */
    @media (max-width: 600px) {
      font-size: 2.5rem;
      
    }
  }
  @media (max-width: 600px) {
    width: 100%;
    flex: 2;
    padding-right: 0;
  }
`;
export const Image = styled.div`
  flex: 0.8;
  overflow: hidden;
border-radius: 10px;
  z-index: 2;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
