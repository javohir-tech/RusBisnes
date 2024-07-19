import React from 'react'
import './AdviseSection.css'
import AdviseCard from '../../Components/AdviseCard/AdviseCard'
import ButtonCom from '../../Components/Button/Button'
import sergey from '../../assets/advise-card-1.png'
import card__2 from '../../assets/card-2.png'
import card__3 from '../../assets/card-3.png'
import card__4 from '../../assets/card-4.png'

export default function AdviseSection() {
    return (
        <>
            <section className='advise-section'>
                <div className="container">
                    <div className='advise-section__header mb-5'>
                        <h2>Меня рекомендуют</h2>
                        <p>
                            Меня рекомендуют
                            Сейчас у меня находится более 10 проектов на постоянном обслуживании, которым я
                            ежемесячно привлекаю максимальное количество целевых обращений
                        </p>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div >
                                <AdviseCard title={'Сергей'}
                                    subtitle={`Сергей Основатель крупнейшего ивент комьюнити. Open Event Club`}
                                    img={sergey}
                                    cardItem__1={'7400'}
                                    cardItem__2={'0,51$'}
                                    cardItem__3={'3600$'}
                                />
                            </div>
                        </div>
                        <div className="col-md-6  left-col">
                            <div >
                                <AdviseCard title={'Руслан'}
                                    subtitle={`Открытка кубики`}
                                    img={card__2}
                                    cardItem__1={'2000'}
                                    cardItem__2={'0,5$'}
                                    cardItem__3={'1000$'}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div >
                                <AdviseCard title={'Александр'}
                                    subtitle={`Александр Центральная Ипотечная Корпорация - привлечение клиентов на покупку квартир`}
                                    img={card__3}
                                    cardItem__1={'140'}
                                    cardItem__2={'3$'}
                                    cardItem__3={'420$'} />
                            </div>
                        </div>
                        <div className="col-md-6 left-col">
                            <div >
                                <AdviseCard
                                    title={'Руслан'}
                                    subtitle={`Промышленные котлы цель которых обогрев коммерческих площадей от 1000м2`}
                                    img={card__4}
                                    cardItem__1={'150'}
                                    cardItem__2={'2,5$'}
                                    cardItem__3={'450$'} />
                                <div className='d-flex align-items-center mt-5 pt-3'>
                                    <h1 className='under-header'>Хотите такой же результат?</h1><ButtonCom text={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'} style={'main-button w-100'} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
