import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #010033;
  color: #fff;
  padding: 40px 20px;
  text-align: left;
`;

const FooterContent = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterSection = styled.div`
  flex: 1;
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 15px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  font-size: 14px;
  cursor: pointer;
  color: #aaa;

  &:hover {
    color: #fff;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s;

  &:hover {
    color: #ff2e63;
  }
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin: 20px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo Section */}
        <FooterSection>
          <img src="https://www.triptojapan.com/logo-dark.svg" alt="" />
          <SocialMedia>
            {/* Directly using Remix Icons here */}
            <SocialIcon href="#">
              <i className="ri-facebook-fill"></i> {/* Facebook Icon from Remix Icons */}
            </SocialIcon>
            <SocialIcon href="#">
              <i className="ri-twitter-fill"></i> {/* Twitter Icon from Remix Icons */}
            </SocialIcon>
            <SocialIcon href="#">
              <i className="ri-instagram-fill"></i> {/* Instagram Icon from Remix Icons */}
            </SocialIcon>
          </SocialMedia>
        </FooterSection>

        {/* Categories Section */}
        <FooterSection>
          <FooterTitle>Plan, Personalize and Book Your Japan Itinerary Online</FooterTitle>
          <LinkList>
            <FooterLink>Wi-Fi Rentals</FooterLink>
            <FooterLink>Amusement Parks</FooterLink>
            <FooterLink>Sightseeing Tours</FooterLink>
            <FooterLink>Food Tours</FooterLink>
            <FooterLink>Entry Tickets / Passes</FooterLink>
            <FooterLink>Multi Day Tours</FooterLink>
          </LinkList>
        </FooterSection>

        {/* Best places to visit Section */}
        <FooterSection>
          <FooterTitle>Best places to visit</FooterTitle>
          <LinkList>
            <FooterLink>AizuWakamatsu</FooterLink>
            <FooterLink>Beppu</FooterLink>
            <FooterLink>Chiba</FooterLink>
            <FooterLink>Hiroshima</FooterLink>
            <FooterLink>Kyoto</FooterLink>
            <FooterLink>Kanazawa</FooterLink>
          </LinkList>
        </FooterSection>

        {/* Explore More Section */}
        <FooterSection>
          <FooterTitle>Explore More</FooterTitle>
          <LinkList>
            <FooterLink>Rail Tours</FooterLink>
            <FooterLink>Walking Tours</FooterLink>
            <FooterLink>Diving Tours</FooterLink>
            <FooterLink>Private Tours</FooterLink>
            <FooterLink>Transfers</FooterLink>
            <FooterLink>Bike Tours</FooterLink>
          </LinkList>
        </FooterSection>
      </FooterContent>
      <HorizontalLine />
    </FooterContainer>
  );
};

export default Footer;
