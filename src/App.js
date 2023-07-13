import React from "react";
import styled from "styled-components";

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
  height: 400px;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #ff6b57;
  padding-top: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const HighlightedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
`;

const TestimonialsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 20px;
`;

export const App = () => {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroImage>
          <image>Image of me</image>
        </HeroImage>
        <HeroTitle>
          <image>logo</image>
          <h1>Ida Utterström</h1>
          <h2>
            Project manager, Business strategy, Marketing, People experience,
            Web development
          </h2>
          <button>Button</button>
        </HeroTitle>
      </HeroContainer>
      <HighlightedContainer>
        <div>
          <image>x</image>
          <h2>Resume</h2>
          <button>X</button>
        </div>
        <div>
          <image>x</image>
          <h2>Highlighted projects</h2>
          <button>X</button>
        </div>
        <div>
          <image>x</image>
          <h2>Hobbies</h2>
          <button>X</button>
        </div>
      </HighlightedContainer>
      <AboutContainer>
        <div>
          <image>x</image>
          <h2>Business mindset</h2>
          <p>
            Throughout my career, I have consistently demonstrated strong
            strategic thinking, creative visualization, and the ability to
            execute tasks effectively. These attributes have enabled me to excel
            in diverse environments and embrace new challenges.
          </p>
        </div>
        <div>
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
        </div>
      </AboutContainer>
      <h2>Things that have been said about me</h2>
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
      <div>
        <image>Logo</image>
        <h1>Contact me</h1>
        <button>contact</button>
      </div>
    </HomeContainer>
  );
};
