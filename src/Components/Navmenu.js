import React from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

export default function Navmenu() {
  return (
    <div className="navmenu">
    <ul>
    
       <li><a href="#">Home</a> </li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Properties</a></li>
        <li><a href="#">Contact Us</a></li>
     
        </ul>  
    </div>
  )
}
