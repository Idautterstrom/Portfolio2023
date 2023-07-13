import React from "react";
import styled from "styled-components";
import Logo from "../src/img/LOGO white.png";
import Me from "../src/img/headerMe.png";
import Clay from "../src/img/Clay.jpg";
import Project from "../src/img/Project.jpg";

const HomeContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeroImage = styled.div`
  display: flex;
  background-color: #ffa857;
  height: 450px;
  justify-content: center;
  align-items: center;
`;

const MeContainer = styled.img`
  display: flex;
  height: 400px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ff6b57;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const LogoContainer = styled.img`
  display: flex;
  height: 20px;
`;

const HeroName = styled.h1`
  font-family: "syne", sans serif;
  font-size: 25px;
  color: white;
`;

const HeroSurname = styled.h1`
  font-family: "syne", sans serif;
  font-size: 25px;
  color: white;
  margin-top: -30px;
`;

const HeroTitle = styled.h2`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  padding-left: 100px;
  padding-right: 100px;
  margin-top: -20px;
  color: white;
`;

const HeroButton = styled.button`
  background-color: #ff99ff;
  font-family: "syne", sans serif;
  border: none;
  padding: 10px 25px;
  border-radius: 20px;
`;

const HighlightedContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  padding: 40px;
  align-items: center;
  justify-content: center;
`;

const HighlightedImage = styled.img`
  display: flex;
  width: 300px;
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

const HighlightedButton = styled.button`
  font-family: "syne", sans serif;
  border: 1px solid white;
  color: white;
  border-radius: 40px;
  height: 40px;
  width: 50px;
  background-color: transparent;
`;

const ResumeContainer = styled.div`
  width: 300px;
  background-color: #ff6b57;
`;

const ProjectContainer = styled.div`
  width: 300px;
  background-color: #fdb3fd;
`;

const HobbiesContainer = styled.div`
  width: 300px;
  background-color: #ffa857;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const BusinessContainer = styled.div`
  background-color: #ff6b57;
  padding: 40px;
`;

const AgilityContainer = styled.div`
  background-color: #ffa857;
  padding: 40px;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 40px;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #fdb3fd;
  padding: 40px;
`;

export const App = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroImage>
          <MeContainer src={Me} alt="image of me" />
        </HeroImage>
        <TitleContainer>
          <LogoContainer src={Logo} alt="logo" />
          <HeroName>Ida</HeroName>
          <HeroSurname>Utterström</HeroSurname>
          <HeroTitle>
            Project manager, Business strategy, Marketing, People experience,
            Web development
          </HeroTitle>
          <HeroButton>Contact me</HeroButton>
        </TitleContainer>
      </HeroContainer>
      <HighlightedContainer>
        <ResumeContainer>
          <HighlightedImage src={Project} alt="Project" />
          <SmallContainer>
            <h2>Resume</h2>
            <HighlightedButton>&rarr;</HighlightedButton>
          </SmallContainer>
        </ResumeContainer>
        <ProjectContainer>
          <HighlightedImage src={Project} alt="Project" />
          <SmallContainer>
            <h2>Projects</h2>
            <HighlightedButton>&rarr;</HighlightedButton>
          </SmallContainer>
        </ProjectContainer>
        <HobbiesContainer>
          <HighlightedImage src={Clay} alt="clay" />
          <SmallContainer>
            <h2>Hobbies</h2>
            <HighlightedButton>&rarr;</HighlightedButton>
          </SmallContainer>
        </HobbiesContainer>
      </HighlightedContainer>
      <AboutContainer>
        <BusinessContainer>
          <image>x</image>
          <div>
            <h2>Business mindset</h2>
            <p>
              Throughout my career, I have consistently demonstrated strong
              strategic thinking, creative visualization, and the ability to
              execute tasks effectively. These attributes have enabled me to
              excel in diverse environments and embrace new challenges.
            </p>
          </div>
        </BusinessContainer>
        <AgilityContainer>
          <image>x</image>
          <h2>Agility</h2>
          <p>
            I bring a dynamic approach, fostering adaptability, collaboration,
            and continuous improvement, driving projects in an ever-changing
            environment.
          </p>
          <div>
            <image>x</image>
            <h2>Creativity</h2>
            <p>
              My creative mindset allows me to approach problems from different
              perspectives, uncovering opportunities for growth and improvement.
            </p>
          </div>
        </AgilityContainer>
      </AboutContainer>
      <TestimonialsContainer>
        <div>
          <image>x</image>
          <p>
            "Never have I worked with such a multi-talent. Working with you have
            been amazing and I enjoyed every second of it. You're truly
            something else. Without you, Recommended by wouldn't be what it is
            today."
          </p>
        </div>
        <div>
          <image>x</image>
          <p>
            "There is nothing you can’t do Ida! Your ability to create an actual
            product of a crazy idea thrown out in-between meetings is remarkable
            and anyone who get the chance to work with you will see that hiring
            you was the best decision of their life!"
          </p>
        </div>
        <div>
          <image>x</image>
          <p>
            "You are a combination of great strategic thinker, a pedagogic
            visualizer and a fast doer. Love to work with you Ida!"
          </p>
        </div>
        <div>
          <image>x</image>
          <p>
            "Having Ida as a team lead, I felt really trusted to take my own
            initiatives, and my ideas were encouraged. At the same time, I felt
            safe relying on the fact that Ida had the overall view of what we
            needed to accomplish as a team, and she led us towards the goals we
            set up."
          </p>
        </div>
      </TestimonialsContainer>
      <ContactContainer>
        <div>
          <LogoContainer src={Logo} alt="logo" />
          <h1>Contact me</h1>
          <button>contact</button>
        </div>
        <div>
          <image>image</image>
        </div>
      </ContactContainer>
    </HomeContainer>
  );
};
