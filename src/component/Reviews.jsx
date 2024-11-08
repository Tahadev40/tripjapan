import React from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

const Container = styled.div`
  max-width: 1150px;
  margin: auto;
  padding: 3% 3%;
  display: flex;
  gap: 20px;
  border-radius: 22px;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 5%;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;

  h2 {
    font-size: 28px;
    color: #1a1a1a;
    margin: 0;
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 0;
  }
`;

const BadgeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffebcc;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  color: #ff9900;
  margin-bottom: 8px;
`;

const ReviewsSection = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;

  .star {
    color: #ff9900;
    font-size: 18px;
  }
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #555;
  margin: 0;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
`;

const ReviewerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ReviewerName = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .name {
    font-weight: bold;
    color: #1a1a1a;
  }

  .date {
    color: #999;
  }
`;

const Testimonials = () => {
  return (
    <Container>
      <LeftSection>
        <BadgeIcon>
          <i className="ri-medal-fill"></i>
        </BadgeIcon>
        <h2>What our customers say</h2>
        <p>Real feedback from satisfied customers.</p>
      </LeftSection>

      <ReviewsSection>
        <ReviewCard>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill star"></i>
            ))}
          </Stars>
          <ReviewText>
            Bolli and his team helped me plan a trip for my family to Japan on very short notice. We engaged only a few weeks before traveling and it was very efficient.
          </ReviewText>
          <ReviewerInfo>
            <ReviewerImage src="https://via.placeholder.com/40" alt="Ameer Sherif" />
            <ReviewerName>
              <span className="name">Ameer Sherif</span>
              <span className="date">Jul 16, 2024</span>
            </ReviewerName>
          </ReviewerInfo>
        </ReviewCard>

        <ReviewCard>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill star"></i>
            ))}
          </Stars>
          <ReviewText>
            Had a great interaction with their customer service booking a group of 10 for an activity. 10/10 would recommend!
          </ReviewText>
          <ReviewerInfo>
            <ReviewerImage src="https://via.placeholder.com/40" alt="Tinna Pétursdóttir" />
            <ReviewerName>
              <span className="name">Tinna Pétursdóttir</span>
              <span className="date">Jun 13, 2024</span>
            </ReviewerName>
          </ReviewerInfo>
        </ReviewCard>

        <ReviewCard>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill star"></i>
            ))}
          </Stars>
          <ReviewText>
            A heartfelt thank you to the team at Trip to Japan; Bolli, Hildur, Thelma, and Guðrún Helga. Your attention to detail truly made our Japan tour extraordinary.
          </ReviewText>
          <ReviewerInfo>
            <ReviewerImage src="https://via.placeholder.com/40" alt="Jórunn Rothenborg" />
            <ReviewerName>
              <span className="name">Jórunn Rothenborg</span>
              <span className="date">Aug 6, 2024</span>
            </ReviewerName>
          </ReviewerInfo>
        </ReviewCard>

        <ReviewCard>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill star"></i>
            ))}
          </Stars>
          <ReviewText>
            We had a memorable stay in Japan, made possible by Bolli and his team of consultants who planned a VERY detailed itinerary for us. We highly recommend the service of this company. FIVE STAR PLUS!
          </ReviewText>
          <ReviewerInfo>
            <ReviewerImage src="https://via.placeholder.com/40" alt="Reviewer Name" />
            <ReviewerName>
              <span className="name">Reviewer Name</span>
              <span className="date">Aug 10, 2024</span>
            </ReviewerName>
          </ReviewerInfo>
        </ReviewCard>
      </ReviewsSection>
    </Container>
  );
};

export default Testimonials;
