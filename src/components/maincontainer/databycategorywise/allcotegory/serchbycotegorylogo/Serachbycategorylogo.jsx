import React from 'react'
import image1 from './logo.webp';
import image2 from './animation.webp';
import './searchcategory.css';

export default function Serachbycategorylogo() {
  return (
    <div className='allcategorycontainer'>
      <div>
      <img src={image2} alt='image1'/>
      </div>
      <div>
        <img src={image1} alt='image'/>
      </div>
    </div>
  )
}
