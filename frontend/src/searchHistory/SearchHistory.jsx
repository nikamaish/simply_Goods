import React from 'react';
import './searchHistory.css';

const SearchHistory = ({ searchHistory }) => {
  return (
    <div className="search-history-container">
      <h4>Search History:</h4>
      <ul>
        {searchHistory.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;
