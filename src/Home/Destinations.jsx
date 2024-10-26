import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import{destin} from '../component/mapping'


import NavDropdown from 'react-bootstrap/NavDropdown';
function Destinations() {
  return (
    <div>
        <section className='container mt-10'>
                <div className=' mb-5 flex items-center justify-center text-center text-black text-4xl '>
                <div className='top-destination'>
                    <h1>Destinations for you</h1>
                    {/* <div className='flex items-center justify-center text-center'>
                    <hr className='w-4/5  text-violet-700 text-xl ' />
                    </div> */}
                </div>
                </div>

            <div className='row flex items-center justify-center text-center'>
                <div className='col-lg-10'>
                    <div className='flex items-center pl-0 mb-0 justify-center text-center'>
                        <Navbar collapseOnSelect expand="lg" className="Explore-nav shadow-lg py-8 rounded bg-white">
                            <Container>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="flex justify-center flex-wrap gap-4 py-2">
                                        <button className='p-2 rounded px-4 bg-violet-700 text-white'>
                                            <Nav.Link href="#pricing" className='text-white m-0'>Nepal</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>Malaysia</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>Indonesia</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>Turkey</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>China</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>Darjeeling</Nav.Link>
                                        </button>
                                        <button className='p-2 rounded px-4 border border-violet-500 text-black'>
                                            <Nav.Link href="#pricing" className='text-black m-0'>Italy</Nav.Link>
                                        </button>
                                    </Nav>

                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                </div>
            </div>

            <div>
            <div className='row mt-5 mb-5'>
        <div className='col-lg-12'> overflow-hidden
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                {destin.map((datas) => (
                    <div className='col-span-1 border  rounded shadow-md sm:resize-none  ' key={datas.name}>
                        <div className='card-home flex flex-wrap'>
                            <div className=' rounded '>
                                <img
                                    src={datas.Image}
                                    className='w-full '
                                    alt={datas.name}
                                />
                               
                            </div>
                            <div className='p-1 pl-4  '>
                                <div className=' text-left'>
                                    <h4 className='truncate  text-xl'>{datas.name}</h4>
                                 
                                    <div className='flex gap-1 '>
                                    
                                        <h4 className='text-xl font-normal'>{datas.price}</h4>
                                        <p className='m-0 pt-1 font-medium text-violet-600'>{datas.priceNo}</p>
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


        </section>
        
      
    </div>
  )
}

export default Destinations
