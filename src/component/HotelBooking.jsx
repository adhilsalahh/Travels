import React from 'react'
import Booking from './Booking'
import banner1 from '../image/common-banner.6ccf3e41.png';
import Email from '../Home/Email'
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

function HotelBooking() {
  return (
    <div>
        <section className='mb-16'>
        <div 
          className="bg-cover bg-main flex justify-center items-center" 
          style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
        >
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl flex text-center justify-center items-center">
            Room boking
            </h1>
            <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
            <li><Link className='no-underline text-gray-300 ' to="/hotels"><span><FontAwesomeIcon className='w-2' icon={faCircle}  /> </span> Hotel</Link></li>
            <li><Link className='no-underline text-gray-300 ' to="/hotels/roombooking"><span><FontAwesomeIcon className='w-2' icon={faCircle}  /> </span> Hotel Details</Link></li>
              <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  />Booking </a></li>
            </ul>
          </div>
        </div>
      </section>
      <Booking/>
      <Email/>
    </div>
  )
}

export default HotelBooking
