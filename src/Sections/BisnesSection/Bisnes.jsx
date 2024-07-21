import React from 'react'
import './Bisnes.css'
import { useTranslation } from 'react-i18next'

export default function Bisnes() {
    const {t} = useTranslation()
    return (
        <>
            <section className='bisnes-section py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <h1 className='bisnes-card__title position-relative'>{t('bisnes-section.title')}<span className='under-line position-absolute'></span></h1>
                            <p className='bisnes-card__subtitle'>{t('bisnes-section.subtitle')}</p>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <div className="row g-4">
                                <div className="col-md-6" >
                                    <div className='bisnes-section__card' id='bisnes-card__1'>
                                        <h4>{t('bisnes-section.bisnes-card__1.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__1.text')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className='bisnes-section__card bisnes-section__left' id='bisnes-card__2'>
                                        <h4>{t('bisnes-section.bisnes-card__2.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__2.text')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='bisnes-section__card' id='bisnes-card__3'>
                                        <h4>{t('bisnes-section.bisnes-card__3.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__3.text')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6" >
                                    <div className='bisnes-section__card bisnes-section__left' id='bisnes-card__4'>
                                        <h4>{t('bisnes-section.bisnes-card__4.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__4.text')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className='bisnes-section__card' id='bisnes-card__5'>
                                        <h4>{t('bisnes-section.bisnes-card__5.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__5.text')}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className='bisnes-section__card bisnes-section__left' id='bisnes-card__6'>
                                        <h4>{t('bisnes-section.bisnes-card__6.title')}</h4>
                                        <p>{t('bisnes-section.bisnes-card__6.text')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
