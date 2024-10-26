import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
import '../component/Home.css'; // Ensure you have custom styles here if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faHotel, faGlobe, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';

import qatar1 from '../image/download (3).png'
import Email from '../Home/Email';
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line

function Flights() {
  return (
    <div>
       <section className='mb-16'>
        <div 
          className="bg-cover bg-main flex justify-center items-center" 
          style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
        >
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl flex text-center justify-center items-center">
              Flight search result
            </h1>
            <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
            <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  />Flight </a></li>
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

      <div className=' mb-5 flex items-center justify-center text-center text-black text-4xl '>
                <div className='top-destination'>
                    <h1>42 tours found</h1>
                    {/* <div className='flex items-center justify-center text-center'>
                    <hr className='w-4/5  text-violet-700 text-xl ' />
                    </div> */}
                </div>
                </div>
                <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-3 col-md-3'> 
                 <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Filter by price</h5>
                      <hr />
                    </div>
                    <div>
                      <h5 className='text-lg text-violet-600'>Apply</h5>
                    </div>

                  </div> 
                 

                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Number of stops</h5>
                      <hr />
                    </div>
                    <div>
                      <div className='flex justify-between'>

                        <div className='flex gap-2'>
                         <input
                                type="checkbox"
                                id="customCheckbox"
                                name="customCheckbox"
                                value=""
                                className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                              />
                              <label className='font-medium' htmlFor="">
                              1 stop</label>

                        </div>
                        <div className='ml-28'>
                          <h5>20</h5>
                        </div>
                        <div></div>
                      </div>

                      <div className='flex justify-between'>

                                <div className='flex gap-2'>
                                <input
                                        type="checkbox"
                                        id="customCheckbox"
                                        name="customCheckbox"
                                        value=""
                                        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                                      />
                                      <label className='font-medium' htmlFor="">2 stop
                                      </label>

                                </div>
                                <div className='text-right ml-28'>
                                  <h5>14</h5>
                                </div>
                                <div></div>
                      </div>
                      <div className='flex justify-between'>

<div className='flex gap-2'>
<input
        type="checkbox"
        id="customCheckbox"
        name="customCheckbox"
        value=""
        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
      />
      <label className='font-medium' htmlFor="">3 stop

      </label>

</div>
<div className='text-right ml-28'>
  <h5>30</h5>
</div>
<div></div>
                      </div>

                      <div className='flex justify-between'>

                      <div className='flex gap-2'>
                      <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label className='font-medium' htmlFor="">Non-stop
                            </label>

                      </div>
                      <div className='text-right ml-7'>
                        <h5>22</h5>
                      </div>
                      
                      </div>

                        



                      
                    </div>
                  

                  </div>

                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Flight class
                      </h5>
                      <hr />
                    </div>
                    <div>
                    <div className='flex gap-2'>
<input
        type="checkbox"
        id="customCheckbox"
        name="customCheckbox"
        value=""
        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
      />
      <label className='font-medium' htmlFor="">Economy

      </label>
      <div className='text-right ml-7'>
                        <h5>22</h5>
                      </div>

</div> 
<div className='flex gap-2'>
        <input
        type="checkbox"
        id="customCheckbox"
        name="customCheckbox"
        value=""
        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
      />
      <label className='font-medium' htmlFor="">Business

      </label>
      <div className='text-right ml-7'>
                        <h5>22</h5>
                      </div>

</div>
                    


                          
                    </div>

                  </div>


                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Airlines
                      </h5>
                      <hr />
                    </div>
                    <div>
                      <div className='flex justify-between'>

                        <div className='flex gap-2'>
                         <input
                                type="checkbox"
                                id="customCheckbox"
                                name="customCheckbox"
                                value=""
                                className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                              />
                              <label className='font-medium' htmlFor="">
                              Quatar Airways</label>

                        </div>
                        <div className=''>
                          <h5>17</h5>
                        </div>
                        <div></div>
                      </div>

                      <div className='flex justify-between'>

                                <div className='flex gap-2'>
                                <input
                                        type="checkbox"
                                        id="customCheckbox"
                                        name="customCheckbox"
                                        value=""
                                        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                                      />
                                      <label className='font-medium' htmlFor="">Fly Amirates

                                      </label>

                                </div>
                                <div className='text-right '>
                                  <h5>14</h5>
                                </div>
                                <div></div>
                      </div>
                      <div className='flex justify-between'>

                        <div className='flex gap-2'>
                        <input
                                type="checkbox"
                                id="customCheckbox"
                                name="customCheckbox"
                                value=""
                                className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                              />
                              <label className='font-medium' htmlFor="">
                              Novo Air

                              </label>

                        </div>

                        <div className='text-right '>
                          <h5>62</h5>
                        </div>
                        <div></div>
                      </div>

                      <div className='flex justify-between'>

                      <div className='flex gap-2'>
                      <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label className='font-medium' htmlFor="">Air Asia
                            </label>

                      </div>
                      <div className='text-right '>
                        <h5>08</h5>
                      </div>
                      
                      </div>
                      <div className='flex justify-between'>

                      <div className='flex gap-2'>
                      <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label className='font-medium' htmlFor="">Singapore Airlines

                            </label>

                      </div>
                      <div className='text-right '>
                        <h5>12</h5>
                      </div>
                      
                      </div>

                        



                      
                    </div>
                  

                  </div>
                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Refundablenes
                      </h5>
                      <hr />
                    </div>
                    <div>
                      <div className='flex justify-between'>

                        <div className='flex gap-2'>
                         <input
                                type="checkbox"
                                id="customCheckbox"
                                name="customCheckbox"
                                value=""
                                className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                              />
                              <label className='font-medium' htmlFor="">
                              Yes</label>

                        </div>
                        <div className=''>
                          <h5>17</h5>
                        </div>
                        <div></div>
                      </div>

                      <div className='flex justify-between'>

                                <div className='flex gap-2'>
                                <input
                                        type="checkbox"
                                        id="customCheckbox"
                                        name="customCheckbox"
                                        value=""
                                        className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                                      />
                                      <label className='font-medium' htmlFor="">No

                                      </label>

                                </div>
                                <div className='text-right '>
                                  <h5>14</h5>
                                </div>
                                <div></div>
                      </div>
                      <div className='flex justify-between'>

                        <div className='flex gap-2'>
                        <input
                                type="checkbox"
                                id="customCheckbox"
                                name="customCheckbox"
                                value=""
                                className="w-4 h-4  mt-1 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                              />
                              <label className='font-medium' htmlFor="">
                              As per rules

                              </label>

                        </div>

                        <div className='text-right '>
                          <h5>62</h5>
                        </div>
                        <div></div>
                      </div>

                    
                        



                      
                    </div>
                  

                  </div>


              </div>
              <div className=' col-lg-9  col-md-6 gap-2'>

                <div className='rounded-lg border-2 row mb-2  '>
                  <div className='col-lg-8 p-2 flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={qatar1} alt="" />
                      </div>
                      <div className=" p-2 ">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="From" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>New York</h5>
                          <span className="text-sm">JFK - John F. Kennedy International...</span>
                        </div>
                      </div>
                      
                    </div>
                    <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="To" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>London</h5>
                          <span className="text-sm">JLCY, London city airpor</span>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <div className='col-lg-4 bg-violet-100 p-3'>
                    <div className=' '>
                      <div>
                        <h4 className='line-through text-gray-300'>$9,560</h4>
                        <div className='flex'>
                          <h3 className='font-medium'>$7,560</h3>
                          <p className='text-purple-700'>*20% OFF
                          </p>


                        </div>
                        <div>
                          <button className='py-1 rounded-md px-3 bg-purple-600 text-white'>Book Now</button>
                        </div>
                        <div>
                          < p className='text-sm font-medium'>*Discount applicable on some conditions</p>
                        </div>

                        <div>
                          <h5><a className='text-black no-underline' href=" ">Show more</a></h5>
                        </div>
                      </div>


                    </div>

                  </div>

                </div>

                <div className='rounded-lg border-2 row mb-2  '>
                  <div className='col-lg-8 p-2 flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={qatar1} alt="" />
                      </div>
                      <div className=" p-2 ">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="From" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>New York</h5>
                          <span className="text-sm">JFK - John F. Kennedy International...</span>
                        </div>
                      </div>
                      
                    </div>
                    <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="To" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>London</h5>
                          <span className="text-sm">JLCY, London city airpor</span>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <div className='col-lg-4 bg-violet-100 p-3'>
                    <div className=' '>
                      <div>
                        <h4 className='line-through text-gray-300'>$9,560</h4>
                        <div className='flex'>
                          <h3 className='font-medium'>$7,560</h3>
                          <p className='text-purple-700'>*20% OFF
                          </p>


                        </div>
                        <div>
                          <button className='py-1 rounded-md px-3 bg-purple-600 text-white'>Book Now</button>
                        </div>
                        <div>
                          < p className='text-sm font-medium'>*Discount applicable on some conditions</p>
                        </div>

                        <div>
                          <h5><a className='text-black no-underline' href=" ">Show more</a></h5>
                        </div>
                      </div>


                    </div>

                  </div>

                </div>

                <div className='rounded-lg border-2 row mb-2 '>
                  <div className='col-lg-8 p-2 flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={qatar1} alt="" />
                      </div>
                      <div className=" p-2 ">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="From" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>New York</h5>
                          <span className="text-sm">JFK - John F. Kennedy International...</span>
                        </div>
                      </div>
                      
                    </div>
                    <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="To" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>London</h5>
                          <span className="text-sm">JLCY, London city airpor</span>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <div className='col-lg-4 bg-violet-100 p-3'>
                    <div className=' '>
                      <div>
                        <h4 className='line-through text-gray-300'>$9,560</h4>
                        <div className='flex'>
                          <h3 className='font-medium'>$7,560</h3>
                          <p className='text-purple-700'>*20% OFF
                          </p>


                        </div>
                        <div>
                          <button className='py-1 rounded-md px-3 bg-purple-600 text-white'>Book Now</button>
                        </div>
                        <div>
                          < p className='text-sm font-medium'>*Discount applicable on some conditions</p>
                        </div>

                        <div>
                          <h5><a className='text-black no-underline' href=" ">Show more</a></h5>
                        </div>
                      </div>


                    </div>

                  </div>

                </div>

                <div className='rounded-lg border-2 row mb-2 '>
                  <div className='col-lg-8 p-2 flex justify-center items-center'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={qatar1} alt="" />
                      </div>
                      <div className=" p-2 ">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="From" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>New York</h5>
                          <span className="text-sm">JFK - John F. Kennedy International...</span>
                        </div>
                      </div>
                      
                    </div>
                    <div>
                        <form className="flex justify-between mb-2" action="">
                          <input className=" text-gray-400 w-100" type="text" value="To" />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className='font-semibold'>London</h5>
                          <span className="text-sm">JLCY, London city airpor</span>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <div className='col-lg-4 bg-violet-100 p-3'>
                    <div className=' '>
                      <div>
                        <h4 className='line-through text-gray-300'>$9,560</h4>
                        <div className='flex'>
                          <h3 className='font-medium'>$7,560</h3>
                          <p className='text-purple-700'>*20% OFF
                          </p>


                        </div>
                        <div>
                          <button className='py-1 rounded-md px-3 bg-purple-600 text-white'>Book Now</button>
                        </div>
                        <div>
                          < p className='text-sm font-medium'>*Discount applicable on some conditions</p>
                        </div>

                        <div>
                          <h5><a className='text-black no-underline' href=" ">Show more</a></h5>
                        </div>
                      </div>


                    </div>

                  </div>

                </div>


                
                            
                


              </div>

            </div>

          </div>

        </div>
      </section>

      <Email/>



    </div>
  )
}

export default Flights
