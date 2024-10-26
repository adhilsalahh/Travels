import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
import Email from '../Home/Email'
import Carousels from './Carousels';
import IndividualIntervalsExample from './Carousels';
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import aboutbg from '../image/abour_right.177c8485.png'
import smallbanner from   '../image/small_banner.fc6f89cb.png'
import bigbanner from   '../image/big_banner.4d37afd7.png'
import counter from '../image/counter_bg.55b8b540.png'
import review1 from '../image/review1.3ce6a1e0.png'
import review2 from '../image/review2.b4560f69.png'
 import review3 from '../image/review3.9a2ee35e.png'

function About() {
  return (
    <div>
      <section className='mb-16'>
         <div  className="bg-cover bg-main flex justify-center items-center"  style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="text-center text-white">
              <h1 className="font-serif text-4xl flex text-center justify-center items-center">About us
              </h1>
              <ul className=" text-lg flex text-center justify-center gap-3 items-center">
                  <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
                  <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  />About </a></li>
              </ul>
            </div>
         </div>
      </section>
      <section className='container'>
      <div className='flex flex-col md:flex-row'>
  <div className='xl:w-1/2 lg:w-1/2 md:w-full md:mr-0 sm:w-full mb-4'> 
    <h4>About us</h4>
    <h2 className='text-4xl lg:text-2xl md:text-xl md:mb-1 mb-4'>
      We Are The World Best Travel Agency Company Since 2000
    </h2>
    <p className='text-slate-400 md:pr-2 pr-16'>
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
    </p>
    <p className='pr-16 md:pr-2 text-slate-400'>
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr
    </p>

    <div>
    <button className='py-3 px-4 bg-violet-500 rounded  '><a className='no-underline text-white' href="">Find tours  </a></button>

    </div>
  </div>
  <div className='xl:w-1/2 lg:w-1/2 md:w-full sm:w-full md:flex justify-center items-center'>
    <img className='' src={aboutbg} alt="" />
  </div>
</div>


      </section>

      <section className='mx-4 mt-5 mb-5'>
        <div className='flex-col gap-2 flex md:flex-row'>
      
          <div className='xl:w-1/5  h-96'>
                <img className='h-full max-w-full' src={smallbanner} alt="" />
          </div>
     
          <div className='xl:w-3/5 h-96 relative'> 
          
          <img className='w-full h-full'  src={bigbanner} alt="" />
          
    
          <div className='absolute inset-0 flex items-center justify-center p-7 text-left text-white'>
                    <div className='text-center'>
                     <h4>Enjoy 20% discount</h4>
                     <h2>Thailand couple tour</h2>


                        <button className='py-3 px-4 bg-violet-500 rounded  '><a className='no-underline text-white' href="">  Holiday deals</a></button>
                    </div>
                    {/* Additional content here */}
          </div>

        
          </div>
        </div>
      </section>
      <section>
  <div className="bg-cover bg-main flex justify-center items-center" style={{ backgroundImage: `url(${counter})`, backgroundSize: 'cover', height: '110vh' }}>
    <div className='text-center text-white w-4/5 sm:w-full md:w-3/5 lg:w-2/5'>
      <h2 className='text-xl sm:text-base md:text-2xl lg:text-2xl mt-2'>
        Have you any question? Get A Consultation
      </h2>
      <p className='text-sm sm:text-xs md:text-base lg:text-lg px-4 sm:px-2 md:px-4 lg:px-6'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</section>

<section className='container mt-5'>
          <div>
              <div className=' mt-2 mb-20 top-destination flex items-center text-black justify-center  text-center'>
                                      <h2 className='pb-2 border-b-2 border-violet-700'>Customer review</h2>      

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
  )
}

export default About
 