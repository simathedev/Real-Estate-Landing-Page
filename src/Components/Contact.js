import React from 'react';
import Form from './Form';
import Contactinfo from './Contactinfo';

export default function Contact() {
  return (
    <div className="contact flex-col px-10 w-full min-h-full">
        <div className="sectionTitles"> Contact Us</div>
      <p className="pb-6">
     Let our dedicated team of experts guide you through the journey of finding your perfect place. 
      </p>
      <div className="flex flex-col gap-9 mb-10 flex justify-center items-center text-center ">
      <Contactinfo/>
     <Form/>
      </div>
    
    
    </div>
  )
}
