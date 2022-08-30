import React from "react";
import styled from "styled-components";
import navgit from "../img/navgit.png";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Jason Akbar
        </Link>
      </h1>


      <ul>

        <li>
          <Link to="/">1.About</Link>
          <Line
            transition={{ duration: 0.6 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2.My Work</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3.Contact</Link>
          <Line
            transition={{ duration: 0.5 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
        <div className="github">
          <a href="https://github.com/Canttellyou"><img src={navgit} alt="git" /></a>

        </div>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background-color: #282828;
  .github{
    margin-left: 1.5rem;
    width: 3rem;
    height: 3rem;
    img{
      width: 100%;
      height:100%;    }
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    align-items: center;
    @media (max-width: 600px) {
      margin-top: 1rem;
    }
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 4rem;
    position: relative;
    @media (max-width: 600px) {
      font-size: 1rem;
      padding-left: 1rem;
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 1rem 0rem;
  }
`;
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 50%;
  @media (max-width: 600px) {
    display: none;
  }
`;
export default Nav;
