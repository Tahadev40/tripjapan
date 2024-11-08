// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import styled from 'styled-components';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Styled Components
const SwiperContainer = styled.div`
  padding: 10px;
  max-width: 1200px;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const SwiperTitle = styled.h2`
  // font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const SwiperSubtitle = styled.p`
  color: #555;
  margin: 0;
  font-size: 16px;
  width: 60%;
  opacity: 0.8;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SlideImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  border-radius: 20px;
`;

const BlurOverlay = styled.div`
  position: absolute;
  bottom: 20%;
  width: 100%;
  height: 15%;
  // background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  backdrop-filter: blur(6px);
  border-radius: 20px 20px 20px 20px;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
  font-size: 14px;

  p {
    margin: 5px 0;
  }
`;

// Component
function TripSwiper() {
  const trips = [
    { name: 'tower', price: '$1,727', duration: '14 days', start: 'Tokyo' },
    { name: 'gate', price: '$1,800', duration: '12 days', start: 'Tokyo' },
    { name: 'temple', price: '$1,955', duration: '15 days', start: 'Osaka' },
    { name: 'golden', price: '$1,727', duration: '14 days', start: 'Tokyo' },
    { name: 'bridge', price: '$1,800', duration: '12 days', start: 'Tokyo' },
    { name: 'pumpkin', price: '$1,955', duration: '15 days', start: 'Osaka' },
    { name: 'kobe', price: '$1,727', duration: '14 days', start: 'Tokyo' },
    { name: 'castle', price: '$1,800', duration: '12 days', start: 'Tokyo' },
    { name: 'shrin', price: '$1,955', duration: '15 days', start: 'Osaka' },
  ];

  return (
    <SwiperContainer>
      <HeaderWrapper>
        <SwiperTitle>Our most popular trip packages</SwiperTitle>
        <SwiperSubtitle>
          Every trip is one-of-a-kind. Choose an itinerary to kickstart your journey, then customize 
          your stay by selecting preferred hotels and adding the activities that matter most to you.
        </SwiperSubtitle>
      </HeaderWrapper>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        // pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1, // On small screens (like mobile)
          },
          768: {
            slidesPerView: 2, // On medium screens (like tablets)
          },
          1024: {
            slidesPerView: 3, // On larger screens (like desktops)
          },
        }}
      >
        {trips.map((trip, index) => (
          <StyledSwiperSlide key={index}>
            <SlideImage src={`images/${trip.name.toLowerCase()}.jpeg`} alt={trip.name} />
            <BlurOverlay>from {trip.price}/person</BlurOverlay>
            <CardContent>
              <p><strong>{trip.name} self-travel trip</strong></p>
              <p>Duration: {trip.duration}</p>
              <p>Start place: {trip.start}</p>
            </CardContent>
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
}

export default TripSwiper;
