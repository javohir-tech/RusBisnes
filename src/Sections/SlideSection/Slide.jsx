import React from 'react'
import './Slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import slide1 from '../../assets/slide-1.jpg'
import slide2 from '../../assets/slide-2.jpg'
import slide3 from '../../assets/slide-3.jpg'
import slide4 from '../../assets/slide-4.jpg'
import slide5 from '../../assets/slide-5.jpg'
import slide6 from '../../assets/slide-6.jpg'
import slide7 from '../../assets/slide-7.jpg'
import slide8 from '../../assets/slide-8.jpg'
import slide9 from '../../assets/slide-9.jpg'
import slide10 from '../../assets/slide-10.jpg'
import slide11 from '../../assets/slide-11.jpg'
import slide12 from '../../assets/slide-12.jpg'
import slide13 from '../../assets/slide-13.jpg'
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

    const {t} = useTranslation()
    return (
        <>
            <section className='slide-section py-5 mt-5 mb-0 bg-dark' id='reviews'>
                <div className="container">
                    <div className='text-center text-ligth'>
                        <h1 className='text-light position-relative'>{t('slide-section.title')}<span className='under-line position-absolute'></span></h1>
                    </div>
                    <div className="slider-container">
                        <Slider {...settings} className='py-5 my-3'>
                            <div className='slide-box d-flex justify-content-center'>
                                <img src={slide1}  alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide2} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide3} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide4} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide5} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide6} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide7} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide8} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide9} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide10} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide11} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide12} alt="" />
                            </div>
                            <div className='slide-box'>
                                <img src={slide13} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
