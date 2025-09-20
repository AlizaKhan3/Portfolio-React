import React from 'react'
import styled from 'styled-components'
import {skills} from '../../data/constants';
import { Tilt } from 'react-tilt';
import StarCanvas from '../canvas/Stars'


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
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
flex-direction:column;}@media screen and (max-width:640px){
padding:32px;}
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


const SkillsContainer = styled.div`

display:flex;
width:100%;
flex-wrap:wrap;
margin-top:20px;
gap:50px;
justify-content:center;
`;

const Skill = styled.div`
 width:100%;
    max-width:500px;
    background-color:rgba(17,25,40,0.83);
    border: 1px solid rgba(255,255,255,0.125);
    box-shadow: rgba(23,92,230,0.15)  0 4px 24px;
    border-radius: 16px;
    @media screen and (max-width:768px){
        max-width:400px;
        padding:10px 36px;
    } 
    @media screen and (max-width:500px){
        max-width:330px;
        padding:10px 36px;
    }
 `;
 const SkillTitle = styled.div`
 font-size:28px;
    font-weight:600;
    margin-bottom:20px ;
    text-align:center;
    color:${({ theme }) => theme.text_secondary};

 
    `;
 const SkillList = styled.div`
 display:flex;
 justify-content:center;
 flex-wrap:wrap;
    gap:12px;
    margin-bottom:20px;
 `;
const SkillItem = styled.div`
font-size:16px;
font-weight:400;
color:${({ theme }) => theme.text_primary+80};
border: 1px solid ${({theme}) => theme.text_primary+80};
border-radius: 12px;
padding: 12px 16px;
display:flex;
align-items:center;
justify-content:center;
gap:8px;
@media screen and (max-width:768px){
font-size:14px;
padding: 8px 12px;
}
@media screen and (max-width:500px){
font-size:14px;
padding: 6px 12px;
}
`;
const SkillImage = styled.img`
width:24px;
height:24px;
`;



const Skills = () => {
  return (
    <Container id="Skills">
        <StarCanvas />
        <Wrapper style={{marginBottom:"40px",}}>
            <Title>Skills</Title>
            <Desc style={{marginBottom:"40px",}}>
I am an Aspiring Frontend & MERN Stack Developer with experience in building web applications using React.js, Next.js, Node.js, Express, and MongoDB. I also have knowledge of Python and Java (OOP), with hands-on experience in Git, GitHub, and GitLab for version control. Additionally, I am proficient in using Microsoft Office, Google Workspace, and Notion for productivity and collaboration.            </Desc>
            <SkillsContainer>
                {skills.map((skill, index) => (
                    <Tilt>
                    {/* <Skill key={`skill-${index}`}> */}
                    <Skill>
                        <SkillTitle>{skill.title}</SkillTitle>
                        <SkillList>{skill.skills.map((item,index_x)=>(
                        //    <SkillItem key={`skill-x-${index_x}`}>
                        <SkillItem>

                             <SkillImage src={item.image}/>
                               {item.name}
                           </SkillItem>
                        )) }</SkillList>
                    </Skill>
                    </Tilt>
                    ))}
            </SkillsContainer>
        </Wrapper>

    </Container>
)
}

export default Skills