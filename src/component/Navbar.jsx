// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Logo href="/"><img src="images/svg.svg" alt="" /></Logo>

        <LinksContainer>
          <Links>
            {['Home', 'Trips', 'Tours', 'Blog', 'About Us'].map((text) => (
              <LinkItem key={text}>
                <a href={`/${text.toLowerCase()}`}>{text}</a>
              </LinkItem>
            ))}
          </Links>
        </LinksContainer>

        <Icons>
          <CartIcon>
            <i className="ri-shopping-bag-line"></i>
          </CartIcon>
          <CurrencyIcon>
            <i className="ri-money-dollar-circle-line"></i>
          </CurrencyIcon>
          <LanguageIcon>
            <i className="ri-global-line"></i>
          </LanguageIcon>
          <OrderLink href="/orders">Orders</OrderLink>
        </Icons>

        <Hamburger onClick={() => setOpen(true)}>
          <i className="ri-menu-line"></i>
        </Hamburger>

        {open && (
          <FullPageMenu>
            <CloseButton onClick={() => setOpen(false)}>
              <i className="ri-close-line"></i>
            </CloseButton>
            <MenuList>
              {['Home', 'Trips', 'Tours', 'Blog', 'About Us'].map((text) => (
                <MenuItem key={text}>
                  <a href={`/${text.toLowerCase()}`}>{text}</a>
                </MenuItem>
              ))}
            </MenuList>
          </FullPageMenu>
        )}
      </Container>
    </Nav>
  );
};

// Styled Components
const Nav = styled.nav`
  background-color: #fff;
  padding: 15px 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 30px;
`;

const Logo = styled.a`
  // font-size: 20px;
  // font-weight: bold;
  // color: #000033;
  // text-decoration: none;
`;

const LinksContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  gap: 22px;

  a {
    text-decoration: none;
    color: #555;
    font-weight: 700;
    font-size: 15px;

    &:hover {
      color: #000033;
    }
  }
`;

const LinkItem = styled.li``;

const Icons = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
  position: absolute;
  right: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartIcon = styled.div`
  i {
    font-size: 20px;
    color: #000033;
  }
`;

const CurrencyIcon = styled.div`
  i {
    font-size: 20px;
    color: #000033;
  }
`;

const LanguageIcon = styled.div`
  i {
    font-size: 20px;
    color: #000033;
  }
`;

const OrderLink = styled.a`
  text-decoration: none;
  color: purple;
  font-weight: bold;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  i {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    display: block;
    margin-left: 50%;
  }
`;

const FullPageMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;

  i {
    font-size: 28px;
    color: #000033;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;

`;

const MenuItem = styled.li`
  a {
    text-decoration: none;
    font-size: 28px;
    font-weight: bold;
    color: #000033;
  }
`;

export default Navbar;