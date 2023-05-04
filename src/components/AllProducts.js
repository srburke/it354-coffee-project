import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const AllProducts = (props) => {
    const [products, setProducts] = useState([]);

    /** Fetches products from Firestore when the component mounts, using the
     * getDocs function from Firebase to retrieve documents from the Firestore collection.
     * Adding each document's data to an array and sets the products state variable to
     * that array.
     */
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
export default AllProducts;
