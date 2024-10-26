import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitterSquare, faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSolidIconName } from '@fortawesome/free-solid-svg-icons';  // Replace with actual icons

const Footer = () => {
  return (
    <div className='bg-gray-100 text-gray-700 py-10  border-violet-600'>
      <div className='container'>
        {/* Footer Grid Layout */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Need any help Section spanning 5 columns */}
          <div className="col-span-1 lg:col-span-2 ">
          <h3 className="font-semibold text-lg mb-4 inline-block border-b-2 border-violet-500">  Need any help?</h3>
            <div className='border-l-4 pl-2  border-violet-600 mb-4 '>
              <p className='font-medium mb-1'>Call 24/7 for any help</p>
              <h3 className="text-2xl text-violet-600 font-semibold">+00 123 456 789</h3>
            </div>
            <div className='border-l-4 pl-2  border-violet-600 mb-4'>
  <p className="font-medium mb-1">Mail to our support team</p>
  <a href="mailto:support@domain.com" className="text-violet-600 font-semibold no-underline  sm:text-sm md:text-sm">
    support@domain.com
  </a>
</div>

            <div className='border-l-4 pl-2  border-violet-600 mb-4'>
              <p className="font-medium mb-1">Follow us on</p>
              <div className='flex gap-2'>
              <FontAwesomeIcon className='text-xl text-violet-500' icon={faInstagram} />
              <FontAwesomeIcon className='text-xl text-violet-500' icon={faTwitterSquare} />
              <FontAwesomeIcon className='text-xl text-violet-500' icon={faFacebookSquare} />
              <FontAwesomeIcon className='text-xl text-violet-500' icon={faLinkedin} />

              </div>


            </div>
         

          </div>

          {/* Company Details Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4 inline-block border-b-2 border-violet-500">Company Details</h3>
            <ul className='text-start  p-0'>
              <li className="mt-2">About Us</li>
              <li className="mt-2">Testimonials</li>
              <li className="mt-2">Rewards</li>
              <li className="mt-2">Work with Us</li>
              <li className="mt-2">Meet the Team</li>
              <li className="mt-2">Blog</li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4  inline-block border-b-2 border-violet-500">Support</h3>
            <ul className='text-start  p-0'>
              <li className="mt-2">Account</li>
              <li className="mt-2">FAQ</li>
              <li className="mt-2">Legal</li>
              <li className="mt-2">Contact</li>
              <li className="mt-2">Affiliate Program</li>
              <li className="mt-2">Privacy Policy</li>
            </ul>
          </div>

          {/* Other Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4  inline-block border-b-2 border-violet-500">Other Services</h3>
            <ul className='text-start  p-0'>
              <li className="mt-2">Community Program</li>
              <li className="mt-2">Investor Relations</li>
              <li className="mt-2">Rewards Program</li>
              <li className="mt-2">PointsPLUS</li>
              <li className="mt-2">Partners</li>
              <li className="mt-2">List My Hotel</li>
            </ul>
          </div>

          {/* Top Cities Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4  inline-block border-b-2 border-violet-500">Top Cities</h3>
            <ul className='text-start p-0'>
              <li className="mt-2">Chicago</li>
              <li className="mt-2">New York</li>
              <li className="mt-2">San Francisco</li>
              <li className="mt-2">California</li>
              <li className="mt-2">Ohio</li>
              <li className="mt-2">Alaska</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
