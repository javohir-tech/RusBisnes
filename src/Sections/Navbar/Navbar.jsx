import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import { Form } from 'react-bootstrap';
import { useState } from 'react';  
import NavbarImg from '../../assets/NavbarBrand.png' 
import BUttonGruppa from '../../Components/Button/ButtonGruppa/BUttonGruppa';

export default function NavbarRu() {

    const [expended, setExpended] = useState(false);

    const handleNavClick = () => {
        setExpended(false)
    }

    return (
        <div>
            <Navbar expanded={expended} expand="lg" className="navbar-section" onToggle={() => setExpended(!expended)}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={NavbarImg} alt="navbar-img" className='navbar-img' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='z-3 navbar-collapse'>
                        <Nav className="mx-auto" onClick={handleNavClick}>
                            <Nav.Link className='nav-link mx-3 px-4 p-2' href="#home">КЕЙСЫ</Nav.Link>
                            <Nav.Link className='nav-link mx-4 px-3 py-2' href="#about">ОТЗЫВЫ</Nav.Link>
                            <Nav.Link className='nav-link mx-4 px-3 py-2' href="#tours">КОНТАКТЫ</Nav.Link>
                        </Nav>
                        <div className='social_media d-flex align-items-center p-3'>
                            <BUttonGruppa/>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
