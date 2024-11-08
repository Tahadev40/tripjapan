import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

const Container = styled.div`
  max-width: 1300px;
  margin: auto;
  padding: 5%;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #1a1a1a;
  margin-bottom: 20px;
`;

const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 18%; /* Adjust width to fit 4 cards per row */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px; /* Adjusted height for smaller card */
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 10px; /* Reduced padding for a more compact look */
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: #666;
`;

const LocationIcon = styled.i`
  color: #666;
`;

const TitleText = styled.h3`
  font-size: 16px; /* Slightly smaller font size */
  color: #1a1a1a;
  margin: 0;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StarIcon = styled.i`
  color: #4caf50;
  font-size: 16px;
`;

const PriceText = styled.div`
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const CardList = [
  {
    image: 'https://tse1.mm.bing.net/th?id=OIP.9Gf_beRNnfTUFjeH67KangAAAA&pid=Api&P=0&h=220',
    location: 'Osaka',
    title: '4-Hour Osaka Bike Tour to the Neighborhood of Osaka Castle',
    rating: 5,
    price: 'From $142 / person',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.2VEWsXz0R-cUE9Bx6H0xQwHaEo&pid=Api&P=0&h=220',
    location: 'Hiroshima',
    title: 'Hiroshima & Miyajima Day Trip From Osaka',
    rating: 5,
    price: 'From $718 / person',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.F_PGRnqoghEddmy7-IokYAHaEK&pid=Api&P=0&h=220',
    location: 'Kyoto',
    title: 'Kyoto Twilight Delights: A Gion District Culinary Journey',
    rating: 5,
    price: 'From $442 / person',
  },
  {
    image: 'https://www.datocms-assets.com/101439/1706088917-hiroshima-castle.jpg?auto=format&fit=crop&h=264&w=220',
    location: 'Kyoto',
    title: 'Kyoto’s Culinary Delights: A Night Foodie Tour',
    rating: 5,
    price: 'From $312 / person',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.9kWi2RwDiiVEOL51oXtiEgHaE7&pid=Api&P=0&h=220',
    location: 'Hiroshima',
    title: 'Hiroshima Insights: Personalized Private Tour with a Local',
    rating: 5,
    price: 'From $487 / person',
  },
  {
    image: 'https://tse4.mm.bing.net/th?id=OIP.-UWw2qXcmTnSJdLHKyyjqwHaE8&pid=Api&P=0&h=220',
    location: 'Kanazawa',
    title: 'Eat Like a Local in Kanazawa 2024',
    rating: 5,
    price: 'From $378 / person',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.6g7BmZq1tJbhrZzNWV84QAHaE8&pid=Api&P=0&h=220',
    location: 'Yokohama',
    title: 'Yokohama Private Food Tour With Local Guide',
    rating: 5,
    price: 'From $380 / person',
  },
  {
    image: 'https://tse3.mm.bing.net/th?id=OIP.A8e3DgCBN7Sf9PaNVKcgrAHaEK&pid=Api&P=0&h=220',
    location: 'Tokyo',
    title: 'The PICOLABO Exclusive Pearl Jewelry Experience',
    rating: 5,
    price: 'From $40 / person',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.yJmmM6ZXjmMHI5URZjEgbQHaFj&pid=Api&P=0&h=220',
    location: 'Osaka',
    title: 'Kyoto’s Culinary Delights: A Night Foodie Tour',
    rating: 5,
    price: 'From $200 / person',
  },
  {
    image: 'https://tse2.mm.bing.net/th?id=OIP.HaBk-AZG3BUjFG3_H-VptgHaEK&pid=Api&P=0&h=220',
    location: 'Hiroshima',
    title: 'Eat Like a Local in Kanazawa 2024',
    rating: 5,
    price: 'From $410 / person',
  },
];

const TourCards = () => {
  return (
    <Container>
      <Title>Popular tours</Title>
      <CardGrid>
        {CardList.map((card, index) => (
          <Card key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardContent>
              <Location>
                <LocationIcon className="ri-map-pin-line" />
                {card.location}
              </Location>
              <TitleText>{card.title}</TitleText>
              <Rating>
                {[...Array(card.rating)].map((_, i) => (
                  <StarIcon key={i} className="ri-star-fill" />
                ))}
              </Rating>
              <PriceText>{card.price}</PriceText>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default TourCards;
