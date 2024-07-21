import React from 'react'
import FormBox from '../../Components/Form/FormBox'
import './MainSection.css'
import NavbarImg from '../../assets/NavbarBrand.png'
import BUttonGruppa from '../../Components/Button/ButtonGruppa/BUttonGruppa'
import { useTranslation } from 'react-i18next'

export default function MainSection() {
    const { t } = useTranslation();
    return (
        <>
            <section className='main-section py-3' id='home'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className='secret-box text-center mb-3'>
                                <BUttonGruppa/>
                            </div>
                            <div className='d-flex name-box'>
                                <img src={NavbarImg} alt="main-img" className='main-brand' />
                                <div className='d-flex main-section__pasport '>
                                    <h1 className='my-position position-relative'>{t('main.my-position')}<span className='under-line position-absolute'></span></h1>
                                    <h1 className='my-name'>{t('main.my-name')}</h1>
                                </div>
                            </div>
                            <div className='secret-box text-center my-2'>
                                {t('main.secret-box')}
                            </div>
                            <p className='my-info'>{t('main.my-info')}</p>
                        </div>
                        <div className="col-md-6">
                            <FormBox subtitle={t('main.subtitle')}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
