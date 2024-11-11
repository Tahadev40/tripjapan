import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  border-radius: 25px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: ${(props) => (props.show ? 'block' : 'none')};
  transition: all 0.3s ease-in-out;
  max-width: 400px;
  height: 160px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #ff2e63;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
  margin-top: 10px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e42256;
  }
`;

const CloseButton = styled(Button)`
  background-color: #ff2e63;
  &:hover {
    background-color: #e42256;
  }
`;

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // Show popup on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isClosed) {
        setShowPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed]);

  // Handle close button
  const handleClose = () => {
    setShowPopup(false);
    setIsClosed(true);
  };

  return (
    <Container show={showPopup}>
      <p>
        Got any questions about Japan? Our travel experts provide free trip planning consultation.
      </p>
      <Button onClick={() => window.open('https://www.triptojapan.com', '_blank')}>
        Book Free 30 Minute Meeting
      </Button>
      <CloseButton onClick={handleClose}>Close</CloseButton>
    </Container>
  );
};

export default Popup;
