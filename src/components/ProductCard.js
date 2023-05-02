import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import '../styles/productCard.css';
import { createContext, useContext } from "react";
import { CartContext } from './CartContext';


const ProductCard = (product) => {
    // const product = props.product

    const cart = useContext(CartContext);
    // const { products } = useContext(ProductContext);
    // const productQuantity = cart.getProductQuantity(product.id);
    return (

        <>

            <Card>

                <Card.Body>
                    <Card.Img variant="top" src={product.product.productImg} className="images" />
                    <Card.Title>{product.product.companyName} - {product.product.productName}</Card.Title>
                    <Card.Text>${product.product.productPrice}</Card.Text>
        

                    <Button variant="primary" data-bs-toggle="modal"
                        data-bs-target="#cartModal" onClick={() => cart.addOneToCart(product.product.id)}>Add to Cart</Button>

                </Card.Body>


            </Card >

        </>

    )





}
export default ProductCard;
