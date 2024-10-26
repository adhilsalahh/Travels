import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { data } from "../component/mapping";
import { secdata } from "../component/mapping";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import offer1 from "../image/offer1.dbf93843.png";

import offer2 from "../image/offer2.cd566006.png";
import offer3 from "../image/offer3.93ae44e4.png";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Explore() {
  return (
    <div>
      <section className="container mt-7">
        <div className=" mb-7">
          <div className="row">
            <div className="col-lg-12">
              <div className=" mb-5 flex items-center justify-center text-center text-black text-4xl ">
                <div className="top-destination">
                  <h1>Explore our hot deals</h1>
                  {/* <div className='flex items-center justify-center text-center'>
                                <hr className='w-4/5  text-violet-700 text-xl ' />
                                </div> */}
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-lg-12">
                <div className="flex  items-center justify-center text-center">
                  <Navbar
                    collapseOnSelect
                    expand="lg"
                    className=" Explore-nav shadow-lg py-8  rounded  bg-white"
                  >
                    <Container>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto  py-1 px-1 gap-2">
                          <button className="p-1 rounded px-4 bg-violet-700 text-black ">
                            {" "}
                            <Nav.Link
                              className="text-white m-0 "
                              href="#pricing"
                            >
                              Hotels{" "}
                            </Nav.Link>
                          </button>
                          <button className="p-1 rounded px-4  border-1  border-violet-500 text-black ">
                            {" "}
                            <Nav.Link
                              className="text-black m-0 "
                              href="#pricing"
                            >
                              {" "}
                              <button> Tours</button>
                            </Nav.Link>
                          </button>
                          <button className="p-1 rounded px-4  border-1 border-violet-500 text-black ">
                            {" "}
                            <Nav.Link
                              className="text-black m-0 "
                              href="#pricing"
                            >
                              {" "}
                              <button> Space</button>
                            </Nav.Link>{" "}
                          </button>
                          <button className="p-1 rounded px-4  border-1 border-violet-500 text-black ">
                            {" "}
                            <Nav.Link
                              className="text-black m-0 "
                              href="#pricing"
                            >
                              <button>Events</button>
                            </Nav.Link>{" "}
                          </button>
                        </Nav>
                      </Navbar.Collapse>
                    </Container>
                  </Navbar>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {data.map((datas) => (
                <div className="col-span-1 border  rounded  " key={datas.name}>
                  <div className="card-home">
                    <div></div>
                    <div className=" overflow-hidden rounded relative">
                      <img
                        src={datas.image}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt={datas.name}
                      />
                      <div className="absolute bottom-3 left-3 right-0 flex gap-1 text-white items-center">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "#ffffff" }}
                        />
                        <p className="p-0 mb-0">{datas.location}</p>
                      </div>
                    </div>
                    <div className="p-3  ">
                      <div className=" text-left">
                        <h4 className="truncate text-xl">{datas.name}</h4>
                        <div className="flex text-xs">
                          <h6>{datas.description1}</h6>
                          <h6>{datas.description2}</h6>
                        </div>
                        <div className="flex gap-2">
                          <h4 className="text-xl">{datas.price}</h4>
                          <p className="">{datas.price1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {secdata.map((datas) => (
                <div className="col-span-1 border  rounded  " key={datas.name}>
                  <div className="card-home">
                    <div></div>
                    <div className=" overflow-hidden rounded relative">
                      <img
                        src={datas.image}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt={datas.name}
                      />
                      <div className="absolute bottom-3 left-3 right-0 flex gap-1 text-white items-center">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "#ffffff" }}
                        />
                        <p className="p-0 mb-0">{datas.location}</p>
                      </div>
                    </div>
                    <div className="p-3  ">
                      <div className=" text-left">
                        <h4 className="truncate text-xl">{datas.name}</h4>
                        <div className="flex text-xs">
                          <h6>{datas.description1}</h6>
                          <h6>{datas.description2}</h6>
                        </div>
                        <div className="flex gap-2">
                          <h4 className="text-xl">{datas.price}</h4>
                          <p className="">{datas.price1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 row p-0">
            {/* Offer 1 (takes up half the screen, but needs same height as other offers) */}
            <div className="col-lg-6 mb-4">
              <div className="overflow-hidden rounded relative h-full">
                <img
                  src={offer1}
                  alt="Offer 1"
                  className="w-full h-full object-cover rounded transform transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center p-7 text-left text-white">
                  <div>
                    <h1>Special Offers</h1>
                    <p className="pr-9">
                      Invidunt ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. At vero eos et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd dolor sit amet. Lorem ipsum
                      dolor sit amet.
                    </p>

                    <button className="py-3 px-4 bg-violet-500 rounded  ">
                      <a className="no-underline text-white" href="">
                        {" "}
                        Holiday deals
                      </a>
                    </button>
                  </div>
                  {/* Additional content here */}
                </div>
              </div>
            </div>

            {/* Offer 2 and Offer 3 (should match height of Offer 1) */}
            <div className="col-lg-6 row">
              <div className="col-lg-6 mb-4">
                <div className="overflow-hidden rounded relative h-full">
                  <img
                    src={offer2}
                    alt="Offer 2"
                    className="w-full h-full object-cover rounded transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-7 text-left text-white">
                    <div>
                      <h2>News letter</h2>
                      <p className="pr-3">
                        nvidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et.
                      </p>

                      <button className="py-3 px-4 bg-violet-500 rounded  ">
                        <a className="no-underline text-white" href="">
                          {" "}
                          Subscribe now
                        </a>
                      </button>
                    </div>
                    {/* Additional content here */}
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mb-4">
                <div className="overflow-hidden rounded relative h-full">
                  <img
                    src={offer3}
                    alt="Offer 3"
                    className="w-full h-full object-cover rounded transform transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-7 text-left text-white">
                    <div>
                      <h2>Travel tips</h2>
                      <p className="pr-3">
                        Invidunt ut labore et dolore magna aliquyam erat, sed
                        diam voluptua. At vero eos et.
                      </p>

                      <button className="py-3 px-4 bg-violet-500 rounded  ">
                        <a className="no-underline text-white" href="">
                          {" "}
                          Get tips
                        </a>
                      </button>
                    </div>
                    {/* Additional content here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
