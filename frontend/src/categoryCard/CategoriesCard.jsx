import React from 'react';

const CategoriesCard = ({ product, onClick }) => {
  return (
    <div className="rectangle-container">
        <div className="electronics">
          <h1>Best Of Electronics</h1>
        </div>
        <div className="eproduct-container">
      {/* {electronics.map((product, index) => ( */}
        <div  className="eproduct-card" >
          <img src={product.img} alt={product.name} className="eproduct-image" />
          <div className="eproduct-details">
            <p className="eproduct-name">{product.name}</p>
            <p className="eproduct-price">From ₹ {product.price}</p>
          </div>
        </div>
      {/* ))} */}
    </div>
    </div>
  );
};

export default CategoriesCard;
