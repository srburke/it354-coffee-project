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
                    {/* {productQuantity > 0 ?
       <>
           <Form as={Row}>
               <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
               <Col sm="6">
                   <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className="mx-2">+</Button>
                   <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className="mx-2">-</Button>
               </Col>
           </Form>
           <Button variant="danger" onClick={() => cart.deleteFromCart(product.id)} className="my-2">Remove From Cart</Button>
       </>
       :
       <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
   } */}

                    <Button variant="primary" data-bs-toggle="modal"
                        data-bs-target="#cartModal" onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>

                </Card.Body>


            </Card >

        </>

    )





}
export default ProductCard;
