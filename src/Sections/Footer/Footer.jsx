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
    const botId = '-1002199524677';

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [xabar, setXabar] = useState('');

    const yangila = () => {
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
    const { t } = useTranslation();
    return (
        <>
            <footer className='footer-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 text-center d-flex flex-column justify-content-between footer-links">
                            <h1 className='footer-title'>{t('footer.left')}</h1>
                            <div className='d-flex flex-column flex-md-row  justify-content-center align-items-center'>
                                <div>
                                    <a href="#">
                                        <Whatsapp className='ms-3' />
                                    </a>
                                    <a href="#" ><Telegram className='ms-3' /></a>
                                    <a href="tel:+998931693454"><PhoneVibrate className='ms-3' /></a>
                                </div>
                                <div>
                                    <a href="tel:+998931693454" className='d-block my-3 ms-2'>+998931693454</a>
                                </div>
                            </div>
                            <div>
                                <a href="#">LatifovIzzatbek</a>
                            </div>
                            <div className='my-2'>
                                <a href="https://www.facebook.com/" target='_blank'><Facebook className='me-4' /></a><a href="https://www.instagram.com/latifov_izzat?igsh=MTh6d3I3M2V1cnFmYg%3D%3D" target='_blank'><Instagram /></a>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h1 className='footer-title text-center'>{t('footer.right')}</h1>
                            <Form className='footer-form mx-auto' onSubmit={handleSubmit}>
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
                    <div className='text-center my-5'>
                        <h3 className='footer-under__text'>{t('footer.under-text')}</h3>
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
