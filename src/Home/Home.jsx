import React from "react";
// Ensure the path is correct
import "../component/Home.css";
// FONTAWESOME ICONS IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faHotel,
  faGlobe,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
// image importe
import image1 from "../image/home-bg-image.png";
import imagination1 from "../image/imagination1.f968e853.png";
import imagination2 from "../image/imagination2.d48d8bae.png";
import imagination3 from "../image/imagination3.6a46d2fd.png";
//Exported pages
import Explore from "./Explore"; // Make sure Explore is exported correctly
import LatestTravel from "./LatestTravel"; // Ensure LatestTravel is exported
import Destination from "./Destination";
import Destinations from "./Destinations";
import Partners from "./Partners";
import Email from "./Email";

function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-main flex justify-center items-center "
        style={{
          backgroundImage: `url(${image1})`,
          backgroundSize: "cover",
          height: "160vh",
        }}
      >
        <div className="text-center lg:mt-0 md:mt-0 sm:mt-52 sm:text-inherit   text-white">
          <h1 className="font-serif  md:text-3xl sm:text-xl lg:text-7xl flex text-center justify-center items-center ">
            Explore the world together
          </h1>
          <h4 className="font-serif text-xl flex text-center justify-center items-center">
            Find awesome flights, hotel, tour, car and packages
          </h4>
        </div>
      </div>
      <div>
        <section className="relative   sm:bottom-0 md:bottom-32 lg:bottom-32">
          <div className="2xl:contrast  first-div mx-3 p-8 rounded bg-slate-50">
          <div className="flex flex-wrap">
  {/* First Column */}
  <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
    <ul className="flex flex-col sm:gap-2 sm:flex-row justify-start  p-0 gap-3">
      <li className="w-1/5 sm:w-5/5 md:w-1/6 lg:w-1/5">
        <button className="bg-purple-600 rounded text-white p-2 flex items-center justify-center gap-1">
          <FontAwesomeIcon icon={faPlaneDeparture} />
          <a href="#" className="no-underline text-white">
            Flight
          </a>
        </button>
      </li>
      <li className="w-1/5 sm:w-5/5 md:w-1/6 lg:w-1/5">
        <button className="border border-black text-black bg-white p-2 rounded flex items-center justify-center gap-1">
          <FontAwesomeIcon icon={faGlobe} style={{ color: "#000000" }} />
          <a href="#" className="no-underline text-black">
            Tours
          </a>
        </button>
      </li>
      <li className="w-1/5 sm:w-5/5 md:w-1/6 lg:w-1/5">
        <button className="border border-black text-black bg-white p-2 rounded flex items-center justify-center gap-1">
          <FontAwesomeIcon icon={faHotel} style={{ color: "#000000" }} />
          <a href="#" className="no-underline text-black">
            Hotels
          </a>
        </button>
      </li>
    </ul>
  </div>

  {/* Second Column */}
  <div className="w-full lg:w-1/2">
  <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-start xl:justify-end p-0">
  <li className="w-full sm:w-1/5 md:w-1/6 lg:w-1/5 sm:text-left">
    <button className="p-0 w-full sm:text-left">
      <a href="#" className="block p-0 text-violet-600 font-semibold no-underline  sm:text-left">
        One Way
      </a>
    </button>
  </li>
  <li className="w-full sm:w-1/5 md:w-1/6 lg:w-1/5 sm:text-left">
    <button className="p-0 w-full sm:text-left">
      <a href="#" className="block p-0 text-black no-underline  sm:text-left">
        Roundtrip
      </a>
    </button>
  </li>
  <li className="w-full sm:w-1/5 md:w-1/6 lg:w-1/5 sm:text-left">
    <button className="p-0 w-full sm:text-left">
      <a href="#" className="block p-0 text-black no-underline sm:whitespace-nowrap sm:text-left">
        Multi City
      </a>
    </button>
  </li>
</ul>


  </div>
</div>


            {/* Form Inputs */}
            <div className="">
              <div className="row">
                <div className="col-lg-12 my-4">
                  <div className="row gap-3">
                    {/* First Column */}
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-2 rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input
                            className="bg-violet-100 text-gray-400 w-100"
                            type="text"
                            value="From"
                          />
                          <FontAwesomeIcon
                            className="h-6"
                            icon={faPlaneDeparture}
                          />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className="font-semibold">New York</h5>
                          <span className="text-sm">
                            JFK - John F. Kennedy International...
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12 p-2 rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <input
                            className="bg-violet-100 text-gray-400 w-100"
                            type="text"
                            value="From"
                          />
                          <FontAwesomeIcon
                            className="h-6"
                            icon={faPlaneArrival}
                            style={{ color: "#000000" }}
                          />
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className="font-semibold">London</h5>
                          <span className="text-sm">
                            LCY - London City Airport
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Second Column */}
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12  p-2  rounded bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <p className="bg-violet-100 text-gray-400 mb-0 pb-0">
                            Journey date
                          </p>
                        </form>
                        <div className="flex flex-col mb-2 text-left">
                          <input
                            className="bg-violet-100 font-bold"
                            type="date"
                            value="2022-05-05"
                          />
                        </div>
                        <div className="flex flex-col text-left mb-2">
                          <span className="text-sm">Thursday</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 col-12  rounded  p-2 bg-violet-100">
                      <div>
                        <form className="flex justify-between mb-2" action="">
                          <p className="bg-violet-100 text-gray-400 w-100 mb-0 pb-0">
                            Passenger,Class
                          </p>
                        </form>
                        <div className="flex flex-col text-left">
                          <h5 className="font-semibold">0 Passenger</h5>
                          <span className="text-sm">Bisuness</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center  ">
                  <button className="bg-purple-600 py-2 px-4 rounded text-white">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="selection-image-top container ">
        <div className="row p-0">
          {/* First Column - Text Content */}
          <div className="col-lg-3  col-md-6 col-sm-12 col-12 imagitation-coloms w-10/12 px-2 rounded flex justify-center items-center text-left ">
            <div>
              <h2 className="pb-8">
                Go beyond your{" "}
                <span className="pb-6 border-b-2 border-violet-500">
                  imagination
                </span>
              </h2>
              <h5 className="font-normal text-lg">
                Discover your ideal experience with us
              </h5>
            </div>
          </div>

          {/* Second Column - Image 1 */}
          <div className="col-lg-3 col-md-6 col-sm-12 col-12 px-2 imagitation-coloms px-0 rounded">
            <div className="overflow-hidden rounded relative">
              {" "}
              {/* Add overflow-hidden to prevent overflow when scaling */}
              <img
                src={imagination1}
                alt="Imagination 2"
                className="w-full rounded transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0  left-0 right-0 backdrop-opacity-10 backdrop-invert  bg-black/30 bg-opacity-70 text-white p-4 ">
                <h4 className="text-center">7% Discount for all Airlines</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-12 px-2 imagitation-coloms px-0 rounded">
            <div className="overflow-hidden rounded relative">
              <img
                src={imagination2}
                alt="Imagination 2"
                className="w-full rounded transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 backdrop-opacity-10 backdrop-invert  bg-black/30 text-white p-4 ">
                <h4 className="text-center">
                  Travel around <br /> <span>the world</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 col-12 px-2 imagitation-coloms px-0 rounded">
            <div className="overflow-hidden rounded relative">
              <img
                src={imagination3}
                alt="Imagination 2"
                className="w-full rounded transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 backdrop-opacity-10 backdrop-invert bg-black/30 bg-opacity-70 text-white p-4 ">
                <h4 className="text-center">
                  Luxury resorts <br />
                  <span>top deals</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Destination />
      <Explore />
      <Destinations />
      <LatestTravel />
      <Partners />
      <Email />
    </div>
  );
}

export default Home;
