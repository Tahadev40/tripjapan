import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95vw;
  margin: auto;
  padding: 5% 5%;
  gap: 20px;
  // background-color: #f8f8f8;
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5%;
  }
`;

const VideoSection = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  border-radius: 8px;
  // overflow: hidden;

  video {
    width: 100%;
    height: 55vh;
    border-radius: 25px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 200px;
      width: 100%;
      margin-top: 20px;
    }
  }
`;

 const RedDott = styled.div`
 content: '';
 position: absolute;
//  bottom: 0px;
 left: 93%;
 top: 88%;
//  right: 0px;
 width: 55px;
 height: 55px;
 background-color: red;
 border-radius: 50%;

 @media (max-width: 768px) {
   display: block;
   bottom: 10px;
   right: 10px;
   width: 25px;
   height: 25px;
 }

 `;

const DetailsSection = styled.div`
  flex: 1;
  width: 33%;
  padding: 10px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const FeaturedLabel = styled.p`
  color: red;
  font-weight: bold;
  font-size: 16px;
  margin: 0 0 9px;
  font-size: 13px;
`;

const Title = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin: 8px 0;
  color: #1a1a1a;
`;

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 8px 0;

  .star {
    color: green;
    font-size: 25px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-top: 9px;
`;

const VideoWithDetails = () => {
  return (
    <Container>
      <VideoSection>
        <video loop src="images/high.mp4" controls></video>
        <RedDott>
        </RedDott>
      </VideoSection>
      <DetailsSection>
        <FeaturedLabel>Featured</FeaturedLabel>
        <Title>Explore teamLab Planets Tokyo DMM – Grab Your Entry Ticket</Title>
        <Stars>
          <i className="ri-star-fill star"></i>
          <i className="ri-star-fill star"></i>
          <i className="ri-star-fill star"></i>
          <i className="ri-star-fill star"></i>
          <i className="ri-star-fill star"></i>
        </Stars>
        <Description>Among the editorial team’s favourite is teamLab Planets Tokyo.</Description>
      </DetailsSection>
    </Container>
  );
};

export default VideoWithDetails;
