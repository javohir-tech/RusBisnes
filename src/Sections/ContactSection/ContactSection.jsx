import React, { useState } from 'react'
import './ContactSection.css'
import { Button, Form, Modal } from 'react-bootstrap'
import Rahbar from '../../assets/rahbar.jpg'
import { useTranslation } from 'react-i18next';


export default function ContactSection() {

    //modal js
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const token = '7180477169:AAHyLxOhUXx4IGpmM10mtYUJ-nLPiJlgy0o';
    const botId = '-1002199524677'
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [region, setRegion] = useState('');
    const [chek, setChek] = useState('');
    const [clients, setClients] = useState(0)

    const newInputs = () => {
        setName("");
        setNumber("");
        setRegion("");
        setClients(0);
        setChek("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
            name:${name}
            number:${number} 
            region:${region}
            chek:${chek}
            clients:${clients}
        `;


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
            .then(data => {
                if (data.ok) {
                    setShow(true)
                    newInputs()
                } else {
                    alert('Ma\'lumot yuborishda xato yuz berdi.');
                }
            })
            .catch(error => {
                console.error('Xato:', error);
                alert('Xato yuz berdi.');
            });
    }

    const { t } = useTranslation()
    return (
        <>
            <section className='contact-section my-5' id='contacts'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 contact-section__form p-2">
                            <h3 className='mb-4 text-center'>{t('contact-section.title')}</h3>
                            <p className='mb-5 text-center'>{t('contact-section.subtitle')}</p>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder={t('contact-section.name')} className='mb-4 rounded-pill py-2 px-3' value={name} onChange={(e) => setName(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='number' min="0" placeholder="+998" className='mb-4 rounded-pill py-2 px-3' value={number} onChange={(e) => setNumber(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder={t('contact-section.region')} className='mb-4 rounded-pill py-2 px-3' value={region} onChange={(e) => setRegion(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder={t('contact-section.chek')} className='mb-4 rounded-pill py-2 px-3' value={chek} onChange={(e) => setChek(e.target.value)} required />
                                    </Form.Group>
                                    <p>{t('contact-section.clients')}</p>
                                    <Form.Label>Clients: {clients}</Form.Label> {/* Qo'shilgan qator */}
                                    <Form.Range
                                        min="0"
                                        max="500"
                                        step="1"
                                        value={clients}
                                        onChange={(e) => setClients(e.target.value)}
                                        required
                                    />
                                    <Form.Text id="passwordHelpBlock" className='range-footer' muted>
                                       <div className='d-flex justify-content-between'>
                                        <p className='text-light'>min:0</p>
                                        <p className='text-light'>max:500</p>
                                       </div>
                                    </Form.Text>
                                    <Button variant='primary' className='w-100 mt-4 rounded-pill py-3' type='submit'>{t('contact-section.send')}</Button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 p-2">
                            <div className='d-flex'>
                                <img src={Rahbar} alt="vakulekko img" className='img-fluid boss-img mx-auto e' />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{t('contact-section.modal.header')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{t('contact-section.modal.body')}</Modal.Body>
                </Modal>
            </section>
        </>
    )
}
