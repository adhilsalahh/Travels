import React from 'react';
import banner1 from '../image/common-banner.6ccf3e41.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import only once
import { faPlaneDeparture, faHotel, faGlobe, faPlaneArrival, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line

import '../component/Home.css'; // Ensure you have custom styles here if needed

// import { data } from '../component/mapping';
import { Tour } from '../component/mapping';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import { faAngry } from '@fortawesome/free-regular-svg-icons';
import Email from '../Home/Email';
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line

import Toursfound from '../component/Toursfound';
function Tours() {
  return (
    <div>
      <section>
        <div className="bg-cover bg-main flex justify-center items-center" 
             style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}>            
          {/* Content Below the Navbar */}
          <div className="text-center text-white">
            <h1 className="font-serif text-7xl flex text-center justify-center items-center">
            Tour search result
            </h1>
       
            <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
              <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  /> Tours</a></li>
            </ul>
          
          </div>
        </div>
      </section>

      
      <section className='relative bottom-32'>
      <div className="2xl:contrast  first-div mx-3 p-8 rounded bg-slate-50">
      <div className="row ">
  {/* First Column */}
  <div className="col-12 col-lg-6">
    <ul className=" no-underline flex justify-center items-center gap-1">
      <li className=" no-underline">
        <button className="bg-purple-600 px-3 rounded text-white p-2 gap-1 flex justify-center items-center text-center">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <a className="no-underline text-white" href="#">Flight</a>
        </button>
      </li>
      <li className=" no-underline">
        <button className="px-3 border-1 border-black text-white flex p-2 rounded justify-center items-center text-center gap-1">
          <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000" }} />
          <a className="no-underline text-black" href="#">Tours</a>
        </button>
      </li>
      <li className=" no-underline">
        <button className="border-1 px-3 border-black text-black bg-white flex gap-2 p-2 rounded justify-center items-center text-center">
          <FontAwesomeIcon icon={faHotel} style={{ color: "#000000" }} />
          <a className="no-underline text-black" href="#">Hotels</a>
        </button>
      </li>
    </ul>
  </div>

  {/* Second Column */}
  <div className="col-12 col-lg-6">
    <ul className=" flex justify-center items-center no-underline  gap-2">
      <li className=" no-underline">
        <button className="p-2">
          <a className="no-underline text-violet-600 font-semibold" href="#">One Way</a>
        </button>
      </li>
      <li className=" no-underline">
        <button className="p-2">
          <a className="no-underline text-black" href="#">Roundtrip</a>
        </button>
      </li>
      <li className=" no-underline">
        <button className="p-2">
          <a className="no-underline text-black" href="#">Multi City</a>
        </button>
      </li>
    </ul>
  </div>
</div>


          {/* Form Inputs */}
          <div className=''>

         
          <div className="row">
            <div className="col-lg-12 my-4">
              <div className='row gap-3'>
                {/* First Column */}
              
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-2 rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className="bg-violet-100 text-gray-400 w-100" type="text" value="From" />
                          <FontAwesomeIcon className="h-6" icon={faPlaneDeparture} />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>New York</h5>
                          <span className="text-sm">JFK - John F. Kennedy International...</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-2 rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className="bg-violet-100 text-gray-400 w-100" type="text" value="From" />
                          <FontAwesomeIcon className='h-6' icon={faPlaneArrival} style={{ color: "#000000" }} />
                          </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>London</h5>
                          <span className="text-sm">LCY - London City Airport</span>
                        </div>
                      </div>
                    </div>
                

                {/* Second Column */}
                
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12  p-2  rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <p className="bg-violet-100 text-gray-400 mb-0 pb-0" >
                          Journey date
                          </p>
                      
                        </form>
                        <div className="flex flex-col mb-2 text-left">
                          <input  className='bg-violet-100 font-bold' type="date" value="2022-05-05"  />
                 

                        </div>
                        <div className='flex flex-col text-left mb-2'>
                          <span className="text-sm">Thursday</span>

                        </div>
                      </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-12 col-12  rounded  p-2 bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <p  className="bg-violet-100 text-gray-400 w-100 mb-0 pb-0">Passenger,Class</p>
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>0 Passenger</h5>
                          <span className="text-sm">Bisuness</span>
                        </div>
                      </div>
                    </div>
                  
                
             
                    </div>
                    </div>

                    <div className=' flex justify-center items-center  '>
                       <button className='bg-purple-600 py-2 px-4 rounded text-white'>Search</button> 
                    </div>

                    </div>
                   
          </div>

        </div>
      </section>
     <Toursfound/>
      <Email/>
      
      
    </div>
  );
}

export default Tours;


