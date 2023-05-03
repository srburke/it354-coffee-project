import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import '../styles/productCard.css';

const ProductCard = ({ product, addToCart }) => {
    // const product = props.product
    // const { products } = useContext(ProductContext);
    // const productQuantity = cart.getProductQuantity(product.id);
    // const handleAddToCart = () => {
    //     addToCart();
    // }

    return (
        <>

            <Card>

                <Card.Body>
                    <Card.Img variant="top" src={product.productImg} className="images" />
                    <Card.Title>{product.companyName} - {product.productName}</Card.Title>
                    <Card.Text>${product.productPrice}</Card.Text>

                    <Button variant="primary" data-bs-toggle="modal"
                        data-bs-target="#cartModal" onClick={addToCart}>Add to Cart</Button>
                    {/* <Button variant="primary" data-bs-toggle="modal"
                        data-bs-target="#cartModal" onClick={dispatch({ type: "ADD_TO_CART", id: product.product.id, product })}>Add to Cart</Button> */}

                </Card.Body>


            </Card >

        </>

    )





}
export default ProductCard;
