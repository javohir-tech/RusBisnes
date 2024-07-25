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
                        reklam={'4500'} reklamTitle={t('result-section.card-1.reklamTitle')}
                        sell={'0.35$'} sellTitle={t('result-section.card-1.sellTitle')} buttonText={t('result-section.card-1.buttonText')}
                    />
                    {/* 2-card */}
                    <BisnesCard id={'card10'}
                        title={t('result-section.card-10.title')}
                        styletwo={'bisnes-card__data right'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={t('result-section.card-10.subtitle')}
                        reklam={'1500'} reklamTitle={t('result-section.card-10.reklamTitle')}
                        sell={'0.17$'} sellTitle={t('result-section.card-10.sellTitle')} buttonText={t('result-section.card-10.buttonText')}
                    />
                    {/* 3-card */}
                    {/* <BisnesCard id={'card-3'}
                            title={t('result-section.card-3.title')}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={t('result-section.card-3.subtitle')}
                            reklam={'89'} reklamTitle={t('result-section.card-3.reklamTitle')}
                            sell={'0.40$'} sellTitle={t('result-section.card-3.sellTitle')} buttonText={t('result-section.card-3.buttonText')}
                        /> */}
                    <BisnesCard id={'card-4'}
                        title={t('result-section.card-4.title')}
                        styletwo={'bisnes-card__data left'}
                        style={'bisnes-card mt-5 me-auto'}
                        subtitle={t('result-section.card-4.subtitle')}
                        reklam={'626'} reklamTitle={t('result-section.card-4.reklamTitle')}
                        sell={'0.32$'} sellTitle={t('result-section.card-4.sellTitle')} buttonText={t('result-section.card-4.buttonText')}
                    />
                    {/* 5-card */}
                    <BisnesCard id={'card-12'}
                        title={t('result-section.card-12.title')}
                        styletwo={'bisnes-card__data right'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={t('result-section.card-12.subtitle')}
                        reklam={'25000'} reklamTitle={t('result-section.card-12.reklamTitle')}
                        sell={'0.006$'} benefit={'3000$'} benefitTitle={t('result-section.card-12.benefitTitle')} sellTitle={t('result-section.card-12.sellTitle')} buttonText={t('result-section.card-12.buttonText')}
                    />
                    {/* 6-card */}
                    <BisnesCard id={'card-6'}
                        title={t('result-section.card-6.title')}
                        styletwo={'bisnes-card__data left'}
                        style={'bisnes-card mt-5 me-auto'}
                        subtitle={t('result-section.card-6.subtitle')}
                        reklam={'494'} reklamTitle={t('result-section.card-6.reklamTitle')}
                        sell={'0.33$'} sellTitle={t('result-section.card-6.sellTitle')} buttonText={t('result-section.card-6.buttonText')}
                    />
                    {/* 7-card */}
                    <BisnesCard id={'card-7'}
                        title={t('result-section.card-7.title')}
                        styletwo={'bisnes-card__data right'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={t('result-section.card-7.subtitle')}
                        reklam={'100'} reklamTitle={t('result-section.card-7.reklamTitle')}
                        sell={'0.55$'} sellTitle={t('result-section.card-7.sellTitle')} buttonText={t('result-section.card-7.buttonText')}
                    />
                    {/* 8-card */}
                    <BisnesCard id={'card-8'}
                        title={t('result-section.card-8.title')}
                        styletwo={'bisnes-card__data left'}
                        style={'bisnes-card mt-5 me-auto'}
                        subtitle={t('result-section.card-8.subtitle')}
                        reklam={'3022'} reklamTitle={t('result-section.card-8.reklamTitle')}
                        sell={'0.10$'} benefit={'500$'} benefitTitle={t('result-section.card-8.benefitTitle')} sellTitle={t('result-section.card-8.sellTitle')} buttonText={t('result-section.card-8.buttonText')}
                    />
                    {/* 9-card */}
                    <BisnesCard id={'card-9'}
                        title={t('result-section.card-9.title')}
                        styletwo={'bisnes-card__data right'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={t('result-section.card-9.subtitle')}
                        reklam={'899'} reklamTitle={t('result-section.card-9.reklamTitle')}
                        sell={'0.12$'} benefit={'300$'} benefitTitle={t('result-section.card-9.benefitTitle')} sellTitle={t('result-section.card-9.sellTitle')} buttonText={t('result-section.card-9.buttonText')}
                    />
                    {/* new Cards */}
                    <div className='my-5 text-center'>
                        {open !== "d-none" ? "" : <button className='open-button px-5 py-3 rounded-pill bg-primary text-light border-0' onClick={OpenNewCards}>{t('newButton')}</button>}
                    </div>
                    {/* 4-card */}
                    <div className={open}>

                        {/* 2-card */}
                        <BisnesCard id={'card-2'}
                            title={t('result-section.card-2.title')}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={t('result-section.card-2.subtitle')}
                            reklam={'1000'} reklamTitle={t('result-section.card-2.reklamTitle')}
                            sell={'0.33$'} sellTitle={t('result-section.card-2.sellTitle')} buttonText={t('result-section.card-2.buttonText')}
                        />
                        {/* 11-card */}
                        <BisnesCard id={'card-11'}
                            title={t('result-section.card-11.title')}
                            styletwo={'bisnes-card__data right'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={t('result-section.card-11.subtitle')}
                            reklam={'600'} reklamTitle={t('result-section.card-11.reklamTitle')}
                            sell={'1$'} sellTitle={t('result-section.card-11.sellTitle')} buttonText={t('result-section.card-11.buttonText')}
                        />
                        {/* 5-card */}
                        <BisnesCard id={'card-5'}
                            title={t('result-section.card-5.title')}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={t('result-section.card-5.subtitle')}
                            reklam={'89'} reklamTitle={t('result-section.card-5.reklamTitle')}
                            sell={'0.40$'} sellTitle={t('result-section.card-5.sellTitle')} buttonText={t('result-section.card-5.buttonText')}
                        />
                        {/* 13-card */}
                        <BisnesCard id={'card-13'}
                            title={t('result-section.card-13.title')}
                            styletwo={'bisnes-card__data right'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={t('result-section.card-13.subtitle')}
                            reklam={'500'} reklamTitle={t('result-section.card-13.reklamTitle')}
                            sell={'0.17$'} sellTitle={t('result-section.card-13.sellTitle')} buttonText={t('result-section.card-13.buttonText')}
                        />
                        {/* 14-card */}
                        <BisnesCard id={'card-14'}
                            title={t('result-section.card-14.title')}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={t('result-section.card-14.subtitle')}
                            reklam={'1500'} reklamTitle={t('result-section.card-14.reklamTitle')}
                            sell={'0.17$'} sellTitle={t('result-section.card-14.sellTitle')} buttonText={t('result-section.card-14.buttonText')}
                        />
                    </div>
                </section>
            </div>
        </>
    )
}
