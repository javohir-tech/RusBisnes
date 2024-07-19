import React from 'react'
import './AdviseCard.css'
import sergey from '../../assets/advise-card-1.png'

export default function AdviseCard({title, subtitle, img, cardItem__1, cardItem__2, cardItem__3 }) {
    return (
        <>
            <div className='advise-section__card'>
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <div className='card-info'>
                        <h3>{title}</h3>
                        <p>{subtitle}</p>
                    </div>
                    <div>
                        <img src={img} alt="advise acrd img " />
                    </div>
                </div>
                <div className='d-flex justify-content-between py-3 card-footer'>
                    <div>
                        <h2>{cardItem__1}</h2>
                        <p>целевых обращений</p>
                    </div>
                    <div>
                        <h2>{cardItem__2}</h2>
                        <p>стоимость заявки</p>
                    </div>
                    <div>
                        <h2>{cardItem__3}</h2>
                        <p>рекламный бюджет</p>
                    </div>
                </div>
            </div>
        </>
    )
}
