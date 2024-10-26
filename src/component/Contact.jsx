import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
import Email from '../Home/Email'
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import Mappus from './Mappus';
// import { COntactus } from './mapping';

function Contact() {
  return (
    <div>
        <section className='mb-16'>
         <div  className="bg-cover bg-main flex justify-center items-center"  style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}>
            <div className="text-center text-white">
              <h1 className="font-serif text-4xl flex text-center justify-center items-center">About us
              </h1>
              <ul className=" text-lg flex text-center justify-center gap-3 items-center">
                  <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
                  <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  />Contact </a></li>
              </ul>
            </div>
         </div>
      </section>
      <Mappus/>
      <section className='container mt-16'>

      <div className=' mb-5 flex items-center justify-center text-center text-black text-4xl '>
          <div className='top-destination'>
            <h1>Leave us a message</h1>
            {/* <div className='flex items-center justify-center text-center'>
              <hr className='w-4/5  text-violet-700 text-xl ' />
            </div> */}
          </div>
        </div>
        
        <div className='flex justify-center items-center'>
          <div className='w-8/12'>
           <div className='rounded-md  mb-12 shadow-lg'> 
              <div className='p-4'>
                <div>
                  <form className='row flex justify-center items-center gap-4' action="">
                                <input  className= 'col-lg-5 p-3 w-full  border-dashed border-2' type="text" placeholder='First name*' />
                                <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="text" placeholder='First name*' />
                                <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="text" placeholder='Email addres (optional)' />
                                <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="number" placeholder='Mobile number*' />
                                <textarea   className='col-lg-10 w-11/12  p-3  h-40 border-dashed border-2' name="" placeholder='Message' id=""></textarea>


                                
                  </form>
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

export default Contact
