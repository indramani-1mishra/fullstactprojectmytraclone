import React from 'react'
import './categoryitem.css';

import { Link } from 'react-router-dom';
import categories from '../serchbycotegorylogo/images/helpercode';

export default function Categoryitems() {
   
  return (
    <div className='categoryimageconatiner'>
    {categories.map((item)=>
    {
      return <div  key={item.path} className='categoryitems1'>
       <Link to={item.path}> <img  src={item.image}  alt={item.name} loading='lazy' /></Link>
      </div>  
    })}
    </div>
  )
}
