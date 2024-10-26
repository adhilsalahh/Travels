import React, { useState } from 'react';
import { COntactus } from './mapping';

function Mappp() {
  const [selectedMap, setSelectedMap] = useState(null); // Track which place's map is clicked

  const handleMapClick = (index) => {
    setSelectedMap(index); // Set the index of the clicked map
  };

  const handleMinimize = () => {
    setSelectedMap(null); // Hide the map when minimize button is clicked
  };

  // Predefined map iframe URLs for each location
  const mapUrls = [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30287042.33961269!2d-124.38812158089785!3d22.082136531923226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84043a3b88685353%3A0xed64b4be6b099811!2sMexico!5e0!3m2!1sen!2sin!4v1729759506113!5m2!1sen!2sin",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5556130.938465291!2d-126.16884522108903!3d47.1587443729459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2sWashington%2C%20USA!5e0!3m2!1sen!2sin!4v1729759565113!5m2!1sen!2sin",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6512007.919349583!2d-124.59962174217642!3d37.16003755848982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1729759473162!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52952736.27407169!2d-161.9724221369066!3d35.898541446585334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1729760183424!5m2!1sen!2sin",
  ];


  return (
    <div>
      {/* Conditionally render the map iframe when a place is clicked */}
      {selectedMap !== null && (
        <div className='relative w-full max-w-[500px] h-[500px] bg-gray-200  text-center mx-auto mt-4 rounded-lg shadow-lg'>
          <button
            onClick={handleMinimize}
            className='absolute top-0 right-2 text-xl text-black  p-1 rounded  '
          >
            &times;
          </button>
          <iframe
            src={mapUrls[selectedMap]}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Map of ${COntactus[selectedMap].place}`}
            className="rounded-lg"
          ></iframe>
        </div>
      )}

      <section className='container mx-auto px-4'>
        <div className='flex justify-between '>
            <h3>Stay in touch</h3>
            <h3 className='text-purple-600' >+00 123 456 789</h3>

        </div>
        <div className='flex justify-around items-center mt-5'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {COntactus.map((datas, index) => (
              <div
                key={index}
                className='bg-white p-4 w-64 shadow-lg rounded-lg flex justify-center items-center text-center'
              >
                <div>
                  <h4 className='text-lg font-medium mb-2'>{datas.name}</h4>
                  <h2 className='text-2xl font-semibold mb-3'>{datas.place}</h2>
                  <p className='text-base mb-1 p-0'>{datas.description1}</p>
                  <p className='text-base'>{datas.description2}</p>
                  <a
                    className='no-underline text-lg font-medium text-purple-700 cursor-pointer'
                    onClick={() => handleMapClick(index)} // Set map click handler
                  >
                    View on map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mappp;
