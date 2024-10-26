import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to import Bootstrap Icons

function Email() {
  return (
    <div>
      <section className='mt-20 bg-cyan-50'>
        <div className="container">
          <div className="row p-11">
            {/* Left Column */}
            <div className="col-12 col-lg-7  flex flex-col sm:flex-row gap-3">
              <div>
                <i className="bi text-violet-600    bi-envelope-open" style={{ fontSize: '6rem' }}></i>
              </div>
              <div className='flex justify-center items-center'>
                <div >

                   
                    <h4 className='text-lg mt-8'>Get the latest news and offers</h4>
                    <h2 className=' '>Subscribe to our newsletter</h2>

                </div>
               
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-12 col-lg-5">
                <div className=' mt-12'>
                        <div className='row '>
                            <input className='col-lg-8 col-md-8 col-sm-8  p-3 w-11/12 border-dashed border-2 ' type="Email" placeholder='Enter your mail address' />

                            <button className= ' col-lg-4 col-md-4 col-sm-4 rounded bg-violet-600'>
                            <label className='text-xl   text-white' htmlFor="">Subscribe</label>
                            </button>
                        </div>

                </div>
               
              {/* Add more content here as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Email;
