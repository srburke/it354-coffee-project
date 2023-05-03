import React from 'react'
import '../styles/home.css';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="container-fluid" id="home">
            <div className='container' id="about">
                <h1 className="home-title">More than <br /> a Beverage.</h1>

                <div className="row justify-content-center align-items-center g-2">
                    <div className="col">

                        <h2>Coffee Beans</h2>
                        <p>Browse our variety of coffee beans from all your favorite brands:</p>
                        <ul>
                            <li>Starbucks</li>
                            <li>Dunkin</li>
                            <li>Caribou Coffee</li>
                        </ul>
                    </div>
                    <div className="col"><h2>Single Serve Cups</h2>
                        <p> We sell a wide range of brands in single serve cups. These will work in any coffee machiene that takes single serve cups, including Kerig coffee makers</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home