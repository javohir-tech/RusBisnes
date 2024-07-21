import React, { useState } from 'react'
import './Result.css'
import BisnesCard from '../../Components/BisnesCard/BisnesCard'
import { useTranslation } from 'react-i18next'

export default function Result() {

    const [open, setOpen] = useState('d-none')

    const OpenNewCards = () => {
        setOpen('d-block')
    }
     
    const { t } = useTranslation();
    return (
        <>
            <div className='container'>
                <section className='result-section py-5'>
                    <div className='result-section__header text-center'>
                        <h1 className='result-section__title mb-3 position-relative'>{t('result-section.title')}<span className='under-line result-under_line position-absolute'></span></h1>
                        <h4 className='result-section__subtitle mx-auto'>{t('result-section.subtitle')}</h4>
                    </div>
                    {/* 1-card */}
                    <BisnesCard id={'card-1'}
                        title={t('result-section.card-1.title')}
                        style={'bisnes-card mt-5'}
                        subtitle={t('result-section.card-1.subtitle')}
                        styletwo={'bisnes-card__data left'}
                        reklam={'2800$'} reklamTitle={t('result-section.card-1.reklamTitle')}
                        sell={'90'} sellTitle={t('result-section.card-1.sellTitle')} benefit={'3,6 млн$'} benefitTitle={t('result-section.card-1.benefitTitle')} buttonText={t('result-section.card-1.buttonText')}
                    />
                    {/* 2-card */}
                    <BisnesCard id={'card-2'}
                        title={t('result-section.card-2.title')}
                        styletwo={'bisnes-card__data rigth'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={t('result-section.card-2.subtitle')}
                        reklam={'2594$'} reklamTitle={t('result-section.card-2.reklamTitle')}
                        sell={'473'} sellTitle={t('result-section.card-2.sellTitle')} benefit={'56 059$'} benefitTitle={t('result-section.card-2.benefitTitle')} buttonText={t('result-section.card-2.buttonText')}
                    />
                    {/* 3-card */}
                    <BisnesCard id={'card-3'}
                        title={t('result-section.card-3.title')}
                        styletwo={'bisnes-card__data left'}
                        style={'bisnes-card mt-5 me-auto'}
                        subtitle={t('result-section.card-3.subtitle')}
                        reklam={'500'} reklamTitle={t('result-section.card-3.reklamTitle')}
                        sell={'0,8$'} sellTitle={t('result-section.card-3.sellTitle')} benefit={'2 мес.'} benefitTitle={t('result-section.card-3.benefitTitle')} buttonText={t('result-section.card-3.buttonText')}
                    />
                    {/* new Cards */}
                    <div className='my-5 text-center'>
                        {open !== "d-none" ? "" : <button className='open-button px-5 py-3 rounded-pill bg-primary text-light border-0' onClick={OpenNewCards}>Больше кейсов</button>}
                    </div>
                    {/* 4-card */}
                    <div className={open}>
                        <BisnesCard id={'card-4'}
                            title={t}
                            styletwo={'bisnes-card__data rigth'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={t('result-section.card-4.subtitle')}
                            reklam={'2594'} reklamTitle={t('result-section.card-4.reklamTitle')}
                            sell={'473'} sellTitle={t('result-section.card-4.sellTitle')} benefit={'56 059'} benefitTitle={t('result-section.card-4.benefitTitle')} buttonText={t('result-section.card-4.buttonText')}
                        />
                        {/* 5-card */}
                        <BisnesCard id={'card-5'}
                            title={t('result-section.card-5.title')}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={t('result-section.card-5.subtitle')}
                            reklam={'1200'} reklamTitle={t('result-section.card-5.reklamTitle')}
                            sell={'0,87$'} sellTitle={t('result-section.card-5.sellTitle')} benefit={'2 мес.'} benefitTitle={t('result-section.card-5.benefitTitle')} buttonText={t('result-section.card-5.buttonText')}
                        />
                        {/* 6-card */}
                        <BisnesCard id={'card-6'}
                            title={t('result-section.card-6.title')}
                            styletwo={'bisnes-card__data rigth'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={t('result-section.card-6.subtitle')}
                            reklam={'15000$'} reklamTitle={t('result-section.card-6.reklamTitle')}
                            sell={'800$'} sellTitle={t('result-section.card-6.sellTitle')} benefit={'1 мес.'} benefitTitle={t('result-section.card-6.benefitTitle')} buttonText={t('result-section.card-6.buttonText')}
                        />
                    </div>
                </section>
            </div>
        </>
    )
}
