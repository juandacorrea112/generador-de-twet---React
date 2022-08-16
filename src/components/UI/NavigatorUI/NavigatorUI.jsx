import React from 'react';
import { Link } from 'react-router-dom';


export const NavigatorUI = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <a href="/">Home con Ancla</a>
      <Link to="/aboutUS">About Us</Link>
      <Link to="/contactUS">Contact Us</Link>      
      <Link to="/Tweet">Tweet</Link>            
      
    </nav>
  )
}
