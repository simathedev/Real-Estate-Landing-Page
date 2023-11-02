import React,{ useState, useEffect }   from 'react';
import '../navbar.css';
import {FaTimes} from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';
import Navmenu from './Navmenu';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1280px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
      setShowMenu(false);
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar">
    <ul>
        <li><a href="">Home</a> </li>
        <li><a href="">About Us</a></li>
        <li><a href="">Our Properties</a></li>
        <li><a href="">Contact Us</a></li>
  </ul>
      
        {isMobile && !showMenu && <FaBars onClick={toggleMenu} />}
      {isMobile && showMenu && <FaTimes onClick={toggleMenu} />}
      {showMenu && ( 
    <Navmenu/>
      )}
    </div>
  )
}
