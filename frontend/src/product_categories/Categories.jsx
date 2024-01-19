import React, { useState } from 'react';
import './categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';
import MainProduct from '../mainProduct/MainProduct';
import CategoriesCard from '../categoryCard/CategoriesCard';

const Categories = () => {
  const electronics = [
    {
      name: 'Headphone',
      img: 'https://m.media-amazon.com/images/I/41AKfrELYdL._SY300_SX300_QL70_FMwebp_.jpg',
      price: '289',
    },
    {
      name: 'Mouse and Keyboard',
      img: 'https://m.media-amazon.com/images/I/81w2enEMmqS.jpg',
      price: '169',
    },
  
    {
      name: 'Watch',
      img: 'https://www.fireboltt.com/cdn/shop/files/3_27d45c02-6d3f-47a1-a69b-8b1425762e15_540x.png?v=1686730080',
      price: '179',
    },
    {
      name: 'Tab',
      img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685969389/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264220_zwzdi0.png?tr=w-480',
      price: '179',
    },
    {
      name: 'Mobile Phone ',
      img: 'https://m.media-amazon.com/images/I/41etLpNZV6L._SX300_SY300_QL70_FMwebp_.jpg',
      price: '179',
    },
    {
      name: 'TVs',
      img: 'https://m.media-amazon.com/images/I/71jVRzxB1wL._SX679_.jpg',
      price: '179',
    },
    {
      name: 'Refrigerator',
      img: 'https://m.media-amazon.com/images/I/413xPokXBiL._SY445_SX342_QL70_FMwebp_.jpg',
      price: '179',
    },
  ];


  const beautyFoodToys = [{

      name:'Cycle',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUPjylIIgof5-4stlP6rwYhDE1mrjTOnrwt_WJdc2jcT1tyyAU_MHj53dJ25OcPwTHKQ&usqp=CAU',
      price:'200',


  }]

  const navigate = useNavigate();
  const handleProductClick = (index) => {
    navigate(`/products/${index}`);
  };

  



  const initialVisibleCards = 4;
  const [visibleCards, setVisibleCards] = useState(initialVisibleCards);
  const [totalCards, setTotalCards] = useState(electronics.length);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [showMoreClicked, setShowMoreClicked] = useState(false);


  const slideCards = (direction) => {
    const eproductContainer = document.querySelector('.eproduct-container');
    const eproductCard = document.querySelector('.eproduct-card');
    const cardWidth = eproductCard.offsetWidth + 10;

    const cardsPerPage = Math.floor(eproductContainer.offsetWidth / cardWidth);
    const totalVisibleCards = Math.min(visibleCards, totalCards);

    let newPosition = currentPosition + direction * cardWidth * cardsPerPage;

    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > (totalCards - totalVisibleCards) * cardWidth) {
      newPosition = (totalCards - totalVisibleCards) * cardWidth;
    }

    // eproductContainer.style.transform = 'transform 15s ease';
    eproductContainer.style.transform = `translateX(-${newPosition}px)`;
    setCurrentPosition(newPosition);
  };


  const handleShowMore = () => {
    const cardsPerPage = Math.floor(
      document.querySelector('.eproduct-container').offsetWidth /
        document.querySelector('.eproduct-card').offsetWidth
    );
  
    setVisibleCards((prevVisibleCards) => Math.min(prevVisibleCards + cardsPerPage, totalCards));
    setShowMoreClicked(true);
  
    const eproductContainer = document.querySelector('.eproduct-container');
    if (eproductContainer) {
      eproductContainer.classList.add('show-scrollbar');
    }
  };

  const renderCategoriesCard = (products) => {
    return products.map((product, index) => (
      <CategoriesCard key={index} product={product} onClick={() => handleProductClick(index)} />
    ));
  };
  


  return (
    <div>
    <div className="rectangle-container">
      <div className="electronics">
        <h1>Best Of Electronics</h1>
      </div>
      <div className="eproduct-container">
        {renderCategoriesCard(electronics)}
      </div>
    </div>
  
    <div className="rectangle-container">
      <div className="electronics">
        <h1>Best Of Beauty, Food & Toys</h1>
      </div>
      <div className="eproduct-container">
        {renderCategoriesCard(beautyFoodToys)}
      </div>
    </div>
  
    {visibleCards < totalCards && (
      <button className="show-more-btn" onClick={handleShowMore}>
        Show More
      </button>
    )}
    <button className="eproduct-prev" onClick={() => slideCards(-1)}>
      <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{ paddingRight: '10px' }} />
    </button>
    <button className="eproduct-next" onClick={() => slideCards(1)}>
      <FontAwesomeIcon icon={faAngleRight} size="xl" style={{ paddingLeft: '10px' }} />
    </button>
  </div>
  
  );
};

export default Categories;