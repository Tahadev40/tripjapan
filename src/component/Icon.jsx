// Import necessary libraries
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon styles

// Styled components for layout and design
const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 35px;
  max-width: 1200px;
  margin: auto;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.div`
  font-size: 30px;
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  font-weight: bold;
  color: #333;
`;

const FeatureSubtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

// Main Component
function Features() {
  const features = [
    {
      icon: 'ri-search-line',
      color: '#8B00FF', // Purple color
      title: '700+',
      subtitle: 'Experiences available to book',
    },
    {
      icon: 'ri-calendar-event-line',
      color: '#FF007F', // Pink color
      title: 'Easy cancellation',
      subtitle: 'Free booking and easy cancellation',
    },
    {
      icon: 'ri-checkbox-circle-line',
      color: '#FFA500', // Orange color
      title: 'Certified',
      subtitle: 'Travel agency certified in Japan',
    },
  ];

  return (
    <FeaturesContainer>
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <IconWrapper color={feature.color}>
            <i className={feature.icon}></i>
          </IconWrapper>
          <FeatureText>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
          </FeatureText>
        </FeatureCard>
      ))}
    </FeaturesContainer>
  );
}

export default Features;
