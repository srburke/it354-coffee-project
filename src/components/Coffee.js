import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { collection, query, doc, getDocs, getDoc, where, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const Coffee = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`;

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id, " => ", doc.data());
                })
                setProducts(productsArray);
            }).catch((error) => {
                console.log(error.message);
            });
        }
        getProducts();
    }, [])


    return (
        
            <div className="container" style={{ background: "hsla(23, 39%, 9%, 1)"}}>
                <Row xs={1} md={3} className="g-4" style={{marginTop: "1.5rem", paddingBottom: "3rem"}}>
                    {products.map((product) => (
                        <Col align="center">
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        </Col>
                    ))}

                </Row>
                
            
        </div>


        
    )
}
export default Coffee;
