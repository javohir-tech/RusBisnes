import React from 'react'
import './AdviseSection.css'
import AdviseCard from '../../Components/AdviseCard/AdviseCard'
import ButtonCom from '../../Components/Button/Button'
import sergey from '../../assets/advise-card-1.png'
import card__2 from '../../assets/card-2.png'
import card__3 from '../../assets/card-3.png'
import card__4 from '../../assets/card-4.png'
import { useTranslation } from 'react-i18next'

export default function AdviseSection() {
    const {t}= useTranslation()
    return (
        <>
            <section className='advise-section'>
                <div className="container">
                    <div className='advise-section__header mb-5'>
                        <h2>{t('advise-section.title')}</h2>
                        <p>{t('advise-section.subtitle')}</p>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div >
                                <AdviseCard title={t('advise-section.card__1.title')}
                                    subtitle={t('advise-section.card__1.subtitle')}
                                    img={sergey}
                                    cardItem__1={'7400'}
                                    cardItem__2={'0,51$'}
                                    cardItem__3={'3600$'}
                                />
                            </div>
                        </div>
                        <div className="col-md-6  left-col">
                            <div >
                                <AdviseCard title={t('advise-section.card__2.title')}
                                    subtitle={t('advise-section.card__2.subtitle')}
                                    img={card__2}
                                    cardItem__1={'2000'}
                                    cardItem__2={'0,5$'}
                                    cardItem__3={'1000$'}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div >
                                <AdviseCard title={t('advise-section.card__3.title')}
                                    subtitle={t('advise-section.card__3.subtitle')}
                                    img={card__3}
                                    cardItem__1={'140'}
                                    cardItem__2={'3$'}
                                    cardItem__3={'420$'} />
                            </div>
                        </div>
                        <div className="col-md-6 left-col">
                            <div >
                                <AdviseCard
                                    title={t('advise-section.card__4.title')}
                                    subtitle={t('advise-section.card__4.subtitle')}
                                    img={card__4}
                                    cardItem__1={'150'}
                                    cardItem__2={'2,5$'}
                                    cardItem__3={'450$'} />
                                <div className='d-flex align-items-center mt-5 pt-3'>
                                    <h1 className='under-header'>{t('advise-section.underText')}</h1><a href="#lastform"><button className='advise-section__button'>{t('advise-section.button')}</button></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
