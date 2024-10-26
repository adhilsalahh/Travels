import React from 'react'
import { Link, Outlet } from "react-router-dom";
import logo from '../image/download.png'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

import '../component/Home.css'; // Ensure you have custom styles here if needed

function Navbr() {
  return (
    <div>
         
      <div className="bg-main-chaild">
          <br />
          <hr className="w-full text-white" />

          {/* Bootstrap Navbar */}
          <div className="container-1xl mb-0 mx-5">
            <Navbar className="bg-transparent p-0 text-white" expand="lg">
              <Container fluid className="d-flex justify-between">
                {/* Brand with Logo */}
                <Navbar.Brand as={Link} to="/">
                  <img src={logo} alt="Logo" style={{ height: '60px' }} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto p-0 my-2 my-lg-0 text-white" navbarScroll>
                    <NavDropdown className="text-white"   title={<span className="text-white font-medium text-lg nav-dropdown-hover-effect">Home</span>}id="navbarScrollingDropdown">
                      <NavDropdown.Item as={Link} to="/" className='text-black'>Home One</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/" className='text-black'>Home Two</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown  title={<span className="text-white font-medium text-lg  nav-dropdown-hover-effect">Tours</span>}  id="navbarScrollingDropdown" className="text-white">
                      <NavDropdown.Item as={Link} to="/tours" className="text-white">Tour</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/tours/details" className="text-white">Tour Detail</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/tours/booking" className="text-white">Tour Booking</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/tours/destination" className="text-white">Tour Destination</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown  title={<span className="text-white font-medium  text-lg nav-dropdown-hover-effect">Flights</span>}  id="navbarScrollingDropdown" className="text-white">
                      <NavDropdown.Item as={Link} to="/flights" className="text-white">Flight</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/flights/booking" className="text-white">Flight Booking</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title={<span className="text-white font-medium text-lg  nav-dropdown-hover-effect">Hotels</span>}  id="navbarScrollingDropdown" className="text-white">
                      <NavDropdown.Item as={Link} to="/hotels" className="text-white">Hotel</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/hotels/roombooking" className="text-white">Hotel Booking</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/hotels/hotelbooking" className="text-white">Room Booking</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/hotels/roomdetails" className="text-white">Room Details</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title={<span className="text-white font-medium text-lg   nav-dropdown-hover-effect">Pages</span>}  id="navbarScrollingDropdown" className="text-white">
                      <NavDropdown.Item as={Link} to="/about" className="text-white">About</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/contact" className="text-white">Contact</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link as={Link} to="/contact" className="text-white font-medium  ">Contact</Nav.Link>
                  </Nav>

                  <form action="">
                    <button className="bg-fuchsia-700 text-white p-2 rounded">
                      <Link to="/partner" className="no-underline text-white">Become a partner</Link>
                    </button>
                  </form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
      </div>
    </div>
  )
}

export default Navbr
   
    