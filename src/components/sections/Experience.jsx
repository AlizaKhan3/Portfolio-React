import React from 'react'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import styled from 'styled-components'
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import 'react-vertical-timeline-component/style.min.css';
import StarCanvas from '../canvas/Stars'

const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
position:relative;
margin-top:5px;
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







const Experience = () => {
  return (
    <Container id="Experience">
        <StarCanvas />
        <Wrapper>
            <Title>
                Experience
            </Title>
            <Desc style={{marginBottom: "40px",}}>My work Experience</Desc>
            <VerticalTimeline>
                {experiences.map((experience,index) => (
                    <ExperienceCard key={`experiences-${index}`} experience ={experience}/>))}
            </VerticalTimeline>
        </Wrapper>
    </Container>    
)
}

export default Experience