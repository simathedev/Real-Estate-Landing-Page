import React from 'react';
import { BrowserRouter as Router,Routes,Route, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer text-center justify-center w-full items-center">
      <ul>
<Router>
   <li>
   <Link to="/">Home</Link>
   </li>
   <li>
   <Link to="/about">About Us</Link>  
   </li>
   <li>
   <Link to="/properties">Our Properties</Link>   
   </li>
   <li>
   <Link to="/contact">Contact Us</Link>   
   </li>     
</Router>
   </ul>  
      <p><i>Created by @SBTheDev</i></p>
    </div>
  )
}
