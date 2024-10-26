import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'; // Your Home component
import Contact from './component/Contact';
import Pricing from './component/Pricing';
import Tours from './Toure/Tours';
import Flights from './component/Flights';
import Hotels from './component/Hotels';
import Layout from './component/Layout'; // Make sure this matches the correct folder name
import About from './component/About'; // Ensure this is the correct path
import ToureDetail from './component/ToureDetail';
import TourBooking from './component/TourBooking';
import TourDestination from './component/TourDestination';
import FlightBooking from './component/FlightBooking';
import HotelBooking from './component/HotelBooking';
import RoomBooking from './component/RoomBooking';
import RoomDetails from './component/RoomDetails';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/tours" element={<Tours/>} />
          <Route path="/tours/details" element={<ToureDetail/>} />
          <Route path="/tours/booking" element={<TourBooking/>} />
          <Route path="/tours/destination" element={<TourDestination/>} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/flights/booking" element={<FlightBooking/>} />

          <Route path="/hotels" element={<Hotels />} />
          <Route path="hotels/roombooking" element={<RoomBooking/>} />
          <Route path="hotels/hotelbooking" element={<HotelBooking/>} />
          <Route path="hotels/roomdetail" element={<RoomDetails/>} />

        </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
