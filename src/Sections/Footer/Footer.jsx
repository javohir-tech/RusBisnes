import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Facebook, Instagram, PhoneVibrate, Telegram, Whatsapp } from 'react-bootstrap-icons'
import ButtonCom from '../../Components/Button/Button'
import './Footer.css'
import { useTranslation } from 'react-i18next'


export default function Footer() {
    //modal js
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = '7180477169:AAHyLxOhUXx4IGpmM10mtYUJ-nLPiJlgy0o';
    const botId = '1896479864';

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [xabar, setXabar] = useState('');

    const yangila = () =>{
        setName('')
        setNumber('')
        setXabar('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
        name:${name}
        number:${number}
        text:${xabar}
        `
        fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: botId,
                text: message,
            }),
        })
            .then(response => response.json())
            .then(javohir => {
                if (javohir.ok) {
                    setShow(true)
                    yangila()
                }
                else {
                    alert('ishlamadi')
                }
            })
            .catch(error => {
                console.log("Xato", error);
                alert('ishlamadi')
            })

    }
    const {t} = useTranslation();
    return (
        <>
            <footer className='footer-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6  text-center d-flex flex-column justify-content-between">
                            <h1 className='footer-title'>{t('footer.left')}</h1>
                            <div className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <Whatsapp className='ms-3' />
                                    <Telegram className='ms-3' />
                                    <PhoneVibrate className='ms-3' />
                                </div>
                                <div>
                                    <a href="" className='d-block mb-0 ms-2'>+998900072904</a>
                                    <a href="" className='d-block mb-0 ms-2'>+998900072904</a>
                                </div>
                            </div>
                            <div>
                                <a href="">suvonovjavohir@gmail.com</a>
                            </div>
                            <div>
                                <Facebook className='me-4' /> <Instagram />
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h1 className='footer-title text-center'>{t('footer.right')}</h1>
                            <Form className='w-50 mx-auto' onSubmit={handleSubmit}>
                                <Form.Group >
                                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type='text' required placeholder={t('footer.name')} className='mb-4 px-3 py-2' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control value={number} onChange={(e) => setNumber(e.target.value)} type='number' required placeholder={t('footer.number')} className='mb-4 px-3 py-2' />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control value={xabar} onChange={(e) => setXabar(e.target.value)} as="textarea" rows={3} required placeholder={t('footer.xabar')} className='mb-4 rounded px-3 py-2' />
                                </Form.Group>
                                <ButtonCom text={t('footer.button')} style={'main-button w-100'} />
                            </Form>
                        </div>
                    </div>
                    <div className='under-text'>
                        
                        <h3>{t('footer.under-text')}</h3>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{t('footer.modal.header')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{t('footer.modal.body')}</Modal.Body>
                </Modal>
            </footer>
        </>
    )
}
