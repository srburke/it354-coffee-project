import React from 'react'
import '../styles/navbar.css';
import Account from './Account.js';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, container, Modal } from 'react-bootstrap';
import Cart from './Cart.js'




const NavBar = (GetCurrentUser) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand " href="/">Coffee Caravan</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' id="link" className="nav-link" aria-current="page">Home<span
                                    className="visually-hidden">(current)</span></Link>
                            </li>
                            <li class="nav-item dropdown" id="link">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Coffee Bags
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href='/coffee-type/light' className="nav-link" id='link'>Light</a></li>
                                    <li><a href='/coffee-type/medium' className="nav-link" id="link">Medium</a></li>
                                    <li><a href='/coffee-type/dark' className="nav-link" id="link">Dark</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/coffee-type/medium' className="nav-link" id="link">Coffee Beans</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/single' className="nav-link" id="link">Single Serve</Link>
                            </li>

                        </ul>


                        {/* <button onClick={handleShow} className="bi bi-cart" id="icon"></button> */}
                        <button
                            type="button"
                            className="bi bi-cart"
                            data-bs-toggle="modal"
                            data-bs-target="#cartModal"
                            id="icon"></button>
                        <button
                            type="button"
                            className="bi bi-person-circle px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#accountModal"
                            id="icon"></button>

                    </div>
                </div>
            </nav>



            <div
                className="modal fade in"
                id="cartModal"
                tabindex="-1"
                aria-labelledby="cartModalLabel"
                aria-hidden="true"
            >
                <div className="container" id="cart-content">
                    <div className="modal-dialog modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className='modal-title'>Your Cart</h3>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"

                                ></button>

                            </div>

                            <div className="modal-body">
                                <Cart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart:</p>
                            {cart.items.map((currentProduct, idx) => (
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                            ))}
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
                            <Button variant="success">
                                Purchase items!
                            </Button>
                        </>

                        : <h1>There are no items in your cart!</h1>
                    }
                </Modal.Body>
            </Modal> */}


            {/* <Modal show={show} onHide={handleClose}></Modal> */}
            <div
                className="modal fade in"
                id="accountModal"
                tabindex="-1"
                aria-labelledby="accountModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content" id="account-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"

                            ></button>
                        </div>
                        <div className="modal-body">
                            <Account />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;