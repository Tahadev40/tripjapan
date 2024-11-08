// ImageSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'remixicon/fonts/remixicon.css'; // Remix icons


// Component
const ImageSlider = () => {
  const trips = [
    {
      name: 'Experiance and Peace Mount Fuji Tour and Arakura Shrine',
      image: 'https://media.istockphoto.com/id/677209164/photo/fuji-mountain-in-spring.jpg?s=612x612&w=0&k=20&c=vkLhf0w52ijbmKzkhj20wBdxrQ_v6NF1A2kmFT6NFyc=',
      duration: '10 hrs',
      location: 'Kanazawa',
      price: 'From $196 /person',
    },
    {
      name: 'Tokyo Food Tour The Sugamo Local Street Food Tour Experiance',
      image: 'https://media.istockphoto.com/id/1824344345/photo/fuji-mountain-and-kawaguchiko-lake-at-sunrise-autumn-seasons-fuji-mountain-at-yamanachi-in.jpg?s=612x612&w=0&k=20&c=Qr1oT9vB6cWkfuVFbWkutUsq5KV62xbdL47Uwabxz3s=',
      duration: '3 hrs',
      location: 'Kanazawa',
      price: 'From $316 /person',
    },
    {
      name: 'Izakaya Tour in Shinjuku, Tokyo',
      image: 'https://media.istockphoto.com/id/1137599458/photo/asian-woman-wearing-japanese-traditional-kimono-at-fuji-mountain-and-cherry-blossom.jpg?s=612x612&w=0&k=20&c=oPxhiRhcMi3KEH2uiPwwnsVG0YO8HntIeeUb9GFiPu4=',
      duration: '3.5 hrs',
      location: 'Kanazawa',
      price: 'From $183 /person',
    },
    {
        name: 'Tokyo Food Tour The Sugamo Local Street Food Tour Experiance',
        image: 'https://media.istockphoto.com/id/1824344345/photo/fuji-mountain-and-kawaguchiko-lake-at-sunrise-autumn-seasons-fuji-mountain-at-yamanachi-in.jpg?s=612x612&w=0&k=20&c=Qr1oT9vB6cWkfuVFbWkutUsq5KV62xbdL47Uwabxz3s=',
        duration: '3 hrs',
        location: 'Kanazawa',
        price: 'From $316 /person',
      },
      {
        name: 'Tokyo Food Tour The Sugamo Local Street Food Tour Experiance',
        image: 'https://media.istockphoto.com/id/1824344345/photo/fuji-mountain-and-kawaguchiko-lake-at-sunrise-autumn-seasons-fuji-mountain-at-yamanachi-in.jpg?s=612x612&w=0&k=20&c=Qr1oT9vB6cWkfuVFbWkutUsq5KV62xbdL47Uwabxz3s=',
        duration: '3 hrs',
        location: 'Kanazawa',
        price: 'From $316 /person',
      },
  ];

  return (
    <SwiperContainer>
      <HeaderWrapper>
        <SwiperTitle>Top Attractions</SwiperTitle>
      </HeaderWrapper>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        navigation
        // pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          768: { slidesPerView: 2 }, // Tablet
          1024: { slidesPerView: 3 }, // Desktop
        }}
      >
        {trips.map((trip, index) => (
          <SwiperSlide key={index}>
            <TripCard>
              <ImageWrapper>
                <img src={trip.image} alt={trip.name} />
              </ImageWrapper>
              <TripDetails>
                <TripInfo>
                  <span>
                    <i className="ri-time-line" /> {trip.duration}
                  </span>
                  <span>{trip.location}</span>
                </TripInfo>
                <TripName>{trip.name}</TripName>
                <TripPrice>{trip.price}</TripPrice>
              </TripDetails>
            </TripCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default ImageSlider;

// Styled Components
const SwiperContainer = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: auto;
`;

const HeaderWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;

const SwiperTitle = styled.h2`
  font-size: 29px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TripCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
//   box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
  width: 96%;
`;

const ImageWrapper = styled.div`
  height: 560px;
  overflow: hidden;
   border-radius: 12px;
   background-size: cover;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TripDetails = styled.div`
  padding: 15px;
  text-align: left;
`;

const TripName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  opacity: 0.8;
`;

const TripInfo = styled.div`
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  span {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  i {
    font-size: 16px;
    color: #2ecc71;
  }
`;

const TripPrice = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #2c3e50;
`;
