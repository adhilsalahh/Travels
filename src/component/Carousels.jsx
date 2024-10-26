import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImage from '../image/big-img.a49b935c.png'
import bgImage2 from '../image/big-img2.7d4a7876.png'
import bgImage3 from '../image/big-img3.cffb3ab1.png'
import bgImag4 from '../image/big-img4.99fc20d9.png'
import bgImag5 from '../image/big-img5.5cfb8971.png'
import bgImage6 from '../image/big-img6.71afbd0f.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={bgImage} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={bgImage2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={bgImage3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={bgImag4} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={bgImag5} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={bgImage6} alt="" /> </SwiperSlide>
        
      </Swiper>
    </>
  );
}
