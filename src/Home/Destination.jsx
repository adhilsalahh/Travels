import React from "react";
import bigimage from "../image/big-img.a49b935c.png";
import destination1 from "../image/destination1.40c89fca.png";
import destination2 from "../image/destination2.54f9f938.png";
import destination3 from "../image/destination3.ba50419e.png";
import destination4 from "../image/destination4.50780d51.png";
import destination5 from "../image/destination5.73428857.png";
import destination6 from "../image/destination6.4540162c.png";
import destination7 from "../image/destination7.db797940.png";
import destination8 from "../image/destination8.03d4b7a9.png";
import "../component/Home.css"; // Ensure you have custom styles here if needed

function Destination() {
  return (
    <div>
      <section className="container mt-3">
        <div className=" mb-5 flex items-center justify-center text-center text-black text-4xl ">
          <div className="top-destination">
            <h1>Top destinations</h1>
            {/* <div className='flex items-center justify-center text-center'>
              <hr className='w-4/5  text-violet-700 text-xl ' />
            </div> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="overflow-hidden rounded relative p-">
                  <img
                    src={bigimage}
                    alt="Imagination 2"
                    className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                    <div className="text-left">
                      <h2 className="text-4xl mb-0">Up to</h2>

                      <div className="flex">
                        <h1 className="text-9xl	">50</h1>
                        <h6 className="block ml-2 mt-6 text-4xl">
                          <span>%</span>
                          <br />
                          <span>Off</span>
                        </h6>
                      </div>

                      <h2 className="text-4xl mb-3">
                        Holiday <span className="block">packages</span>
                      </h2>

                      <a
                        className="mt-4 no-underline text-white rounded px-3 py-2 bg-violet-600"
                        href=""
                      >
                        <button className="text-lg">Book Now</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm:ml-1 lg:ml-0 md:ml-0 row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-1 block">
                  <div className="mb-2 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination1}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            China
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination2}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            Darjeelin{" "}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className=" p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination3}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            Malaysia
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-1">
                  <div className="mb-2 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination4}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            Gangtok
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination5}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            Thailand
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className=" p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination6}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            Australia
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-1">
                  <div className="mb-2 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination7}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            London
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className=" mb-3 p-1">
                    <div className="overflow-hidden rounded relative">
                      <img
                        src={destination8}
                        className="w-full rounded transform transition-transform duration-300 hover:scale-110"
                        alt=""
                      />

                      <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                        <h3 className="text-center">
                          <a
                            className="no-underline text-white font-light"
                            href=""
                          >
                            {" "}
                            USA
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="mb-1">
                    <a
                      className="no-underline text-white rounded px-10 py-2 bg-violet-600"
                      href=""
                    >
                      <button>View all</button>
                    </a>
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

export default Destination;
