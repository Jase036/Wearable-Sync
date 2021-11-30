import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <AboutImage src={"../images/about-image.jpg"} />
      <AboutContainer>
        <AboutUs>About Us</AboutUs>
        <Header>Our story</Header>
        <Paragraph>
          Wearable Sync was founded in 2021 by a team of web developers from
          across Canada who attended the Concordia University Bootcamp.
        </Paragraph>
        <Header>Our mission</Header>
        <Paragraph>
          We strive to offer our customers the lowest possible prices, the best
          available selection, and the utmost convenience.
        </Paragraph>
        <Header>Our vision</Header>
        <Paragraph>
          To be the most customer-centric company, where customers can find and
          discover the latest wearable technology.
        </Paragraph>
        <Header>Meet the team</Header>
        <TeamImageContainer>
          <div>
            <img src={"../images/jace.png"} />
            <Names>Jace</Names>
          </div>
          <div>
          <img src={"../images/Hasti.png"} />
          <Names>Hasti</Names>
          </div>
          <div>
          <img src={"../images/Irina.png"} />
          <Names>Irina</Names>
          </div>
          <div>
          <img src={"../images/Madhu.png"} />
          <Names>Maddy</Names>
          </div>
          <div>
          <img src={"../images/Leslie.png"} />
          <Names>Leslie</Names>
          </div>
        </TeamImageContainer>
      </AboutContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  font-family: var(--font-family);
  position: relative;
  background-color: var(--sage);
`;

const AboutContainer = styled.div`
  z-index: 2;
  background-color: var(--dusty-rose);
  border-radius: 5px;
  position: absolute;
  left: 700px;
  /* height: 450px; */
  width: 650px;
  top: 25px;
`;

const AboutUs = styled.h1`
  display: flex;
  text-decoration: underline;
  font-size: 35px;
  font-weight: 800;
  padding: 20px 0 30px 10px;
`;

const AboutImage = styled.img`
  z-index: 1;
  margin-left: 20px;
  border-radius: 5px;
`;

const Header = styled.h2`
  text-align: center;
  padding-bottom: 20px;
`;

const Paragraph = styled.p`
  text-align: center;
  line-height: 1.5;
  padding: 0px 10px 20px 10px;
`;

const TeamImageContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-evenly;
`;

const Names = styled.p`
text-align: center;
font-weight: 700;
padding-bottom: 20px;
`
export default About;
