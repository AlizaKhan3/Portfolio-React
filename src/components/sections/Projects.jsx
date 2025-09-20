import React, { useState } from 'react'
import styled from 'styled-components'
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
margin-top:50px;
padding:0 16px;
z-index:1;
align-items:center;
`;
const Wrapper = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;
width:100%;
max-width:1100px;
gap:12px;
@media screen and (max-width:960px){
flex-direction:column;}
`;
const Title = styled.div`
font-size:52px;
text-align:center;
font-weight:600;
margin-top:20px;
color:${({ theme }) => theme.text_primary}; 
@media screen and (max-width:768px){
margin-top:12px;
font-size:32px;
}
`;
const Desc = styled.div`
font-size:18px;
text-align:center;
font-weight:600;
color:${({ theme }) => theme.text_secondary};
@media screen and (max-width:768px){
font-size:16px;
`; 
const ToggleButtonGroup = styled.div`
display:flex;
border:1.5px solid ${({ theme }) => theme.primary};
color:${({ theme }) => theme.primary};
font-size:16px;
border-radius:12px;
font-weight:500;
margin:22px 0;
@media screen and (max-width:768px){
  font-size:12px;
}
`;
const ToggleButton = styled.div`
padding:8px 16px;
border-radius:6px;
cursor:pointer;
&:hover{
  background:${({ theme }) => theme.primary+20};
}
  @media screen and (max-width:768px){
  padding:6px 8px;
  border-radius:4px;}

  ${({active,theme}) => 
    active && ` background:${ theme.primary + 20 }
  ;`}`;

const Divider = styled.div`
width:1.5px;
background:${({ theme }) => theme.primary};
`;
const CardContainner = styled.div`
 display:flex;
  justify-content:center;
  align-items:center;
  gap:28px;
  flex-wrap:wrap;
`;



const Projects = () => {
  const [toggle, setToggle] = useState("all");

  const filteredProjects = toggle === "all" ? projects : projects.filter((project) => project.category.includes(toggle));

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>Here are some of the projects I have worked on</Desc>
        <ToggleButtonGroup>
          <ToggleButton active={toggle === "All"} onClick={() => setToggle("All")}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "Mobile App"} onClick={() => setToggle("Mobile App")}>
            Mobile App
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "Website"} onClick={() => setToggle("Website")}>
            Website
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainner>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </CardContainner>
      </Wrapper>
    </Container>
  );
};





























// const Projects = () => {
//   const [toggle, setToggle] = useState('all');

//   const filteredProjects = toggle === 'all' ? projects : projects.filter(project => project.category.includes(toggle));

//   return (
//     <Container id='Projects'>
//       <Wrapper>
//         <Title>Projects</Title>
//         <Desc>Here are some of the projects I have worked on</Desc>
//         <ToggleButtonGroup>
//           <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>
//             All
//           </ToggleButton>
//           <Divider />
//           <ToggleButton active={toggle === 'shopify'} onClick={() => setToggle('shopify')}>
//             Shopify
//           </ToggleButton>
//           <ToggleButton active={toggle === 'wordpress'} onClick={() => setToggle('wordpress')}>
//             Wordpress
//           </ToggleButton>
//         </ToggleButtonGroup>
//         <CardContainner>
//           {filteredProjects.map(project => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </CardContainner>
//       </Wrapper>
//     </Container>
//   );
// };


export default Projects