import React from "react";
import { experienceData } from "./experienceData";
import Experience from "./Experience";
import styled from "styled-components";
import mixins from "../../styles/mixins";

const StyledContainer = styled.div`
  ${mixins.container}
  height: 100%;
  flex-direction: column;
`;

const H1 = styled.h1`
  ${mixins.h1}

  @media  (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const StyledP = styled.p`
  margin-top: 10px;
  text-align: center;
  padding: 15px;
  font-size: 1.5rem;
  color: var(--primaryDarkColor);

  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

const StyledProjectContainer = styled.div`
  ${mixins.transparentContainer}
`;

const StyledProjectSubContainer = styled.div`
  ${mixins.container}
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin-top: 5rem;
  overflow: scroll;
`;

export default function Experiences() {
  return (
    <StyledContainer>
      <StyledProjectContainer>
        <H1>My Experience</H1>
        <StyledP>These are some proyects that i worked on</StyledP>
        <StyledProjectSubContainer>
          {experienceData.map((p, index) => {
            return (
              <Experience
                key={index}
                name={p.name}
                description={p.description}
                link={p.link}
                usedTechnologies={p.usedTechnologies}
              />
            );
          })}
        </StyledProjectSubContainer>
      </StyledProjectContainer>
    </StyledContainer>
  );
}
