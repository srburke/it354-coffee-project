import React from 'react'
import '../styles/home.css';

const Home = () => {
    return (
        <div className="container-fluid" id="home">
            <div className='container'>
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
                    <div className="col">Single Serve Cups</div>
                </div>
            </div>
        </div>
    )
}

export default Home