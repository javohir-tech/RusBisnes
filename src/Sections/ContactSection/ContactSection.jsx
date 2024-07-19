import React, { useState } from 'react'
import './ContactSection.css'
import { Button, Form, Modal } from 'react-bootstrap'
import Rahbar from '../../assets/dalbayop.jpeg'

export default function ContactSection() {

    //modal js
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const token = '7180477169:AAHyLxOhUXx4IGpmM10mtYUJ-nLPiJlgy0o';
    const botId = '1896479864'
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

    return (
        <>
            <section className='contact-section my-5'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5 contact-section__form p-2">
                            <h3 className='mb-4 text-center'>Есть конкретная цель?</h3>
                            <p className='mb-5 text-center'>Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей</p>
                            <div>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Имя' className='mb-4 rounded-pill py-2 px-3' value={name} onChange={(e) => setName(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='number' placeholder='telefon number' className='mb-4 rounded-pill py-2 px-3' value={number} onChange={(e) => setNumber(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Регион продвижения' className='mb-4 rounded-pill py-2 px-3' value={region} onChange={(e) => setRegion(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='text' placeholder='Средний чек' className='mb-4 rounded-pill py-2 px-3' value={chek} onChange={(e) => setChek(e.target.value)} required />
                                    </Form.Group>
                                    <p>Сколько клиентов необходимо до цели?</p>
                                    <Form.Range min={"0"} max={"500"} step={"1"} value={clients} onChange={(e) => setClients(e.target.value)} required />
                                    <Button variant='primary' className='w-100 mt-4 rounded-pill py-3' type='submit'>УЗНАТЬ РЕЗУЛЬТАТ</Button>
                                </Form>
                            </div>
                        </div>
                        <div className="col-md-6 offset-md-1 p-2">
                            <div className='d-flex'>
                                <img src={Rahbar} alt="vakulekko img" className='img-fluid boss-img mx-auto position-relative' />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose} size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Maluotlar Jo'natildi</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tez orada sizga aloqaga chiqamiz</Modal.Body>
                </Modal>
            </section>
        </>
    )
}
