import React, { useRef } from 'react'
import './Slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide14 from '../../assets/uzb-result-1.jpg'
import slide15 from '../../assets/uzb-result-2.jpg'
import slide16 from '../../assets/uzb-result-3.jpg'
import slide17 from '../../assets/uzb-result-4.jpg'
import slide18 from '../../assets/slide-19.jpg'
import slide19 from '../../assets/slide-20.jpg'

import { useTranslation } from 'react-i18next';


export default function Slide() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        centerPadding: "0px",
        slidesToShow: 5,
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

    // lanuge change
    const { t } = useTranslation()
    return (
        <>
            <section className='slide-section py-5 mt-5 mb-0 bg-dark' id='reviews'>
                <div className="container">
                    <div className='text-center text-ligth'>
                        <h1 className='text-light position-relative'>{t('slide-section.title')}<span className='under-line position-absolute'></span></h1>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings} className='py-5 my-3'>
                            <div className='slide-box'>
                                <img src={slide14} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide15} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide16} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide18} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide19} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide17} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
