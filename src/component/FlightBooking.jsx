import React from 'react'
import banner1 from '../image/common-banner.6ccf3e41.png';
import Email from '../Home/Email'
import Carousels from './Carousels';
import IndividualIntervalsExample from './Carousels';
import { Link } from 'react-router-dom';
import {faCircle } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';

// import Corosels from '../component/Carousels'
function FlightBooking() {
  return (
    <div>
        <div >

<section className='mb-16'>
   <div 
     className="bg-cover bg-main flex justify-center items-center" 
     style={{ backgroundImage: `url(${banner1})`, backgroundSize: 'cover', height: '100vh' }}
   >
     <div className="text-center text-white">
       <h1 className="font-serif text-4xl flex text-center justify-center items-center">
       Flight submission
       </h1>
       <ul className=" text-lg flex text-center justify-center gap-3 items-center">
          <li><Link className='no-underline text-gray-300' to="/">Home</Link></li>  
            <li><Link className='no-underline text-gray-300 ' to="/flights"><span><FontAwesomeIcon className='w-2' icon={faCircle}  /> </span> Flight </Link></li>
              <li><a className='no-underline text-white ' href=""> <FontAwesomeIcon className='w-2' icon={faCircle}  />Flight Booking </a></li>
            </ul>
     </div>
   </div>
 </section>
 <section className='container'>
 <div className='top-destination flex items-center text-black justify-left  text-left'>
                                           <h4 className='pb-2 border-b-2 border-violet-700'>Passenger information </h4>      

   </div>
 
 
   <div className='row'>
     <div className='col-lg-8'>
       <div className='rounded-md mb-12 shadow-lg'> 
         <div className='p-4'>
           <div>
             <form className='row gap-4' action="">
                           <input  className= 'col-lg-5 p-3 w-full  border-dashed border-2' type="text" placeholder='First name*' />
                           <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="text" placeholder='First name*' />
                           <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="text" placeholder='Email addres (optional)' />
                           <input  className= 'col-lg-5 p-3  w-full  border-dashed border-2' type="text" placeholder='Mobile number*' />
                           <input  className= 'col-lg-10 p-3   w-full  border-dashed border-2' type="text" placeholder='Street address' />
                           <input  className= 'col-lg-5 p-3   w-full  border-dashed border-2' type="text" placeholder='Apartment,suit,house no (optional)' />
                           <select className='col-lg-5 p-3   w-full  border-dashed border-2' name="" id="">
                               <option value="">State</option>
                               <option value="">New York</option>
                               <option value="">Barisal</option>
                               <option value="">Nator</option>
                               <option value="">Joybangla</option>
                             </select>                  <select className='col-lg-5 p-3   w-full  border-dashed border-2' name="" id="">
                               <option value="">State</option>
                               <option value="">New York</option>
                               <option value="">Barisal</option>
                               <option value="">Nator</option>
                               <option value="">Joybangla</option>
                             </select>
                             <select className='col-lg-5 p-3   w-full  border-dashed border-2' name="" id="">
                               <option value="">State</option>
                               <option value="">New York</option>
                               <option value="">Barisal</option>
                               <option value="">Nator</option>
                               <option value="">Joybangla</option>
                             </select>
             </form>
           </div>
         </div>
       </div>

       <div>
         <div className=' mb-3 top-destination flex items-center text-black justify-left  text-left'>
                                             <h4 className='pb-2 border-b-2 border-violet-700'>Payment method</h4>      

         </div>

         <div className='mb-12 shadow-lg'> 
           <div className='p-4'>
             <div className='mb-3'>
               <input className='rounded w-4 mr-2 h-4' type="radio" />
               <label className='text-xl font-medium'  htmlFor=""> Payment by card</label>
             </div>
             <div className='mb-3'>
               <input className='rounded w-4 mr-2 h-4' type="radio" />
               <label className='text-xl font-medium'  htmlFor=""> Paypal</label>
             </div>
             <div className='mb-3'>
               <input className='rounded mr-2 w-4 h-4' type="radio" />
               <label className='text-xl font-medium' htmlFor=""> Payoneer</label>
             </div>
             <div className='mb-3'>
               <input className='rounded mr-2 w-4 h-4' type="radio" />
               <label className='text-xl font-medium' htmlFor=""> Cash on delivery</label>
             </div>
           </div>
         </div>
         

       </div>

       <div>
         <input className='mr-3' type="checkbox" />
         <label htmlFor=""> I read and accept all <a className='no-underline text-violet-600' href="">Terms and conditios</a> </label>
       </div>

       <div className='mt-2'>
         <button className='rounded bg-purple-600 py-2 px-4'><a className='text-white  no-underline' href="">Submit</a></button>
       </div>
     </div>

     <div className='col-lg-4'>
       <div className='mb-12 shadow-lg rounded-md '> 
         <div className='p-3'>
             <div className='top-destination flex items-center text-black justify-left  text-left'>
               <h4 className='pb-2 border-b-2 border-violet-700'>Standard package44</h4>      
             </div>
             <div className='flex gap-4 mb-3 '>
               <div><h4 className='text-lg font-medium '>Valid from</h4> <h6 className='text-gray-400'>01 Feb 2022</h6></div>
               <div><h4 className='text-lg font-medium '>Valid till
               </h4> <h6 className='text-gray-400'>15 Feb 2022</h6></div>
             </div>
             <div>                      
               <div className='top-destination flex items-center text-black justify-left  text-left'>
                 <h5 className='pb-2 border-b-2 t border-violet-700'>Package details</h5>
               </div>
               <div>
                 <div>                            
                  <ul className='list-disc text-base font-normal mb-3 pl-3'>
                    <li className='mb-2'>Buffet breakfast as per the Itinerary</li>
                    <li className='mb-2'>Visit eight villages showcasing Polynesian culture</li>
                    <li className='mb-2'>Complimentary Camel safari, Bonfire,</li>
                    <li className='mb-2'>All toll tax, parking, fuel, and driver allowances</li>
                    <li className='mb-2'>Comfortable and hygienic vehicle </li>
                  </ul>
                 </div>
                 <div className='top-destination flex items-center text-black justify-left  text-left'>
                                 <h5 className='pb-2 border-b-2 t border-violet-700'>Price</h5>


                 </div>                     
                 <div>
                   <h4 className='text-purple-600'><span className='line-through text-black text-base'>$ 35,500</span > $ 30,500 <span className='text-gray-400 text-sm'>/Per serson</span> </h4>
                 </div>
               </div>
             </div>
         </div>
         {/* <div>
           <button className=' rounded-md  w-full p-3 bg-purple-600'><a className='no-underline text-white' href=""> Select offer</a></button>
         </div> */}

       </div>


       <div>
       <div className='mb-12 shadow-lg rounded-md '> 
         <div className='p-3'> 
           <div className='top-destination flex items-center text-black justify-left  text-left'>
               <h4 className='pb-2 border-b-2 border-violet-700'>Travel date</h4>      
             </div>
             <div>
               <h6 className='font-normal mt-3 mb-3'>Edit Date</h6>
               <input className='p-3 w-full  border-dashed border-2'  type="date" />
             </div>
             <div className='top-destination mt-3 flex items-center text-black justify-left  text-left'>
               <h4 className='pb-2 border-b-2 border-violet-700'>Tourist</h4>      
             </div>
             <div className='mt-3'>
               <div>
                 <p className='mb-0.5 font-semibold'>Adult</p>

               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'>12y+</p>
                 <p className='mb-0.5'>01</p>
               </div>
               <hr />

             </div>
             <div className='mt-3'>
               <div>
                 <p className='mb-0.5 font-semibold'>Children</p>

               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'>2 - 12 years</p>
                 <p className='mb-0.5'>01</p>
               </div>
               <hr />

             </div>
             <div className='mt-3'>
               <div>
                 <p className='mb-0.5 font-semibold'>Infant</p>

               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'>Below 2 years+</p>
                 <p className='mb-0.5'>01</p>
               </div>
               <hr />

             </div>
             <div className='mt-3'>
               
               <div className='flex justify-end '>
                 <h6><a className='no-underline text-purple-600 ' href="">Edit person</a></h6>
                 
               </div>
            

             </div>
         </div>
       </div>

       <div>
         <div className='mb-12 shadow-lg rounded-md '> 
           <div className='p-3'> 

            <div className='top-destination flex items-center text-black justify-left  text-left'>
               <h4 className='pb-2 border-b-2 border-violet-700'>Coupon code</h4>      
             </div>
             <form className='mt-3' action="">
               <input className='p-3 w-full  border-dashed border-2' type="text" placeholder='Enter coupon code ' />
             </form>
             <div>
                  <div className='mt-3'>
           <button className=' rounded-md py-2 px-4  bg-purple-600'><a className='no-underline text-white text-lg' href=""> Apply Voucher</a></button>
         </div>

             </div>

           </div>
         </div>
       </div>

       <div>
         <div className='mb-12 shadow-lg rounded-md '> 
          <div className='p-3'> 
             <div className='top-destination flex items-center text-black justify-left  text-left'>
               <h4 className='pb-2 border-b-2 border-violet-700'>Booking amount</h4>      
             </div>

             <div>
             <div className='flex justify-between '>
                 <p className='mb-0.5'>Adult Price x 1
                 </p>
                 <p className='mb-0.5'>$40,000.00</p>
               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'>Discount

                 </p>
                 <p className='mb-0.5'>-10%</p>
               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'>Tax
                 </p>
                 <p className='mb-0.5'>5%
                 </p>
               </div>
               <hr />
              
               <div className='flex justify-between '>
                 <p className='mb-0.5'>Subtotal
                 </p>
                 <p className='mb-0.5'>$38,000.00
                 </p>
               </div>
               <div className='flex justify-between '>
                 <p className='mb-0.5'><span className='text-purple-600'> Remove</span>
                 Coupon code (OFF 5000)
                 </p>
                 <p className='mb-0.5'>$5,000.00
                 </p>

               </div>
               <hr />
               <div className='flex justify-between '>
                 <h6 className='mb-0.5 font-medium'>
                 Total Amount

                 </h6>
                 <h6 className='mb-0.5 font-medium'>$33,000.00

                 </h6>

               </div>



             </div>


         </div>
         </div>
       </div>


           
         
       </div>

     </div>          
   </div>


     

   
   
 

  
   
 </section>

{/* <IndividualIntervalsExample/> */}
 <Email/>
 
</div>
      
    </div>
  )
}

export default FlightBooking
