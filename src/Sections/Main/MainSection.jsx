import React from 'react'
import FormBox from '../../Components/Form/FormBox'
import './MainSection.css'
import NavbarImg from '../../assets/NavbarBrand.png'
import BUttonGruppa from '../../Components/Button/ButtonGruppa/BUttonGruppa'

export default function MainSection() {
    return (
        <>
            <section className='main-section py-3'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className='secret-box text-center mb-3'>
                                <BUttonGruppa/>
                            </div>
                            <div className='d-flex name-box'>
                                <img src={NavbarImg} alt="main-img" className='main-brand' />
                                <div className='d-flex main-section__pasport '>
                                    <h1 className='my-position position-relative'>Таргетолог<span className='under-line position-absolute'></span></h1>
                                    <h1 className='my-name'>Антон Вакуленко</h1>
                                </div>
                            </div>
                            <div className='secret-box text-center my-2'>
                                Комплекс маркетинговых инструментов для Вашего бизнеса
                            </div>
                            <p className='my-info'>Увеличу продажи с помощью рекламы в интернете и предоставлю первые обращения клиентов уже через 48 часов</p>
                        </div>
                        <div className="col-md-6">
                            <FormBox />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
