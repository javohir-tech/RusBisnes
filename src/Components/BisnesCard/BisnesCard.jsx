import React from 'react'
import './BisnesCard.css'

export default function BisnesCard({ id, style,styletwo, title, subtitle, reklam, reklamTitle, sell, sellTitle, benefit, benefitTitle, buttonText }) {
    return (
        <>
            <div className={style} id={id}>
                <div className={styletwo}>
                    <div className='d-flex flex-column h-100 justify-content-around'>
                        <div>
                            <h3>{title}</h3>
                            <p>{subtitle}</p>
                        </div>
                        <div className='d-flex flex-column-reverse bisnes-card__info flex-md-row '>
                            <div className='card-info__item'>
                                <h2>{benefit}</h2>
                                <p>{benefitTitle}</p>
                            </div>
                            <div className='card-info__item mx-3'>
                                <h2>{sell}</h2>
                                <p>{sellTitle}</p>
                            </div>
                            <div className='card-info__item'>
                                <h2>{reklam}</h2>
                                <p>{reklamTitle}</p>
                            </div>
                        </div>
                        <div>
                            <button className='bisnes-card__button '><a href="#contacts">{buttonText}</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
