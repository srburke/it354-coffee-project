import React from 'react'
import '../styles/navbar.css';
import Account from './Account.js';
import { useState } from 'react';
import SignIn from '../components/auth/SignIn';
import AuthDetails from '../components/auth/AuthDetails';

const NavBar = () => {

    const [showAccount, setAccount] = useState(false);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
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
                            <a className="nav-link" href="/" aria-current="page">Home <span
                                className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/coffee">Coffee Beans</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/single">Single Serve</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/single">About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0">


                        <span><a href="/cart"><i className="bi bi-cart" id="icon"></i></a></span>
                        <span><button onClick={(e) => {
                            e.preventDefault();
                            setAccount(!showAccount);
                        }}><i className="bi bi-person-circle px-3" id="icon"></i></button>
                            {showAccount && (
                                <AuthDetails />
                            )}</span>


                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar