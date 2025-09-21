import { FacebookRounded, Instagram,LinkedIn, GitHub } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';

const FooterContainer = styled.div`
width:100%;
padding:2rem 0;
display:flex;
justify-content:center;position:relative;
z-index:10;
`;
const FooterWrapper = styled.div`
width:100%;
max-width:1200px;
display:flex;
flex-direction:column;
align-items:center;
padding:1rem;
gap:14px;
color:${({ theme }) => theme.text_primary}

`;
const Logo = styled.div`
font-size:20px;
font-weight:600;
color:${({ theme }) => theme.primary};
`;
const Nav = styled.ul`
width:100%;
max-width:800px;
display:flex;
margin-top:0.5rem;
gap:2rem;
justify-content:center;
@media (max-width:768px){
flex-wrap:wrap;
justify-content:center;
gap:1rem;
text-align:center;
font-size:12px;

}
  `;
const NavLink = styled.a`
color:${({ theme }) => theme.text_primary};font-weight:500;cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
color: ${({ theme }) => theme.primary};
}`;
const SocialMediaIcons = styled.div`
display:flex;
margin-top:1rem;
`;

const SocialMediaIcon = styled.a`
color:${({ theme }) => theme.text_primary};
margin:0 0.5rem;
transition: color 0.2s ease-in-out;
font-size:1.5rem;
margin:1rem;
&:hover{
  color:${({ theme }) => theme.primary};
}

`;

const CopyRight = styled.p`
font-size:0.9rem;
text-align:center;
color:${({ theme }) => theme.soft2};
`;



const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Aliza Khan</Logo>
        <Nav>
        <NavLink href="#About">About</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Experience">Experience</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          {/* <SocialMediaIcon href={Bio.facebook} target="display">
          <FacebookRounded/>
          </SocialMediaIcon>

          <SocialMediaIcon href={Bio.insta} target="display">
          <Instagram/>
          </SocialMediaIcon> */}
           <SocialMediaIcon href={Bio.github} target="display">
          <GitHub/>
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
          <LinkedIn/>
          </SocialMediaIcon>
        </SocialMediaIcons>
      <CopyRight>&copy; 2024 Aliza Khan. All rights reserved.</CopyRight>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer