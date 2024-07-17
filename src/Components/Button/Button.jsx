import React from 'react'
import './Button.css'
import Button from 'react-bootstrap/Button';

export default function ButtonCom({text, style}) {
  return (
    <div>
       <button className={style}>{text}</button>
    </div>
  )
}
