import React from 'react';
import '../styles/style.css';
import '../styles/coffee.css';
import {Row, Col} from 'react-bootstrap';
import {productsArray} from './productsStore';
import ProductCard from '../components/ProductCard';

function Coffee() {
    return (
        <>
        <div className="bg">
        <body>
        <h1 align="center" className="p-3"> Welcome to the store!</h1>
        <Row xs={1} md={3} className="g-4">
            {productsArray.map((product, idx) => (
                <Col align="center" key={idx}>
                <ProductCard product= {product} /> 
                </Col>
            ))}
           
            
        </Row>
        </body>
        </div>
       
            </>
    )
}

export default Coffee;