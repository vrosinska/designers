import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/general.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";

function Navigation() {

    return (
        <Navbar collapseOnSelect className="fixed-top" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className={styles.logo} href="#home">STYLISH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#offer">Offer</Nav.Link>
                    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <ul className="navbar-nav ml-auto flex-row">
                <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faFacebookF} style={{color: '#4968ad'}}/></a>
                </li>
                <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{color: 'white'}}/></a></li>
                <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{color: '#49a1eb'}}/></a></li>
                <li className="mx-1"><a href="#"><FontAwesomeIcon icon={faYoutube} style={{color: '#eb3223'}}/></a></li>
            </ul>
        </Navbar>
    )
}

export default Navigation;