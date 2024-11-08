// Import necessary libraries
import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 27px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #1a1a1a;
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
//   gap: 0px;
  flex-wrap: wrap;
  // overflow-x: auto;  /* Scroll horizontally if content overflows */
  padding-bottom: 10px;

  /* Hide horizontal scrollbar (optional) */
  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const ImageWrapper = styled.div`
  text-align: center;
  min-width: 100px;
`;

const CityImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 8px;
`;

const CityName = styled.p`
  margin: 0;
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
`;

// Main Component
function City() {
  const cities = [
    'Tokyo',
    'Mt-Fuji',
    'Nagoya',
    'Kyoto',
    'Nara',
    'Osaka',
    'Kobe',
    'Hiroshima',
    'Fukuoka',
    'Yokohama',
  ];

  return (
    <Container>
      <Title>Explore tours by City</Title>
      <ImageRow>
        {cities.map((city, index) => (
          <ImageWrapper key={index}>
            <CityImage
              src={`./images/${city.toLowerCase()}.png`}
              alt={city}
            />
            <CityName>{city}</CityName>
          </ImageWrapper>
        ))}
      </ImageRow>
    </Container>
  );
}

export default City;
