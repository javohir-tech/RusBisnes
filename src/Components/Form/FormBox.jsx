import React from 'react'
import './FormBox.css'
import { Form } from 'react-bootstrap'
import ButtonCom from '../Button/Button'

export default function FormBox() {
    return (
        <div>
            <div className="box text-center mx-auto position-relative">
                {/* <span className='position-absolute w-100 h-100 nestet-box'></span> */}
                <h3 className='form-box__title'>СТРАТЕГИЯ БЕСПЛАТНО</h3>
                <p className='form-box__subtitle'>Напишу стратегию по Таргетированной Рекламе для Вашей компании бесплатно и презентую ее!КЕЙСЫОТЗЫВЫКОНТАКТЫ</p>
                <Form>
                    <Form.Group className="mb-4">
                        <Form.Control type="text" placeholder="Имя" className='rounded-pill' />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control type="text" placeholder="+380" className='rounded-pill' />
                    </Form.Group>
                    <ButtonCom text={'ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ '} style={'main-button w-100'}/>
                </Form>
            </div>
        </div>
    )
}
