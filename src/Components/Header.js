import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className="header flex flex-row justify-center items-center">
       <div className="logo-title">
        <img src={logo} alt="Logo"/>
        <div className="logotitle xs:text-[16px] sm:text-[22px] lg:text-[34px] md:text-[32px] text-[16px]">Aristocratic Apartments</div>
       </div>
    </div>
  )
}
