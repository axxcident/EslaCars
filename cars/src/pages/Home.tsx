import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Section
        title={"Model Y"}
        description={"View Inventory"}
        bgImg={"Homepage-Model-Y-Global-Desktop.jpeg"}
        Lbtn={"Order Now"}
        Rbtn={"Demo Drive"}
      />
      <Section
        title={"Model X"}
        description={"leasing starting at £349/mo"}
        bgImg={"Homepage-Model-X-Desktop-LHD.jpeg"}
        Lbtn={"View Inventory"}
        Rbtn={"Demo Drive"}
      />
      <Section
        title={"Model 3"}
        description={"View Inventory"}
        bgImg={"Homepage-Model-3-Desktop-LHD.jpeg"}
        Lbtn={"Order Now"}
        Rbtn={"Demo Drive"}
      />
      <Section
        title={"Model S"}
        description={"View Inventory"}
        bgImg={"Model-S-homepage-desktop.jpeg"}
        Lbtn={"Order Now"}
        Rbtn={"Demo Drive"}
      />
      <Section
        title={"Solar Panels"}
        description={"Lowest Cost Solar Panels in America"}
        bgImg={"_25-HP-SolarPanels-D.jpeg"}
        Lbtn={"Order Now"}
        Rbtn={"Learn More"}
      />
      <Section
        title={"Solar Roof"}
        description={"Produce Clean Energy From Your Roof"}
        bgImg={"Homepage-SolarRoof-Desktop-Global.webp"}
        Lbtn={"Order Now"}
        Rbtn={"Learn More"}
      />
      <Section
        title={"Accessories"}
        bgImg={"dd739764-bcaa-4263-9488-8c73bc9fb046.jpeg"}
        Lbtn={"Shop Now"}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin-top: -10vh;
`;
