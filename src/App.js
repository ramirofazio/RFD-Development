import React from "react";
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Project from "./Components/Projects/Projects";
import Contact from './Components/Contact/Contact.jsx';
import Side from "./Components/Side/Side.js";
import styled from "styled-components";
import mixins from "./styles/mixins.js";

const StyledContainer = styled.div`
${mixins.container}
`

function App() {

  return (
    <main id="home">
      <NavBar />
      <Side />
      <StyledContainer className='home'>
        <Home />
      </StyledContainer>
      <StyledContainer className='about' id='about'>
        <About />
      </StyledContainer>
      <StyledContainer className='projects' id='projects'>
        <Project />
      </StyledContainer>
      <StyledContainer className='contact' id='contact'>
        <Contact />
      </StyledContainer>
    </main>
  );
}

export default App;
