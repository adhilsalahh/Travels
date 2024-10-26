import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import only once
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import icons in one line
import '../component/Home.css'; // Ensure you have custom styles here if needed

// import { data } from '../component/mapping';
import { Tour } from './mapping';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Toursfound() {
  return (
    <div>
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
                      <div>
                        <h5 className='text-lg'>Filter by Review</h5>
                        <hr />
                      </div>
                         <div className="flex gap-3 mb-2 items-center">
                            <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-0 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label htmlFor="customCheckbox" className="flex gap-2 items-center">
                              {/* Star icons */}
                              <div className="flex gap-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                              </div>
                            </label>
                          </div>
                          <div className="flex gap-3 mb-2 items-center">
                            <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4 mt-0 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label htmlFor="customCheckbox" className="flex gap-2 items-center">
                              {/* Star icons */}
                              <div className="flex gap-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />


                          
                              </div>
                            </label>
                          </div> <div className="flex mb-2 gap-3 items-center">
                            <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-0 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label htmlFor="customCheckbox" className="flex gap-2 items-center">
                              {/* Star icons */}
                              <div className="flex gap-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                              </div>
                            </label>
                          </div>
                          <div className="flex gap-3 mb-2 items-center">
                            <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-0 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label htmlFor="customCheckbox" className="flex gap-2 items-center">
                              {/* Star icons */}
                              <div className="flex gap-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                              </div>
                            </label>
                          </div>
                          <div className="flex gap-3  items-center">
                            <input
                              type="checkbox"
                              id="customCheckbox"
                              name="customCheckbox"
                              value=""
                              className="w-4 h-4  mt-0 cursor-pointer accent-purple-600" // 30px = 6 * 4 = 24px
                            />
                            <label htmlFor="customCheckbox" className="flex gap-2 items-center">
                              {/* Star icons */}
                              <div className="flex gap-1 mb-2">
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                                <FontAwesomeIcon icon={faStar} className="text-purple-500 w-4 h-4" />
                              </div>
                            </label>
                          </div>
                          
                    </div>
                  </div>

                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Tour type</h5>
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
        <label className='' htmlFor="">Ecotourism</label>

  </div>
  <div className='text-right ml-8'>
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
                                      <label className='' htmlFor="">Escorted tour
                                      </label>

                                </div>
                                <div className='text-right ml-15'>
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
      <label className='' htmlFor="">Family trips
      </label>

</div>
<div className='text-right ml-20'>
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
                            <label className='' htmlFor="">Group tour
                            </label>

                      </div>
                      <div className='text-right ml-8'>
                        <h5>20</h5>
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
                              <label className='' htmlFor="">City trips
                              </label>

                        </div>
                        <div className='text-right ml-8'>
                          <h5>41</h5>
                        </div>
                        </div>



                      
                    </div>
                  

                  </div>

                  <div className=' border p-4 mb-7'>
                    <div>
                      <h5 className='text-lg'> Facilities</h5>
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
                              <label className='' htmlFor="">Gymnasium
                              20
                              </label>
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
                              <label className='' htmlFor="">Mountain Bike
14

                              </label>
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
                              <label className='' htmlFor="">
Wifi
62

                              </label>
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
                              <label className='' htmlFor="">Aerobics Room
                              08
                              </label>
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
                              <label className='' htmlFor="">Golf Cages
                              12
                              </label>
                        </div>                                                   
                      </div>


                          
                    </div>

                  </div>

              </div>
              <div className=' col-lg-9 col-md-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                
                  {Tour.map((datas) =>(
                  <div className='border rounded  ' key={datas.name}> 
                      <div className='card-home'>
                            <div className=' overflow-hidden rounded relative'>
                                <img
                                    src={datas.image}
                                    className='w-full rounded transform transition-transform duration-300 hover:scale-110'
                                    alt={datas.name}
                                />
                              <div className='absolute bottom-3 left-3 right-0 flex gap-1 text-white items-center'>
                                    <FontAwesomeIcon icon={faLocationDot} style={{ color: "#ffffff" }} />
                                    <p className='p-0 mb-0'>{datas.location}</p>
                                </div>
                            </div>
                            <div className='p-3  '>
                                <div className=' text-left'>
                                    <h4 className='truncate text-xl'>{datas.name}</h4>
                                    <div className='flex text-xs'>
                                        <h6 >{datas.description1}</h6>
                                        <h6 >{datas.description2}</h6>
                                    </div>
                                    <div className='flex gap-2'>
                                    
                                        <h4 className='text-xl'>{datas.price}</h4>
                                        <p className=''>{datas.price1}</p>
                                    </div>

                                </div>
                                

                            </div>
                        
                        </div>

                  </div>


                  ))}

                </div>                
                


              </div>

            </div>

          </div>

        </div>
      </section>
        
      
    </div>
  )
}

export default Toursfound
