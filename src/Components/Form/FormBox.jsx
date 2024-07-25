import React, { useState } from 'react'
import './FormBox.css'
import { Form, Modal } from 'react-bootstrap'
import ButtonCom from '../Button/Button'
import axios from 'axios';
import { t } from 'i18next';

export default function FormBox({radius, subtitle}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const yangila = () => {
        setName('');
        setNumber('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const bot_token = '7180477169:AAHyLxOhUXx4IGpmM10mtYUJ-nLPiJlgy0o'; // Bot tokenini kiriting
        const bot_id = '-1002199524677'; // Chat ID-ni kiriting

        const message = `
        Name: ${name}
        Number: ${number}
        `;

        fetch(`https://api.telegram.org/bot${bot_token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: bot_id,
                text: message,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    setShow(true)
                    yangila()
                } else {
                    alert('Ma\'lumot yuborishda xato yuz berdi.');
                }
            })
            .catch(error => {
                console.error('Xato:', error);
                alert('Xato yuz berdi.');
            });
    }



    return (
        <div>
            <div className={`box text-center mx-auto position-relative ${radius}`}>
                {/* <span className='position-absolute w-100 h-100 nestet-box'></span> */}
                <h3 className='form-box__title'>{t('form.title')}</h3>
                <p className='form-box__subtitle'>{subtitle}</p>
                <Form onSubmit={handleSubmit} className='main-form'>
                    <Form.Group className="mb-4">
                        <Form.Control type="text" placeholder={t('form.name')} onChange={(e) => setName(e.target.value)} value={name} required className='rounded-pill' />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control min={0} type="number" placeholder={t('form.number')} onChange={(e) => setNumber(e.target.value)} value={number} className='rounded-pill' required />
                    </Form.Group>
                    <ButtonCom text={t('form.button')} style={'main-button w-100'}/>
                </Form>
                <Modal show={show} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{t('modal.title')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{t('modal.body')}</Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
