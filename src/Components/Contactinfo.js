import React from 'react';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {FaPhoneAlt} from 'react-icons/fa';
import{FaEnvelope} from 'react-icons/fa';

export default function Contactinfo() {
    const contactInfo=[
        {
            description:"phone",
            icon:<FaPhoneAlt/>,
            text:"(27) 89-000-4567",
        },
        {
            description:"location",
            icon: <FaMapMarkerAlt/>,
            text:"267 Lorem Avenue, Morningside, Sandton, Gauteng, South Africa, 2194",
        },
        {
            description:"email",
            icon:<FaEnvelope/>,
            text:"info@aristocraticapartments.co.za",
        },
       
    ];
  return (
    <div className="contactinfo flex flex-col items-center justify-center text-center">
        {/*
        <FaMapMarkerAlt/>
        <FaPhoneAlt/>
        <FaEnvelope/>
        */}
    {contactInfo.map((contact, index) => (
          <div className="contactInfoBlock flex flex-col items-center justify-center text-center" key={index}>
            {contact.icon}
        <p className="pb-4"> {contact.text}</p>
       </div>
    ))}
    </div>
  )
}
