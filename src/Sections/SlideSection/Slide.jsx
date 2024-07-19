import React from 'react'
import './Slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide1 from '../../assets/slide-1.jpg'
import { Autoplay } from 'swiper/modules';

export default function Slide() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        Autoplay: true,
        speed: 2000,
        centerPadding: "0px",
        slidesToShow: 5,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };

    return (
        <>
            <section className='slide-section py-5 my-5 bg-dark'>
                <div className="container">
                    <div className='text-center text-ligth'>
                        <h1 className='text-light position-relative'>Отзывы от клиентов<span className='under-line position-absolute'></span></h1>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings} className='py-5 my-3'>
                            <div className='slide-box d-flex justify-content-center'>
                                <img src={slide1}  alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide1} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
