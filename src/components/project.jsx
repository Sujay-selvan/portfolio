import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../image/img1.jpg'
import img2 from '../image/img2.jpg'
import img3 from '../image/img3.jpg'
import img4 from '../image/img4.jpg'
import img5 from '../image/img5.jpg'

import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

export default function Project() {
    return (
        <div className="gallery-container">
            <h2 className="title">My Projects</h2>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                loop={true}
                autoplay={
                    {
                        delay: 4500,
                        disableOnInteraction: false
                    }
                }
                coverflowEffect={{
                    rotate: 90,
                    stretch: 0,
                    depth: 100,
                    modifier: 4,
                    slideShadows: true,
                }}
                pagination={{
                    el: '.custom-pagination',
                    clickable: true,          
                  }}
                  navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev'
                  }}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="flowerSwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt="1" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="2" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="3" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="4" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="5" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="4" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="4" />
                    <button><a href="#">Live</a></button>
                </SwiperSlide>
            </Swiper>

            <div className="swiper-controler">
                <button className="custom-prev"><FaArrowAltCircleLeft /></button>
                <button className="custom-next"><FaArrowAltCircleRight /></button>
                <div className="custom-pagination"></div>
            </div>

        </div>
    );
}

