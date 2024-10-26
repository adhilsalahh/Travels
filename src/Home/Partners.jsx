import React from 'react'
import partner1 from '../image/1.1b03af65.png'
import partner2 from '../image/2.1906a863.png'
import partner3 from '../image/3.564c3fc6.png'
import partner4 from '../image/4.7c486ccb.png'
import partner5 from '../image/5.c88c10d5.png'
import partner6 from '../image/6.50639b22.png'
import partner7 from '../image/7.7c486ccb.png'
import partner8 from '../image/8.1b03af65.png'

function Partners() {
  return (
    <div>
        <section className='mt-8
         container'>
        <div className=' mb-5 flex items-center justify-center text-center text-black text-4xl '>
                <div className='top-destination'>
                    <h1>Our partners</h1>
                    {/* <div className='flex items-center justify-center text-center'>
                    <hr className='w-4/5  text-violet-700 text-xl ' />
                    </div> */}
                </div>
                </div>
            
            <div className='row'>
                <div className='col-lg-12'>
                    <div className='flex flex-col sm:flex-row  justify-between items-center '>
                        <div className="a"> <a href=""> <img src={partner1} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner2} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner3} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner4} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner5} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner6} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner7} alt="" />   </a> </div>
                        <div className="a"> <a href=""> <img src={partner8} alt="" />   </a> </div>
                    </div>


                </div>

            </div>

        </section>
       
      
    </div>
  )
}

export default Partners
