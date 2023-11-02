import React from 'react';
import apartmentpic from '../images/apartment.jfif';
import pic2 from '../images/apartment_building.jfif';
import pic3 from '../images/apart2.png';

export default function Properties() {
 // const [imageHover,setImageHover]=useState(null);
 /*const imageHover = useRef(null);
  const handleMouseOver=(index)=>{
    imageHover.current = index;
  console.log("mouse is over");
  }
  const handleMouseOut=()=>{
    imageHover.current = null;
  console.log("mouse is out");
  }*/
   const images=[
        {
            src:apartmentpic,
            alt:'apartment 1',
            heading:'23 Hyde Park, Sandton',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque, eius nulla consequuntur explicabo ratione molestias libero cum. Ducimus rerum distinctio accusantium culpa maiores obcaecati!',
        },
        {
            src:pic2,
            alt:'apartment 2',
            heading:'1 Dail Avenue, Summerstrand',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque',
        },
        {
            src:pic3,
            alt:'Apartment 3',
            heading:'352 Pogo Street, Preston',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque, eius nulla consequuntur explicabo ratione molestias libero cum.',
        }
    ]

  return (
    <div className="property text-center justify-center w-full">
      <div className="sectionTitles">Our Properties</div>
      <p>Here are a list of our properties</p>
        <div className="displayContainer">
        {images.map((image, index) => (
        <div className="imageContainer mb-4" key={image.src}>
          <img src={image.src}
          alt={image.alt}
          />
            <div className="overlayText sm:text-[10px] md:text-[16px]">
              <div className="OLTextButton">
              <h2 className="font-bold text-xl">{image.heading}</h2>
              <br/>
              {image.text}
              <button>Enquire</button>
              </div>
              
            </div>
        </div>
      ))}
        </div>
       
        {/*
        <div className="imageContainer">
        <img src={apartmentpic} alt="aparment 1"/>
        <div className="overlayText">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, hic.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque, eius nulla consequuntur explicabo ratione molestias libero cum. Ducimus rerum distinctio accusantium culpa maiores obcaecati!</p>
        </div>
        </div>
        <div className="imageContainer">
        <img src={pic2} alt="aparment 2"/>
        <div className="overlayText">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, hic.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque, eius nulla consequuntur explicabo ratione molestias libero cum. Ducimus rerum distinctio accusantium culpa maiores obcaecati!</p>
        </div>
        </div>
        <div className="imageContainer">
        <img src={pic3} alt="aparment 1"/>
        <div className="overlayText">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, hic.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus fugiat minus placeat, error, voluptatum cumque, eius nulla consequuntur explicabo ratione molestias libero cum. Ducimus rerum distinctio accusantium culpa maiores obcaecati!</p>
        </div>
        </div>*/
        }
    </div>
  )
}
