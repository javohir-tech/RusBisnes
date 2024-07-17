import React, { useState } from 'react'
import './BUttonGruppa.css'

export default function BUttonGruppa() {
    
    const [style, setStyle] = useState('')
    const [style2, setStyle2]= useState('')

    const bosil = () => {
       setStyle('aylan')
       setStyle2('')
    }
    const bosil2 = () => {
        setStyle2('aylan2')
        setStyle('')
     }
    return (
        <div>
            <div className=''>
                <button className='button-lang' id={style} onClick={bosil}>UA</button>
                <button className='button-lang' id={style2} onClick={bosil2}>RU</button>
            </div>
        </div>
    )
}
