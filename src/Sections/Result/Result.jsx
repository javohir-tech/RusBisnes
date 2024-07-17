import React from 'react'
import './Result.css'
import BisnesCard from '../../Components/BisnesCard/BisnesCard'

export default function Result() {
    return (
        <>
            <div className='container'>
                <section className='result-section py-5'>
                    <div className='result-section__header text-center'>
                        <h1 className='result-section__title mb-3 position-relative'>Результаты моих клиентов<span className='under-line result-under_line position-absolute'></span></h1>
                        <h4 className='result-section__subtitle mx-auto'>Ознакомьтесь с моими кейсами, где с помощью инструментов таргетированной рекламы я сгенерировал более 1 000 000$ прибыли клиентам</h4>
                    </div>

                    <BisnesCard id={'card-1'}
                        title={'Пригон элитных авто'}
                        style={'bisnes-card mt-5'}
                        subtitle={'Пригон элитных автомобилей под заказ'}
                        styletwo={'bisnes-card__data left'}
                        reklam={'2800'} reklamTitle={'Инвестиции в рекламу'}
                        sell={'90'} sellTitle={'Продажи'} benefit={'3,6 млн'} benefitTitle={'Продали авто на'} buttonText={'ХОЧУ ТАК ЖЕ'}
                    />
                    <BisnesCard id={'card-2'}
                        title={'Realty Summit'}
                        styletwo={'bisnes-card__data rigth'}
                        style={'bisnes-card mt-5 ms-auto'}
                        subtitle={'Продажа билетов на саммит.'}
                        reklam={'2594'} reklamTitle={'Инвестиции в рекламу'}
                        sell={'473'} sellTitle={'Продажи'} benefit={'56 059'} benefitTitle={'Чистой прибыли'} buttonText={'ХОЧУ ТАК ЖЕ'}
                    />,

                </section>
            </div>
        </>
    )
}
