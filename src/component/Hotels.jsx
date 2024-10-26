import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
import Toursfound from './Toursfound';
import Email from '../Home/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import only once
import { faPlaneDeparture,faCircle, faHotel, faGlobe, faPlaneArrival, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import { Link } from 'react-router-dom';

function Hotels() {
  return (
    <div>
         <section className='mb-16'>
        <div 
          className="bg-cover bg-main flex justify-center items-center" 
          style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
        >
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl flex text-center justify-center items-center">
            Hotel search result
            </h1>
            <ul className=" text-lg flex text-center justify-center gap-3 items-center ">
            <li>
  <Link className='no-underline text-gray-300' to="/">Home</Link>
</li>  <li><a className='no-underline text-white' href=""> <span className='mr-1'> <FontAwesomeIcon className='w-2' icon={faCircle}  />  </span> Hotel</a></li>
</ul>

          </div>
        </div>
      </section>      

      <section className='container  relative bottom-32'>
        <div className="  first-div mx-3 p-8 rounded bg-slate-50">
          {/* Form Inputs */}
          <div className=''>

         
          <div className="row">
            <div className="col-lg-12 my-4">
              <div className='row gap-3'>
                {/* First Column */}
              
                    <div className="col-lg-5 col-md-6 col-sm-12 col-12 p-3 rounded bg-violet-100">
                      <div>
                        <div >
                          <label className='block' htmlFor="">Destination</label>
                          <input className='bg-transparent text-3xl' type="text" placeholder='Where are you Going?' />
                          <p className='text-sm mt-3 mb-0'>Where are you going?</p>
                        </div>
                        
                       
                      </div>
                    </div>

                

                {/* Second Column */}
                
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12  p-2  rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <p className="bg-violet-100 text-gray-400 mb-0 pb-0" >
                          Check In date
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
  )
}

export default Hotels

