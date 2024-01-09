// Navbar.js

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPen, faCartArrowDown, faHouseUser, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import products from '../categoriesData/CategoriesData'; // Import your product data file

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedHistory = localStorage.getItem('searchHistory');
    if (storedHistory) {
      setSearchHistory(JSON.parse(storedHistory));
    }
  }, []);

  const updateSearchHistory = (query) => {
    const updatedHistory = [query, ...searchHistory.filter((item) => item !== query)].slice(0, 7);
    setSearchHistory(updatedHistory);
    localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    performSearch();
  
  };

  const performSearch = () => {
    if (searchQuery.trim() === '') {
      console.log('Please enter a search query.');
      return;
    }

    const searchResults = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      navigate(`/products/${firstResult.id}/${encodeURIComponent(firstResult.name)}`);
      updateSearchHistory(searchQuery);
    } else {
      console.log('No matching products found.');
    }
  };

  return (
    <div className={'topbar ' + (menuOpen ? 'active' : '')}>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link to='/'>SimplyGoods</Link>
          </div>
          <form
            onSubmit={handleSearchSubmit}
            className="itemContainer"
            onFocus={() => setDropdownVisible(true)}
            onBlur={() => setDropdownVisible(false)}
          >
            <input
              type="search"
              placeholder="Search Products and More"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="searchButton">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>

            {isDropdownVisible && (
              <div className="dropdown-container">
                {/* <p>Search History:</p> */}
                <ul>
                  {searchHistory.map((item, index) => (
                    <li key={index} onClick={() => setSearchQuery(item)}>
                       <FontAwesomeIcon icon={faClockRotateLeft} style={{marginRight:'10px'}}></FontAwesomeIcon>
                      {item}
                     
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
