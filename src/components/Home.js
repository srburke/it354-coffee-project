import React from 'react'
import '../styles/home.css';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

// import '.../'

const Home = () => {
    return (
        <div className="container-fluid" id="home">
            <div className='container' id="intro">
                <div class="row">
                    <div class="col-lg-6" id="intro-title">
                        <h1 className="text-lg-start text-md-center text-sm-center home-title">More than <br /> a Beverage.</h1>
                        <button type="button" class="btn btn-primary" id="subscribe-btn" style={{ marginTop: "1rem" }}>Subscribe</button>
                    </div>
                    <div class="col-lg-6" id="intro-photo">
                        <img src="./images/coffeePhoto.jpg" alt="Coffee Photo" id="introImg" />
                    </div>

                </div>


            </div>

            <div className='container' id="about">
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