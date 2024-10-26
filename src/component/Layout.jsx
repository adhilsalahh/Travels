import React from 'react';
 // Ensure the path is correct
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from "react-router-dom";
import logo from '../image/download.png'
import './Home.css'; // Ensure you have custom styles here if needed
import Navbr from './Navbr';
import Footer from './Footer';

function Layout() {
  return (
    <div>

      <div>
        <Navbr/>
     
     
      </div>
      <Outlet/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Layout;
