import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {

    return (
        <>

            <Card style={{maxWidth: "350px"}}>
                <Card.Body>
                    <Card.Img variant="top" src={product.productImg} style={{maxWidth: "200px", height: "200px"}} />
                    <Card.Title>{product.companyName} <br/>{product.productName}</Card.Title>
                    <Card.Text>${product.productPrice}</Card.Text>

                    <Link to={`/product/${product.roastLevel}/${product.id}`}><Button variant="primary">Details</Button></Link>

                </Card.Body>


            </Card >

        </>

    )





}
export default ProductCard;
