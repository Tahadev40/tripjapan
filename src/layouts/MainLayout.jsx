import React from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import Tours from '../component/Tours';
import Blog from '../component/Blog';
import Reviews from '../component/Reviews';
import Slider from '../component/Slider';
import Video from '../component/Video';
import Active from '../component/Active';
import Attraction from '../component/Attraction';
import City from '../component/City';
import Icon from '../component/Icon' 
import Footer from '../component/Footer'
import Popup from '../component/Popup'

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <Navbar />
      <Hero />
      <main className="content-container">
        {children}
      </main>
      <Slider />
      <Icon />
      <City />
      <Attraction />
      <Active />
      <Video />
      <Reviews />
      <Tours />
      <Blog />
      <Footer />
      <Popup />
    </div>
  );
};

export default MainLayout;
