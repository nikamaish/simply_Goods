import React from 'react';
import Navbar from './navbar/Navbar';
import Menu from './menu/Menu';
import ImgSlider from './slider/ImgSlider';
import Categories from './product_categories/Categories';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './userProfile/SignUp'; 
import Login from './userProfile/Login';
import MainPage from './mainpage/MainPage';
import MainProduct from './mainProduct/MainProduct';
import products from './categoriesData/CategoriesData.jsx';


// const products = [
//   { id: 1, name: 'Pendrives and SD cards', price: '289' },
//   { id: 2, name: 'Wireless Mouse and Keyboard', price: '169' },
//   { id: 3, name: 'Camera', price: '179' },
//   // Add more products as needed
// ];

const App = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleApplyFilters = (filters) => {
    // Handle the filters logic here
    console.log('Applied filters:', filters);
  };
  return (
    <div>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        <Route path="/products/:productId" element={<MainProduct products={products}  />} />

        <Route path="/products/:productId/:productName" element={<MainProduct products={products} />} />




        </Routes>

      </Router>
    </div>
  );
};

export default App;
