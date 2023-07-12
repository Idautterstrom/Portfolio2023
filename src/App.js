import React from "react";
import styled from "styled-components";

const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeroImage = styled.div`
  display: flex;
  background-color: #ffa857;
  height: 400px;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #ff6b57;
  padding-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const App = () => {
  return (
    <HomeContainer>
      <HeroImage>
        <div>Image of me</div>
      </HeroImage>
      <HeroTitle>
        <div>logo</div>
        <div>Ida Utterström</div>
        <div>Project manager</div>
        <div>Button</div>
      </HeroTitle>
      <div>
        <div>Resume</div>
        <div>Highlighted projects</div>
        <div>hobbies</div>
      </div>
      <div>
        <div>about me</div>
      </div>
      <div>
        <div>testimonials</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </HomeContainer>
  );
};
