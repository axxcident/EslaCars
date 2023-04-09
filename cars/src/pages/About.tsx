import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <Link id="Nav.Link" to={"/"}>
        Gå tillbaka
      </Link>
    </>
  );
};

export default About;
