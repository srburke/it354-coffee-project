import React from 'react'
import '../styles/home.css';

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

            
        </div>
    )
}

export default Home