import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../image/img1.jpeg'
import img2 from '../image/img2.jpeg'
import img3 from '../image/img3.jpeg'
import img4 from '../image/img4.jpeg'
import img5 from '../image/img5.jpeg'
import img6 from '../image/img6.jpeg'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Project() {

    return (
        <div className="gallery-container mt-10 mb-15">
            <p className="text-[3rem] md:text-[4rem] font-black text-white  [-webkit-text-stroke:1.2px_black] mb-10 md:mb-16 text-center"><span className='text-red-600 [-webkit-text-stroke:0.5px_black]'>My</span> Project</p>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                // slidesPerView={3}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,          
                  }}
                  navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                  }}
                autoplay={{ delay: 6000 }}
                loop={true}
                breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    505:{
                        slidesPerView:2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                  }}
                className='w-[95%] md:w-[80%] slidOver'
            >
                <SwiperSlide><div className='slideDiv'><img src={img1} alt="" className='slideImg'/><a href="https://simple-crud-1-uzmh.onrender.com/">MINI-CRUD APP</a></div></SwiperSlide>
                <SwiperSlide><div className='slideDiv'><img src={img2} alt="" className='slideImg'/><a href="https://add-to-cart-mini.netlify.app/">MINI Add to Cart</a></div></SwiperSlide>
                <SwiperSlide><div className='slideDiv'><img src={img3} alt="" className='slideImg'/><a href="https://67da5989342638ba65bccb3a--mini-image-search.netlify.app/">MINI-Image Search</a></div></SwiperSlide>
                <SwiperSlide><div className='slideDiv'><img src={img4} alt="" className='slideImg'/><a href="https://sujay-selvan.github.io/Calculator/">Calculator</a></div></SwiperSlide>
                <SwiperSlide><div className='slideDiv'><img src={img5} alt="" className='slideImg'/><a href="https://fluffy-dusk-a2bb46.netlify.app/">Flower Gallery</a></div></SwiperSlide>
                <SwiperSlide><div className='slideDiv'><img src={img6} alt="" className='slideImg'/><a href="https://mini-product-details.netlify.app/">MINI-Product-Details</a></div></SwiperSlide>
            </Swiper>
            <div className="swiper-controler">
                <button className="custom-prev"><FaArrowAltCircleLeft className='text-[1.5rem]'/></button>
                <button className="custom-next"><FaArrowAltCircleRight className='text-[1.5rem]'/></button>
                <div className="custom-pagination"></div>
            </div>
        </div>



    );

}

