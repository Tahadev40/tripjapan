// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

function Hero() {
  return (
    <HeroContainer>
      <Box>
        <h1>Plan, Personalize and Book Your Japan Itinerary Online</h1>
        <h3>Japan Travel Packages, Luxury Stays, JR Passes, Activities & Day Tours — All in a Single Checkout</h3>
        <marquee behavior="scroll" direction="left" scrollamount="7">
        <ScrollableMenu>
        <i className="ri-search-line"></i>
      <ScrollItem>2-Week Trips</ScrollItem>
      <ScrollItem>10-Day Trips</ScrollItem>
      <ScrollItem>Kyoto Tours</ScrollItem>
      <ScrollItem>Tokyo Tours</ScrollItem>
      <ScrollItem>Osaka Tours</ScrollItem>
      </ScrollableMenu>
        </marquee>

      </Box>
    </HeroContainer>
  );
}

// Styled Components
const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh; /* Makes it full-screen */
  // background-color: #f5f5f5; /* Light background for better visibility */
        @media (max-width: 768px){
         height: 50vh;
        
        }
   
  `;

const Box = styled.div`
  text-align: center;

  h1 {
    letter-spacing: -1px;
    font-size: 3.7rem;
    color: black;
    font-weight: 700;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.1;

     @media (max-width: 768px){
      font-size: 2.1rem;
      width: 83vw;
      font-weight: 600;
     }
  }
    h3 {
    margin-top: 13px;
    font-weight: 400;
    width: 95vw;
    letter-spacing: -1.1px;
    }
`;

const ScrollableMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0px 0;
  white-space: nowrap;
  margin-top: 20px;
`;

const ScrollItem = styled.div`
  padding: 10px 20px;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  background-color: #f7f7f7;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
 
export default Hero;



