import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import styled from 'styled-components';



const Top = styled.div`
width: 100%;
display: flex;
gap: 12px;
max-width: 100%;

`;
const Image = styled.img`
height: 50px;
border-radius: 10px;
@media (max-width: 768px) {
height: 40px;}
`;
const Body = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
const School = styled.div`
font-size: 18px;
font-weight: 600px;
color: ${({theme}) => theme.text_primary+99};
@media only screen and (max-width: 768px) {
font-size: 14px;
}
`;
const Degree = styled.div`
font-size: 14px;
font-weight: 500px;
color: ${({theme}) => theme.text_secondary+99};
@media only screen and (max-width: 768px) {
font-size: 12px;
}
`;
const Date = styled.div`
font-size: 12px;
font-weight: 400px;
color: ${({theme}) => theme.text_secondary+80};
@media only screen and (max-width: 768px) {
font-size: 10px;
}
`;
const Description = styled.div`
font-size: 12px;
`;

const Span = styled.span`
display: -webkit-box;
max-width: 100%;
`;


const Grade = styled.div`
font-size: 14px;
font-weight: 500px;
color: ${({theme}) => theme.text_secondary+99};
@media only screen and (max-width: 768px) {
font-size: 12px;
}
`;


const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={education?.img}
        />
      }
      contentStyle={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        background: "#1d1836",
        boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
        border: "1px solid rgba(255,255,255,0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(225,225,225,0.3)' }}
    >
      <Top>
        <Image src={education?.img} />
        <Body>
          <School>{education?.school}</School>
          <Degree>{education?.degree}</Degree>
          <Date>{education?.date}</Date>
        </Body>
          </Top>
            <Grade>
                <b>Grade:</b>
                {education?.grade}</Grade>
        <Description>
          {education?.desc && <Span>{education?.desc}</Span> }
        </Description>
    </VerticalTimelineElement>
  );
}

export default EducationCard;
