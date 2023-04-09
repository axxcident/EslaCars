import React from "react";
import styled from "styled-components";

interface SectionProps {
  title?: string;
  description?: string;
  bgImg?: string;
  Lbtn?: string;
  Rbtn?: string;
}

const Section = ({ title, description, bgImg, Lbtn, Rbtn }: SectionProps) => {
  return (
    <div>
      <Wrap bgImg={bgImg}>
        {description ? (
          <ItemText>
            <h1>{title || "Model 3"}</h1>
            <p>{description}</p>
          </ItemText>
        ) : (
          <ItemText>
            <h1>{title}</h1>
          </ItemText>
        )}
        {/* <ItemText>
          <h1>{title || "Model 3"}</h1>
          <p>{description}</p>
        </ItemText> */}
        {Rbtn ? (
          <ButtonGroup>
            <LeftButton>{Lbtn}</LeftButton>
            <RigthButton>{Rbtn}</RigthButton>
          </ButtonGroup>
        ) : (
          <ButtonGroup style={{ marginTop: "100px" }}>
            <LeftButton>{Lbtn}</LeftButton>
          </ButtonGroup>
        )}
        <DownArrow src="/images/down-arrow.svg" />
      </Wrap>
    </div>
  );
};

export default Section;

const Wrap = styled.div<SectionProps>`
  background-image: ${(SectionProps) => `url("images/${SectionProps.bgImg}")`};
  /* background: url("/images/Homepage-Model-3-Desktop-LHD.jpeg"); */
  background-position: center;
  background-size: cover;
  display: flex;
  height: 110vh;
  flex-direction: column;
  justify-content: center;
`;

const ItemText = styled.div`
  padding-top: 25vh;
  margin-bottom: 50vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;
const LeftButton = styled.div`
  background-color: rgba(22, 26, 32, 0.8);
  align-items: center;
  color: white;
  text-align: center;
  padding: 10px 6vw;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 800;
`;

// const RigthBTN = styled(LeftButton)`
//   color: aqua;
// `;

const RigthButton = styled(LeftButton)`
  background-color: rgba(244, 244, 244, 1);
  color: rgba(22, 26, 32, 0.8);
  margin-left: 1.5vw;
`;

const DownArrow = styled.img`
  width: 100px;
  margin-bottom: 2vh;
  height: 40px;
  margin-top: 20px;
  display: flex;
  margin: auto;
  animation: animateDown infinite 3s;
`;
