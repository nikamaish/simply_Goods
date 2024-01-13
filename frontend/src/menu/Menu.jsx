import React from 'react'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPen, faCartArrowDown, faBars, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to={'/'}> <FontAwesomeIcon icon={faHouseUser} size='2x' className='Ficons' style={{color:"whitesmoke"}}/></Link>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          {/* <Link to={}> */}
          <FontAwesomeIcon icon={faCartArrowDown} size='2x'  className='Ficons' style={{color:"whitesmoke"}}/>
          
          {/* </Link> */}
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to={'/signup'}>
         <FontAwesomeIcon icon={faUserPen} size='2x' className='Ficons' style={{color:"whitesmoke"}}/>
         </Link>
        </li>
      </ul>
    </div>
  );
}