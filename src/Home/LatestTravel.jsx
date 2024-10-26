import React from 'react'
import{latest} from '../component/mapping'
import big2 from '../image/new-big.23a2ece4 (1).png'
import '../component/Home.css'; // Ensure you have custom styles here if needed
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LatestTravel() {
  return (
    <div>
      
      <section className=' container'>
        <div className=' mb-5 flex items-center justify-center text-center text-black text-4xl '>
                  <div className='top-destination'>
                      <h1>Latest travel news</h1>
                      {/* <div className='flex items-center justify-center text-center'>
                      <hr className='w-4/5  text-violet-700 text-xl ' />
                      </div> */}
                  </div>
        </div>
        <div className='row'>
            <div className='col-lg-12 row'>
                <div className=' col-lg-6'>
                    {latest.map((datas) => (
                        <div className='col-span-1   rounded  ' key={datas.name}>
                           <div className="flex flex-col sm:flex-row items-center gap-2">
    <div className="rounded">
        <img
            src={datas.Image}
            className="h-24 w-28"
            alt={datas.name}
        />
    </div>
    <div className="p-2 mt-2 sm:mt-0">
        <div className="text-left">
            <h4 className="text-xl p-0 mb-2">{datas.discription}</h4>
            <div className="flex gap-2">
                <p className="text-sm mb-1 text-violet-600 font-normal">{datas.date}</p>
                <li className="flex justify-center items-center list-disc">
                    <p className="">{datas.read}</p>
                </li>
            </div>
        </div>
    </div>
</div>

                        </div>
                    ))}
                       < div className=' ' >
                      <a className='no-underline text-violet-600 mr-2' href=""> See all article  </a>  <FontAwesomeIcon className='text-violet-600' icon={faArrowRight} />
                    </div>

                </div>
                <div className='col-lg-6 '>
                  <div className='mt-6'>

                
                    <div className='overflow-hidden rounded relative p-'>
                      <img src={big2} alt="Imagination 2" className='w-full rounded transform transition-transform duration-300 hover:scale-110' />

                    </div>
                    <div>
                      <h3 className='mt-6'><a  className='no-underline latest-image-text  text-black' href="">There are many variations of passages available but</a></h3>
                      <p className='text-zinc-500 text-lg leading-7'> It is a long established fact that a reader will be distracted by the readable content of. The point of using Lorem Ipsum is that it has a more</p>
                      <p className='text-zinc-500 text-lg leading-7'>It is a long established fact that a reader will be distracted by the readable long established fact that a reader will be distracted content of a page when looking at its layout.</p>

                    </div>


                    < div className=' mt-2' >
                      <a className='no-underline text-violet-600 mr-2' href=""> Read full article  </a>  <FontAwesomeIcon className='text-violet-600' icon={faArrowRight} />
                    </div>

                 </div>

                 </div>       
            </div>

        </div>


      </section>
    </div>
  )
}

export default LatestTravel
