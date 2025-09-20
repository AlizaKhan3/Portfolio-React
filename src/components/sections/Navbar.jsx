import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled,{ useTheme } from 'styled-components';
import {Bio} from '../../data/constants';
import {  MenuRounded } from '@mui/icons-material';
import { useState } from 'react';
const Nav = styled.div`
background-color:${({ theme }) => theme.bg};
height:80px;display:flex;align-item:center;justify-content:center;font-size:1rem;position:sticky;top:0;z-index:10;color:white;padding:24px;

`;

const NavbarContainer = styled.div`
width:100%;
max-width:1200px;
padding:0 24px;
display:flex;
align-item:center;
justify-content:space-between;
font-size:1rem;`;
const NavLogo = styled(LinkR)`
padding:0 6px;text-decoration:none;color:inherit;width:80%;font-size:18px;font-weight:500;`;
const NavItems = styled.ul`
width:100%;
display:flex;
align-item:center;
justify-content:center;
list-style:none;
gap:32px;
padding:0 6px;
@media screen and (max-width:768px){
display:none;}
`;
const NavLink = styled.a`
color:${({ theme }) => theme.text_primary};font-weight:500;cursor:pointer;
transition: all 0.2s ease-in-out;
text-decoration:none;
&:hover{
color: ${({ theme }) => theme.primary};
}
`;
const ButtonContainer = styled.div`
width:80%;height:100%;display:flex;align-item:center;justify-content:end;padding:0 6px;border-radius:4px;
@media screen and (max-width:768px){
display:none;
}

`;
const GithubButton = styled.a`
display:flex;align-item:center;justify-content:center;
font-size:16px;cursor:pointer;border:1px solid ${({theme}) => theme.primary};
padding:4px 30px;

border-radius:100px;font-weight:500;color:${({theme}) => theme.primary};
transition: all 0.6s ease-in-out;text-decoration:none;&:hover{background-color:${({theme}) => theme.primary};
color:${({theme}) => theme.text_primary};}


`;


const MobileIcon = styled.div`
color:${({ theme }) => theme.text_primary};
height:100%;
display:flex;
align-item:center;
display:none;

@media screen and (max-width:768px){
display:block;
}`;

const MobileMenu = styled.ul`
 width:100%;
 display:flex;
 flex-direction:column;
 align-item:start;
 justify-content:center;
 list-style:none;
 gap:16px;
 padding:12px 0px 24px 60px;
 background:${({ theme }) => theme.card_light + 99};position:absolute;top:80px;right:0;
 transition: all 0.6s ease-in-out;
 transform: ${({isOpen}) => isOpen ? "transitionY(0)":"translateY(-100%)"};
 border-radius: 0 0 20px 20px;
 border-shadow:0 0 10px 0 rgba(0,0,0,0.2);  
 opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
 z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme(); 
    return (
        <Nav>
        <NavbarContainer>
            <NavLogo to='/'>
                <a style={{
                    color: 'white',
                }}>Aliza Khan</a>
            </NavLogo>
            <MobileIcon onClick={()=> setIsOpen(!isOpen)}>
                <MenuRounded style={{color:'inherit'}}/>
            </MobileIcon>
            <NavItems>
                <NavLink href="#About">About</NavLink>
                <NavLink href="#Skills">Skills</NavLink>
                <NavLink href="#Experience">Experience</NavLink>
                <NavLink href="#Projects">Projects</NavLink>
                <NavLink href="#Education">Education</NavLink>
            </NavItems> 
            {
                isOpen && (
                <MobileMenu isOpen={isOpen}>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">About</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">Experience</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
                    <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">Education</NavLink>   
                    <GithubButton href={Bio.github} target='_Blank' style={{background:theme.primary,color:theme.text_primary,width:"30%",padding:"2px 0px"}}>Github</GithubButton>
                </MobileMenu>)
            }
            <ButtonContainer>
                <GithubButton href={Bio.github} target='_Blank'>Github</GithubButton>
            </ButtonContainer>
        </NavbarContainer>
        </Nav>

)
}

export default Navbar