import React from 'react'
import './Strategiya.css'
import FormBox from '../../Components/Form/FormBox'

export default function Strategiya() {
    return (
        <>
            <section className='strategiya-section py-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className='strategiya-title position-relative'>Готовы к потоку клиентов? <span className='position-absolute under-line'></span></h1>
                            <p className='strategiya-subtitle'>Увеличу продажи с помощью рекламы в интернете и предоставлю первые обращения клиентов уже через 48 часов</p>
                        </div>
                        <div className="col-md-6">
                            <FormBox radius={'rounded'} subtitle={'Заполняйте форму и получите от меня бесплатную стратегию по привлечению клиентов в Ваш бизнес!'}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
