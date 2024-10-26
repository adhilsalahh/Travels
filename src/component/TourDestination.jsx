import React from 'react'
import Toursfound from './Toursfound';

import banner1 from '../image/common-banner.6ccf3e41.png';
import Email from '../Home/Email'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
 
function TourDestination() {
  return (
    <div>

<section className='mb-16'>
        <div 
          className="bg-cover bg-main flex justify-center items-center" 
          style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
        >
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl flex text-center justify-center items-center">
              Explore the evergreen forest
            </h1>
            <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  

              <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  /> Top Destination</a></li>

            </ul>
          </div>
        </div>
      </section>
            <Toursfound/>
            <Email/>

      
    </div>
  )
}

export default TourDestination
