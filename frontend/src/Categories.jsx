import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import './categories.css';
import CategoriesCard from '../categoryCard/CategoriesCard';
import { 
  setVisibleCards, 
  setCurrentPosition, 
  setShowMoreClicked, 
  setElectronics 
} from './categoriesSlice';

const Categories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { 
    electronics, 
    visibleCards, 
    totalCards, 
    currentPosition, 
    showMoreClicked 
  } = useSelector(state => state.categories);

  useEffect(() => {
    // Fetch electronics data and dispatch to Redux
    // This is just an example, replace with your actual data fetching logic
    const fetchElectronics = async () => {
      const data = await fetch('/api/electronics').then(res => res.json());
      dispatch(setElectronics(data));
    };
    fetchElectronics();
  }, [dispatch]);

  const handleProductClick = (index) => {
    // navigate(`/products/${index}`);
  };

  const slideCards = (direction, category) => {
    const productContainer = document.querySelector(`.${category}-container`);
    const productCard = productContainer.querySelector('.eproduct-card');
    const cardWidth = productCard.offsetWidth + 10;

    const cardsPerPage = Math.floor(productContainer.offsetWidth / cardWidth);
    const totalVisibleCards = Math.min(visibleCards[category], totalCards[category]);

    let newPosition = currentPosition[category] + direction * cardWidth * cardsPerPage;

    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > (totalCards[category] - totalVisibleCards) * cardWidth) {
      newPosition = (totalCards[category] - totalVisibleCards) * cardWidth;
    }

    productContainer.style.transform = `translateX(-${newPosition}px)`;
    dispatch(setCurrentPosition({ category, value: newPosition }));
  };

  const handleShowMore = (category) => {
    const productContainer = document.querySelector(`.${category}-container`);
    const cardsPerPage = Math.floor(
      productContainer.offsetWidth /
      productContainer.querySelector('.eproduct-card').offsetWidth
    );
  
    dispatch(setVisibleCards({ 
      category, 
      value: Math.min(visibleCards[category] + cardsPerPage, totalCards[category])
    }));
    dispatch(setShowMoreClicked({ category, value: true }));
  
    if (productContainer) {
      productContainer.classList.add('show-scrollbar');
    }
  };

  const renderCategoriesCard = (products) => {
    return products.slice(0, visibleCards.electronics).map((product, index) => (
      <CategoriesCard key={index} product={product} onClick={() => handleProductClick(index)} />
    ));
  };

  return (
    <div>
      <div className="rectangle-container">
        <div className="electronics">
          <h1>Best Of Electronics</h1>
        </div>
        <div className="electronics-container eproduct-container">
          {renderCategoriesCard(electronics)}
        </div>
      </div>
    
      {visibleCards.electronics < totalCards.electronics && (
        <button className="show-more-btn" onClick={() => handleShowMore('electronics')}>
          Show More
        </button>
      )}
      <button className="eproduct-prev" onClick={() => slideCards(-1, 'electronics')}>
        <FontAwesomeIcon icon={faAngleLeft} size="xl" style={{ paddingRight: '10px' }} />
      </button>
      <button className="eproduct-next" onClick={() => slideCards(1, 'electronics')}>
        <FontAwesomeIcon icon={faAngleRight} size="xl" style={{ paddingLeft: '10px' }} />
      </button>
    </div>
  );
};

export default Categories;