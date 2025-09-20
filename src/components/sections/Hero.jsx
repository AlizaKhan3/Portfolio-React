import styled from 'styled-components'
import {Bio} from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HeroImg from '../../images/HeroImage1.jpeg';
import HeroBgAnimation from '../HeroBgAnimation';
import {Tilt} from 'react-tilt';
import {motion} from 'framer-motion';
import {headContainerAnimation,headTextAnimation} from '../../utils/motion';
import StarCanvas from '../canvas/Stars'

const HeroContainer = styled.div`
display:flex;
justify-content:center;
position:relative;
padding:40px 30px; 
z-index:1;
@media screen and (max-width:960px){
padding:66px 16px;}
@media screen and (max-width:640px){
padding:32px;}
clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%,0 100%);
`;
const HeroInnerContainer = styled.div`
position:relative;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
max-width:1100px;
@media screen and (max-width:960px){
flex-direction:column;}

`;
const HeroLeftContainer = styled.div`
width:100%;
gap:6px;
order:1;
@media screen and (max-width:960px){
order:2;
margin-bottom:30px;
display:flex;
flex-direction:column;
align-items:center;
}
`;
const HeroRightContainer = styled.div`
width:100%;height:100%;
order:2;
display:flex;
justify-content:center;

@media screen and (max-width:960px){
order:1;
display:flex;
flex-direction:column;
justify-content:end;
align-items:center;
margin-bottom:80px;
}
@media screen and (max-width:640px){
margin-bottom:30px;
`;
const Title = styled.div`
font-size:50px;
font-weight:700;
line-height:68px;
color:${({ theme }) => theme.text_primary};
@media screen and (max-width:960px){
text-align:center;
@media screen and (max-width:640px){
font-size:40px;
line-height:48px;
margin-bottom:8px;
}
`;
const TextLoop = styled.div`
font-size:32px;
font-weight:600;
display:flex;
gap:12px;
line-height:68px;
color:${({ theme }) => theme.text_primary};
@media screen and (max-width:960px){
text-align:center;
@media screen and (max-width:640px){
  display: flex;
  justify-content: center; 
  align-items: center;   
font-size:22px;
line-height:48px;
 
// margin-left:65px; 

}
`;
const Span = styled.div`

cursor:pointer;
color:${({ theme }) => theme.primary};text-align:center;  
@media screen and (max-width:640px){
text-align:center;
}

`;

const SubTitle = styled.div`
font-size:20px;
line-height:32px;
margin-bottom:42px;
color:${({ theme }) => theme.text_primary+95};
@media screen and (max-width:960px){
text-align:center;
@media screen and (max-width:960px){
font-size:16x;
line-height:32px;
}
`;

const ResumeButton=styled.a`
-webkit-appearance:button;
appearance:button;
text-decoration:none;
-moz-appearance:button;
width:95%;
max-width:300px;
margin: 0 auto;
text-align:center;
padding: 16px;color:#fff;
background:hsla(271, 100%, 50%, 1);
background:linear-gradient(
225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -moz-linear-gradient(
225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
background: -webkit-linear-gradient(
225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius:50px;
font-size:20px;
font-weight:600;
&:hover{
transform:scale(1.05);
transition:all 0.4s ease-in-out;
box-shadow: 20px 20px 60px #1f2634,
filter:brightness(1);}
@media screen and (max-width:640px){
padding:12px 0;
font-size:18px;
display: block;
 margin: 0 auto;
}`;

const Img = styled.img`
border-radius:50%;
width:100%;
height:100%;
max-width:400px;
max-height:400px;
border:2px solid ${({ theme }) => theme.primary+ 95};
@media screen and (max-width:640){
max-width:280px;
max-height:280px;
}
`;

const HeroBg = styled.div`
position:absolute;
display:flex;
top:50%;
right:0;
bottom:0;
left:44%;
width:100%;
height:100%;
max-width:1360px;justify-content:end;
-webkit-transform:translate(-50%,-50%);
transform:translate(-50%,-50%);
@media screen and (max-width:960px){
//  justify-content:center;
//  padding:0px 16px;
padding-left:50px;
padding-bottom:50px;
//  max-width:2000px;
`;








const Hero = () => {
  return (
    <div id='About'>
      <HeroContainer>
        <HeroBg>
          <StarCanvas/>
          {/* <HeroBgAnimation /> */}
        </HeroBg>
        <motion.div {...headContainerAnimation}>
        <HeroInnerContainer>
          <HeroLeftContainer>
          <motion.div {...headTextAnimation}>

            <Title>Hi, I am <br /> {Bio.name}</Title>
            <TextLoop>
               <Span>
                <Typewriter options={{strings:Bio.roles,autoStart:true,loop:true}}/>
              </Span>
            </TextLoop>
          </motion.div>
          <motion.div {...headContainerAnimation}>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">Resume</ResumeButton></motion.div>
          </HeroLeftContainer>
          <HeroRightContainer>
          <motion.div {...headContainerAnimation}>

            <Tilt>
              <Img src={HeroImg} alt="" />
            </Tilt>
          </motion.div>
          </HeroRightContainer>
       </HeroInnerContainer>
        </motion.div>

      </HeroContainer>

      </div>
  )
};

export default Hero;