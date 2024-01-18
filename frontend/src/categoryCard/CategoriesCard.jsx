// Product.js
import React from 'react';

const CategoriesCard = ({ product, onClick }) => {
  return (
    <div className="eproduct-card" onClick={onClick}>
      <img src={product.img} alt={product.name} className="eproduct-image" />
      <div className="eproduct-details">
        <p className="eproduct-name">{product.name}</p>
        <p className="eproduct-price">From ₹ {product.price}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
