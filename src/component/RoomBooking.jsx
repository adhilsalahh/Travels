import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
// Import the specific icon (fa-tv) from free-solid-svg-icons
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell,faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
// import Carousel from 'react-bootstrap/Carousel';
import '../component/Home.css'; 
import  { useState } from 'react';
import Email from '../Home/Email';

import review1 from '../image/review1.3ce6a1e0.png'

import review2 from '../image/review2.b4560f69.png'
 import review3 from '../image/review3.9a2ee35e.png'
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line


function RoomBooking() {
  return (
    <div>
            <div>
      <section className='mb-16'>
        <div 
          className="bg-cover bg-main flex justify-center items-center" 
          style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
        >
          <div className="text-center text-white">
            <h1 className="font-serif text-4xl flex text-center justify-center items-center">
            Hotel details            </h1>
            <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
            <li><Link className='no-underline text-gray-300 ' to="/hotels"><span><FontAwesomeIcon className='w-2' icon={faCircle}  /> </span> Hotel</Link></li>
              <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  /> Hotel Details</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='flex justify-between'>
                  <div>
                    <h3>Double deluxe room</h3>
                    <h6 className='mt-3'>
                      {/* <FontAwesomeIcon icon={} style={{ color: "black" }} />  */}
                      Los angeles
                    </h6>
                  </div>
                  <div>
                    <h4 className='text-purple-600'>Excellent</h4>
                    <h6 className='text-purple-600 mb-1'>4.8/5</h6>
                    <p>(1214 reviews)</p>
                  </div>
                </div>

                <div className='p-2'>
                  <hr />
                  <div className='row'>
                    <div className='col-lg-3'>
                      <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon className='text-3xl' icon={faTv} />
                        </div>
                        <div>
                          <h5 className='mt-2 mb-0'> Duration </h5>
                          <p> 10 days</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon className='text-3xl' icon={faTv} />
                        </div>
                        <div>
                          <h5 className='mt-2 mb-0'>Tour type</h5>
                          <p>Group tour</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon className='text-3xl' icon={faDumbbell} />
                        </div>
                        <div>
                          <h5 className='mt-2 mb-0'>Group size</h5>
                          <p>50 people</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      <div className='flex gap-3'>
                        <div className='flex justify-center items-center'>
                          <FontAwesomeIcon className='text-3xl' icon={faWifi} />
                        </div>
                        <div>
                          <h5 className='mt-2 mb-0'>Location</h5>
                          <p>Amazon rain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div>

            


                </div>

                <div className='shadow-lg mb-12'>
                  <div>
                    <div className='p-3'>
                            <div className='top-destination flex items-center text-black justify-left  text-left'>
                                <h4 className='pb-2 border-b-2 border-violet-700'>Overview </h4>      

                            </div>
                            <div>
                              <p className='text-lg'>
                                 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
                              </p>
                              <p  className='text-lg '>
                              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                              </p>
                              <ul className='list-disc text-base font-normal mb-3 pl-3'>
                                <li className='mb-3'>Buffet breakfast as per the Itinerary</li>
                                <li className='mb-3'>isit eight villages showcasing Polynesian culture</li>
                                <li className='mb-3'>Complimentary Camel safari, Bonfire, and Cultural Dance at Camp</li>
                                <li className='mb-3'>All toll tax, parking, fuel, and driver allowances</li>
                                <li className='mb-3'>Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.</li>
                              </ul>
                            </div>


                    </div>
                  </div>
                </div>

                <div className='mb-12 shadow-lg'>
                  <div className='p-2'>
                      <div className='top-destination flex items-center text-black justify-left  text-left'>
                                      <h4 className='pb-2 border-b-2 border-violet-700'>Included/Excluded </h4>      

                      </div>
                      <div>
                             
                              <p  className='text-lg '>
                              Stet clitaStet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.                              </p>
                              <ul className='list-disc text-base font-normal mb-3 pl-3'>
                                <li className='mb-3'>Buffet breakfast as per the Itinerary</li>
                                <li className='mb-3'>isit eight villages showcasing Polynesian culture</li>
                                <li className='mb-3'>Complimentary Camel safari, Bonfire, and Cultural Dance at Camp</li>
                                <li className='mb-3'>All toll tax, parking, fuel, and driver allowances</li>
                                <li className='mb-3'>Comfortable and hygienic vehicle (SUV/Sedan) for sightseeing on all days as per the itinerary.</li>
                              </ul>
                            </div>

                    </div>
                 
                </div>
                <div className='mb-12 shadow-lg'> 
                  <div className='p-3'>
                      <div className='  top-destination items-center flex justify-start text-black justify-left  text-left'>
                                      <h4 className='pb-2 border-b-2 border-violet-700'>Tours location </h4>      
                                     
                      </div>
                      <div className='p-3 flex justify-center items-center
                                      '>
                                        <iframe
                                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722544.760679667!2d51.30567682231782!3d24.336123326945405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1729575730178!5m2!1sen!2sin"
                                          width="600"
                                          height="450"
                                          style={{ border: 0 }}
                                          allowFullScreen=""
                                          loading="lazy"
                                          referrerPolicy="no-referrer-when-downgrade"
                                          title="Google Map"
                                        ></iframe>
                                      </div>
                  </div>
                </div>


                <div>

                    <div className='mb-12 shadow-lg'> 
                      <div className='p-3'>
                          <div className='top-destination flex items-center text-black justify-left  text-left'>
                                              <h4 className='pb-2 border-b-2 border-violet-700'>Write your review </h4>      

                          </div>

                          <div className='mt-4  row'>
                            <div className='col-lg-6 rounded-md'>
                              <form action="">
                                <input  className='p-3 w-full border-dashed border-2 bg-cyan-50' type="text" placeholder='Enter full name ' />
                              </form>

                            </div>
                            <div className='col-lg-6 rounded-md'>
                            <form action="">
                                <input  className='p-3 w-full border-dashed border-2 bg-cyan-50' type="text" placeholder='Enter emaill address ' />
                              </form>

                            </div>

                            <div className=' mt-5 col-lg-12'>
                              <form action=""> 
                                  <textarea   className='p-3 w-full h-40 border-dashed border-2 bg-cyan-50' name="" placeholder='Write your comments' id=""></textarea>
                              </form>
                            </div>

                            <div className='mt-3 flex justify-center items-center'>
                                  <button className='rounded-md  text-white text-lg font-medium pl-8 pt-3 pb-3 pr-8 bg-purple-600'> Post comment </button>
                            </div>

                          </div>
           
                          
                      </div>
                    </div>


                </div>

                
              </div>

              

              <div className='col-lg-4'>

                <div className=''>

                <div className='mb-12 shadow-lg rounded-md '> 
                  <div className='p-4'>
                     <div className='top-destination flex items-center text-black justify-left  text-left'>
                                      <h5 className='pb-2 border-b-2 t border-violet-700'>Price</h5>


                           </div>

                           <div>

                            <h4 className='text-purple-600'><span className='line-through text-black text-base'>$ 35,500</span > $ 30,500 <span className='text-gray-400 text-sm'>/Per serson</span> </h4>
                           </div>

                      <div className='mt-4'>
                        <div className='  top-destination flex items-center text-black justify-left  text-left'>
                                        <h5 className='pb-2 border-b-2 t border-violet-700'>Hotel facilities</h5>
                        </div>
                        <div className='mt-2'>
                            <div>
                                
                                <ul className='list-disc text-base  font-normal mb-3 pl-3'>
                                <li className='mb-3'>Buffet breakfast as per the Itinerary</li>
                                <li className='mb-3'>Visit eight villages showcasing Polynesian culture</li>
                                <li className='mb-3'>Complimentary Camel safari, Bonfire,</li>
                                <li className='mb-3'>All toll tax, parking, fuel, and driver allowances</li>
                                <li className='mb-3'>Comfortable and hygienic vehicle </li>
                                </ul>
                            </div>

                            
                        </div>


 
                      </div>
                  </div>
                  <div>
                    <button className=' rounded-md  w-full p-3 bg-purple-600'><a className='no-underline text-white' href=""> Book Now</a></button>
                  </div>

                </div>

           
                <div className='mb-12 shadow-lg rounded-md'>
                  <div className='p-4'>
                  <div className=' mt-2 top-destination flex items-center text-black justify-left  text-left'>
                                      <h4 className='pb-2 border-b-2 border-violet-700'>Why choose us</h4>      

                      </div>
                           <div>
                             
                             <ul className='list-disc text-base font-normal mb-3 pl-3'>
                               <li className='mb-3'>Buffet breakfast as per the Itinerary</li>
                               <li className='mb-3'>Visit eight villages showcasing Polynesian culture</li>
                               <li className='mb-3'>Complimentary Camel safari, Bonfire,</li>
                               <li className='mb-3'>All toll tax, parking, fuel, and driver allowances</li>
                               <li className='mb-3'>Comfortable and hygienic vehicle </li>
                             </ul>
                           </div>

                  </div>
                    
                </div>

                </div>
                {/* Add additional content for the right section here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container'>
          <div>
              <div className=' mt-2 mb-20 top-destination flex items-center text-black justify-left  text-left'>
                                      <h4 className='pb-2 border-b-2 border-violet-700'>All review</h4>      

              </div>

        <div className='row gap-4 flex justify-center'>
  <div className='col-lg-4 rounded shadow-lg' style={{ width: '340px' }}>
    <div className='flex justify-around'>
      <h6 className='mt-3'>08 Dec, 2021</h6>
      <div className='text-center' style={{ margin: '-30px' }}>
        <img
          className='inline-block h-20 w-20 rounded-full ring-2 ring-white'
          src={review1}
          alt=''
        />
        <h4 className='mb-0 mt-1 text-lg'>Manresh Chandra</h4>
      </div>
      <h6 className='mt-3'>Excellent</h6>
    </div>
    <div className='mt-10 px-3'>
      <p>
        "Loved the overall tour for all 6 days covering Jaipur, Jodhpur, and Jaisalmer. Worth your money for sure. Thanks. Driver was very good, polite, and provided safe driving for all 6 days. On-time pickup and drop overall. Thanks for it."
      </p>
    </div>
  </div>

  <div className='col-lg-4 rounded shadow-lg' style={{ width: '340px' }}>
    <div className='flex justify-around'>
      <h6 className='mt-3'>08 Dec, 2021</h6>
      <div className='text-center' style={{ margin: '-30px' }}>
        <img
          className='inline-block h-20 w-20 rounded-full ring-2 ring-white'
          src={review3}
          alt=''
        />
        <h4 className='mb-0 mt-1 text-lg'>Michel falak</h4>
      </div>
      <h6 className='mt-3'>Excellent</h6>
    </div>
    <div className='mt-10 px-3'>
      <p>
        "Loved the overall tour for all 6 days covering Jaipur, Jodhpur, and Jaisalmer. Worth your money for sure. Thanks. Driver was very good, polite, and provided safe driving for all 6 days. On-time pickup and drop overall. Thanks for it."
      </p>
    </div>
  </div>

  <div className='col-lg-4 rounded shadow-lg' style={{ width: '340px' }}>
    <div className='flex justify-around'>
      <h6 className='mt-3'>08 Dec, 2021</h6>
      <div className='text-center' style={{ margin: '-30px' }}>
        <img
          className='inline-block h-20 w-20 rounded-full ring-2 ring-white'
          src={review2}
          alt=''
        />
        <h4 className='mb-0 mt-1 text-lg'>Michel falak</h4>
      </div>
      <h6 className='mt-3'>Excellent</h6>
    </div>
    <div className='mt-10 px-3'>
      <p>
        "Loved the overall tour for all 6 days covering Jaipur, Jodhpur, and Jaisalmer. Worth your money for sure. Thanks. Driver was very good, polite, and provided safe driving for all 6 days. On-time pickup and drop overall. Thanks for it."
      </p>
    </div>
  </div>
</div>



          </div>


      </section>

      <Email/>
    </div>



      
    </div>
  )
}

export default RoomBooking