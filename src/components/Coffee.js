import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/coffee.css';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Coffee = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`;
            console.log(props);

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
    console.log(props.type)

    function getProductData(id) {
        let productData = products.find(product => product.id === id)

        if (productData == undefined) {
            console.log("Product data does not exist for ID: " + id);
            return undefined;
        }
        return productData;
    }


    return (
        <>
            <div className="container">
                <Row xs={1} md={3} className="g-4" id="coffeeRow">
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

        </>
    )
}
export default Coffee;






{/* <ProductCard /> */ }


{/* <Row xs={1} md={3} className="g-4" id="coffeeRow">
                    {productsArray.map((product, idx) => (
                        <Col align="center" key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row> */}
