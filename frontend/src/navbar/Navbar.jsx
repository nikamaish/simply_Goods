import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPen, faCartArrowDown, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import products from '../categoriesData/CategoriesData'; // Import your product data file

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Filter products based on the search query
    const searchResults = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Navigate to the MainProduct page with the product ID and name as parameters
    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      navigate(`/products/${firstResult.id}/${encodeURIComponent(firstResult.name)}`);
    } else {
      // Handle the case where no results are found or show a message
      console.log("No matching products found.");
    }
  };
  

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link to='/'>SimplyGoods</Link>
          </div>
          <form onSubmit={handleSearchSubmit} className="itemContainer">
            <input
              type="search"
              placeholder='Search Products'
              value={searchQuery}
              onChange={handleSearchChange}
            />
             <button onClick={handleSearchSubmit}>
          <FontAwesomeIcon icon={faSearch} size='lg' />
        </button>
          </form>
          <div className="itemContainer">
            <Link to='/'>
              <FontAwesomeIcon icon={faHouseUser} size='2x' className='ficons' />
            </Link>
          </div>
          <div className="itemContainer">
            <FontAwesomeIcon icon={faCartArrowDown} size='2x' className='ficons' />
          </div>
          <div className="itemContainer">
            <Link to='/signup'>
              <FontAwesomeIcon icon={faUserPen} size='2x' className='ficons' />
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
