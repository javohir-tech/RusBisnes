import React, { useEffect, useState } from 'react'
import './BUttonGruppa.css'
import { useTranslation } from 'react-i18next';

export default function BUttonGruppa() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const [style, setStyle] = useState('')
    const [style2, setStyle2] = useState('aylan2')

    const bosil = () => {
        setStyle('aylan')
        setStyle2('')
        i18n.changeLanguage('uz');
    }
    const bosil2 = () => {
        setStyle2('aylan2')
        setStyle('')
        i18n.changeLanguage('ru');
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng') || 'ru';
        if (savedLanguage === 'uz') {
            setStyle('aylan');
            setStyle2('');
        } else {
            setStyle2('aylan2');
            setStyle('');
        }
    }, []);

    return (
        <div>
            <div className=''>
                <button className='button-lang' id={style} onClick={() => { changeLanguage('uz'); bosil() }}>UZ</button>
                <button className='button-lang' id={style2} onClick={() => { changeLanguage('ru'); bosil2() }}>RU</button>
            </div>
        </div>
    )
}
