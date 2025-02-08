// ImgSlider.jsx

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './imgSlider.css';

const ImgSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

 

  return (
    <div className="carousel-container">
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/BAU/D132995370_Homepage_DesktopHeroTemplate_3000x1200._CB557152260_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg"

            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

     


    </div>
  );
};

export default ImgSlider;
