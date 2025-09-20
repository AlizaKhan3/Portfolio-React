import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Themes';
import Navbar from './components/sections/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const Body =styled.div`
  background-color:${({ theme }) => theme.bg};
  color:${({ theme }) => theme.text_primary};
  width:100%;
  height:90vh;
  overflow-x:hidden;
  position:relative;
`;
const Wrapper = styled.div`
padding-bottom:100px;
background:Linear-gradient(
      38.73deg, 
      rgba(200,0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
      linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0) 100%);
      width:100%;
      clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

function App() {
  
  return (
   <ThemeProvider theme={darkTheme}> 
     <BrowserRouter>
       <Navbar/>
       <Body>   
             <Hero />
             <Wrapper>
               <Skills />
               <Experience />
             </Wrapper>
             <Projects/>
             <Wrapper>
             <Education />
             {/* <Contact /> */}
             </Wrapper>
             <Footer/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
