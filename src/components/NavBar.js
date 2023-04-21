import React from 'react'
import '../styles/navbar.css';
import Account from './Account.js';
import SignIn from '../components/auth/SignIn.js';
import SignUp from '../components/auth/SignUp.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button, container, Modal} from 'react-bootstrap';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">Coffee</a>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0 nav justify-content-center">
                        <li className="nav-item">
                            <Link to='/' id="link" className="nav-link" aria-current="page">Home<span
                                className="visually-hidden">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/coffee' className="nav-link" id="link">Coffee Beans</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/single' className="nav-link" id="link">Single Serve</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" id="link">About Us</Link>
                        </li>
                    </ul>

                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton>
                        <Modal.Title>Shopping Cart</Modal.Title>
                        <Modal.Body>
                        <h1>This is the modal body</h1>
                        </Modal.Body>
                        </Modal.Header>
                    </Modal>
                    <div
                    className = "cartModal modal fade in"></div>

                   
                     {/* <span><a href="/cart"><i className="bi bi-cart" id="icon"></i></a></span> */}
                    <Button onClick={handleShow} className="bi bi-cart" id="icon"></Button>

                    <form className="d-flex my-2 my-lg-0">
                    <button
                    type="button"
                    className="bi bi-person-circle px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#accountModal"
                    id="icon"></button>
                    </form>
                </div>
            </div>
        </nav>
        
            <Modal show={show} onHide={handleClose}></Modal>
            <div
                className="modal fade in"
                id="accountModal"
                tabindex="-1"
                aria-labelledby="accountModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            style={{ marginRight: '30rem' }}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <Account />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar