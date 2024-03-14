


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import './mainProduct.css';

const MainProduct = ({ products }) => {
  const { productId, productName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on productId
    const filtered = products.filter((p) => p.id === parseInt(productId, 10));
    setFilteredProducts(filtered);
  }, [productId, products]);

  if (filteredProducts.length === 0) {
    return <p>Loading...</p>;
  }

  // Apply styling for single card with a minimum width
  const cardStyle = filteredProducts.length === 1 ? { minWidth: '60%' } : {};

  return (
    <div>
      <h1>Main Product</h1>
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div key={product.name} className="product-card" style={cardStyle}>
            <img src={product.img} alt={product.name} />
            <div className="product-details">
              <h2>{product.name}</h2>
              <h3>{product.colorType}</h3>
              <div className='priceOff'>
                <b><p className='realPrice'> ₹ {product.price}</p></b>
                <s> ₹ {product.cancelPrice}</s>
                <p className='off'>{product.off}</p>
              </div>
              {/* Display the number of stars as a digit with a single star icon */}
              <div className='lower'style={{ display: 'flex', alignItems: 'center' }}> 
              <div className="stars" >
                <FontAwesomeIcon icon={fasStar} style={{ color: 'white' }} /> {product.stars}
              </div>
              <button style={{marginLeft:'15px', padding:'7px', border:'none', borderRadius:'5px', color:'white', backgroundColor:'green'}}>Add to Cart </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProduct;