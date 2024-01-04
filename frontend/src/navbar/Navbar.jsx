// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faUserPen, faCartArrowDown, faBars, faHouseUser } from '@fortawesome/free-solid-svg-icons';
// import './navbar.css';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false); // Set to true initially

//   const handleMenuToggle = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
//         <div className='navbar-container'>
//           <ul className='logo'>
//             <li>SimplyGoods</li>
//           </ul>
//           <div className={`nav-right ${isMenuOpen ? 'show' : ''}`}>
//             <ul>
//               <li className='search-container'>
//                 <input type="search" placeholder='Search Products' />
//                 <FontAwesomeIcon icon={faSearch} size='lg' />
//               </li>
//               <li><FontAwesomeIcon icon={faHouseUser} size='lg' /></li>
//               <li><FontAwesomeIcon icon={faCartArrowDown} size='lg' /></li>
//               <li><FontAwesomeIcon icon={faUserPen} size='lg' /></li>
//             </ul>
//           </div>
//           <div className='search-container'>
//             <FontAwesomeIcon icon={faSearch} size='lg' />
//           </div>
//           <div className='menu-toggle' onClick={handleMenuToggle}>
//             {isMenuOpen ? (
//               <>
//                 <span className="line1"></span>
//                 <span className="line2"></span>
//                 <span className="line3"></span>
//               </>
//             ) : (
//               <>
//                 <span className="cross-line1"></span>
//                 <span className="cross-line2"></span>
//               </>
//             )}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPen, faCartArrowDown, faBars, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';
import { Link } from 'react-router-dom';
 
// import { Person, Mail } from "@material-ui/icons"


export default function Navbar({ menuOpen, setMenuOpen }) {
                                  /// these are props 
  return (
    <div className={"topbar " + (menuOpen && "active")}>  
    {/* if menuopen is open and active then it will show the effect */}
    {/* If menuOpen is true, the topbar element will have both the "topbar" class and the "active" class. If menuOpen is false, the topbar element will only have the "topbar" class, and the "active" class will not be present. */}

      <div className="wrapper">
        <div className="left">
          <div className="logo">
          <Link to='/ '>SimplyGoods</Link>
          </div>
          <div className="itemContainer">
          <input type="search" placeholder='Search Products' />
          <FontAwesomeIcon icon={faSearch} size='lg' />
          </div>

            <div className="itemContainer">
            <Link to='/'><FontAwesomeIcon icon={faHouseUser} size='2x' className='ficons' /></Link>
          </div>

          <div className="itemContainer">
          <FontAwesomeIcon icon={faCartArrowDown} size='2x' className='ficons'/>
          </div>  

          <div className="itemContainer">
          <Link to ='/signup'><FontAwesomeIcon icon={faUserPen} size='2x' className='ficons'/></Link>
          </div>
        </div>


          <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            {/*! it will do the oposite of initial value   */}
                       {/* if menuOpen is false then after clicking that it will become true, changes will made  */}

            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}