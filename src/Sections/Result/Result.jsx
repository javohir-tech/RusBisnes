import React, { useState } from 'react'
import './Result.css'
import BisnesCard from '../../Components/BisnesCard/BisnesCard'

export default function Result() {

    const [open, setOpen] = useState('d-none')

    const OpenNewCards = () => {
        setOpen('d-block')
    }

    return (
        <>
            <div className='container'>
                <section className='result-section py-5'>
                    <div className='result-section__header text-center'>
                        <h1 className='result-section__title mb-3 position-relative'>Результаты моих клиентов<span className='under-line result-under_line position-absolute'></span></h1>
                        <h4 className='result-section__subtitle mx-auto'>Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал более 1 000 000$ прибыли клиентам</h4>
                    </div>
                    {/* 1-card */}
                    <BisnesCard id={'card-1'}
                        title={'Пригон элитных авто'}
                        style={'bisnes-card mt-5'}
                        subtitle={'Пригон элитных автомобилей под заказ'}
                        styletwo={'bisnes-card__data left'}
                        reklam={'2800$'} reklamTitle={'Инвестиции в рекламу'}
                        sell={'90'} sellTitle={'Продажи'} benefit={'3,6 млн$'} benefitTitle={'Продали авто на'} buttonText={'ХОЧУ ТАК ЖЕ'}
                    />
                    {/* 2-card */}
                    <BisnesCard id={'card-2'}
                        title={'Realty Summit'}
                        styletwo={'bisnes-card__data rigth'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={'Продажа билетов на саммит.'}
                        reklam={'2594$'} reklamTitle={'Инвестиции в рекламу'}
                        sell={'473'} sellTitle={'Продажи'} benefit={'56 059$'} benefitTitle={'Чистой прибыли'} buttonText={'ОБСУДИТЬ ПРОЕКТ'}
                    />
                    {/* 3-card */}
                    <BisnesCard id={'card-3'}
                        title={'Пригон авто из США'}
                        styletwo={'bisnes-card__data left'}
                        style={'bisnes-card mt-5 me-auto'}
                        subtitle={'Продажа билетов на саммит.'}
                        reklam={'500'} reklamTitle={'целевых обращений'}
                        sell={'0,8$'} sellTitle={'стоимость заявки'} benefit={'2 мес.'} benefitTitle={'длительность кампании'} buttonText={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}
                    />
                    {/* new Cards */}
                    <div className='my-5 text-center'>
                        {open !== "d-none" ? "" : <button className='open-button px-5 py-3 rounded-pill bg-primary text-light border-0' onClick={OpenNewCards}>Больше кейсов</button>}
                    </div>
                    {/* 4-card */}
                    <div className={open}>
                        <BisnesCard id={'card-4'}
                            title={'TOWNHOUSE'}
                            styletwo={'bisnes-card__data rigth'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={'Продажа таун-хаусов'}
                            reklam={'2594'} reklamTitle={'Инвестиции в рекламу'}
                            sell={'473'} sellTitle={'Продажи'} benefit={'56 059'} benefitTitle={'Чистой прибыли'} buttonText={'ХОЧУ ТАК ЖЕ'}
                        />
                        {/* 5-card */}
                        <BisnesCard id={'card-5'}
                            title={'Большие киндеры'}
                            styletwo={'bisnes-card__data left'}
                            style={'bisnes-card mt-5 me-auto'}
                            subtitle={'Привлечение клиентов покупку больших подарочных киндеров'}
                            reklam={'1200'} reklamTitle={'целевых обращений'}
                            sell={'0,87$'} sellTitle={'стоимость заявки'} benefit={'2 мес.'} benefitTitle={'длительность кампании'} buttonText={'ОБСУДИТЬ ПРОЕКТ'}
                        />
                        {/* 6-card */}
                        <BisnesCard id={'card-6'}
                            title={'Продажа елок в США'}
                            styletwo={'bisnes-card__data rigth'}
                            style={'bisnes-card mt-5 ms-auto'}
                            subtitle={'Продажа дизайнерских деревянных елок на территории США'}
                            reklam={'15000$'} reklamTitle={'продали на сумму'}
                            sell={'800$'} sellTitle={'рекламный бюджет'} benefit={'1 мес.'} benefitTitle={'длительность кампании'} buttonText={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ'}
                        />
                    </div>

                </section>
            </div>
        </>
    )
}
