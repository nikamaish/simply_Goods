import React, { useState } from 'react';
import './categories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom';
import MainProduct from '../mainProduct/MainProduct';

const Categories = () => {
  const electronics = [
    {
      name: 'Headphones',
      img: 'https://m.media-amazon.com/images/I/41AKfrELYdL._SY300_SX300_QL70_FMwebp_.jpg',
      price: '289',
    },
    {
      name: 'Wireless Mouse and Keyboard',
      img: 'https://m.media-amazon.com/images/I/81w2enEMmqS.jpg',
      price: '169',
    },
    {
      name: 'Camera',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8oJVQDAgQJqsceuZd59tHI8AG-fSTB2s1w&usqp=CAU',
      price: '179',
    },
    {
      name: 'Powerbanks',
      img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
      price: '179',
    },
    {
      name: 'BenQ Monitors',
      img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/monitor/w/2/f/cb282k-uhd-28-2023-um-pb2ss-001-acer-original-imagqhefn3jq85kp.jpeg?q=70',
      price: '179',
    },
    {
      name: 'Printers ',
      img: 'https://rukminim2.flixcart.com/image/612/612/k4a7c7k0/printer/y/j/z/canon-e3370-original-imafn2wyyxjjvzd6.jpeg?q=70',
      price: '179',
    },
    {
      name: 'Monitor',
      img: 'https://rukminim2.flixcart.com/image/312/312/kmp7ngw0/monitor/j/z/h/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70',
      price: '179',
    },
  ];


  const beautyFoodToys = [{

      name:'Cycle',
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUPjylIIgof5-4stlP6rwYhDE1mrjTOnrwt_WJdc2jcT1tyyAU_MHj53dJ25OcPwTHKQ&usqp=CAU',
      price:'Up to 40% Off',


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

  
  


  return (
    <div>
      <div className="rectangle-container">
        <div className="electronics">
          <h1>Best Of Electronics</h1>
        </div>
        <div className="eproduct-container">
      {electronics.map((product, index) => (
        <div key={index} className="eproduct-card" onClick={() => handleProductClick(index)}>
          <img src={product.img} alt={product.name} className="eproduct-image" />
          <div className="eproduct-details">
            <p className="eproduct-name">{product.name}</p>
            <p className="eproduct-price">From ₹ {product.price}</p>
          </div>
        </div>
      ))}
    </div>


        {visibleCards < totalCards && (
          <button className="show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
        <button className="eproduct-prev" onClick={() => slideCards(-1)}>
          <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{ paddingRight: '10px' }} />
          {/* Prev */}
        </button>

        <button className="eproduct-next" onClick={() => slideCards(1)}>
          {/* Next */}
          <FontAwesomeIcon icon={faAngleRight} size="xl" style={{ paddingLeft: '10px' }} />
        </button>
        
      </div>
    </div>
  );
};

export default Categories;