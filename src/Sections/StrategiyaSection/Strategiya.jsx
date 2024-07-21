import React from 'react'
import './Strategiya.css'
import FormBox from '../../Components/Form/FormBox'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'

export default function Strategiya() {
    const {t} = useTranslation()
    return (
        <>
            <section className='strategiya-section py-5' id='lastform'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className='strategiya-title position-relative'>{t('strategiya-section.title')} <span className='position-absolute under-line'></span></h1>
                            <p className='strategiya-subtitle'>{t('strategiya-section.subtitle')}</p>
                        </div>
                        <div className="col-md-6">
                            <FormBox radius={'rounded'} subtitle={t('strategiya-section.form.subtitle')}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
