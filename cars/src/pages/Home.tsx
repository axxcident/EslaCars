import React from "react";
import Section from "../components/Section";

const Home = () => {
  return (
    <>
      <Section
        title={"Model 3"}
        description={"leasing starting at £349/mo"}
        bgImg={"Homepage-Model-3-Desktop-LHD.jpeg"}
        Lbtn={"View Inventory"}
        Rbtn={"Custom Order"}
      />
      <Section
        title={"Model X"}
        description={"leasing starting at £349/mo"}
        bgImg={"Homepage-Model-X-Desktop-LHD.jpeg"}
        Lbtn={"View Inventory"}
        Rbtn={"Custom Order"}
      />
      <Section
        title={"Model Y"}
        description={"leasing starting at £349/mo"}
        bgImg={"Homepage-Model-Y-Global-Desktop.jpeg"}
        Lbtn={"View Inventory"}
        Rbtn={"Custom Order"}
      />
      <Section
        title={"Model S"}
        description={"leasing starting at £349/mo"}
        bgImg={"Model-S-homepage-desktop.jpeg"}
        Lbtn={"View Inventory"}
        Rbtn={"Custom Order"}
      />
    </>
  );
};

export default Home;
