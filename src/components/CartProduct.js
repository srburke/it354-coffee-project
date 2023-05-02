import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { useContext } from 'react';
// import { getProductData } from './productsStore';

const CartProduct = (props) => {
    const cart = useContext(CartContext);

    const id = props.id;
    const quantity = props.quantity;
    const price = props.productPrice
    const productData = getProductData(id);



    return (

        <div className="container">
            <div className="row align-items-start">
                <div className="col-6 col-sm-6 ">
                    <p>{productData.productName}</p>
                </div>

                <div className="col-4 col-sm-3">
                    <p>${(quantity * price).toFixed(2)}</p>
                </div>

                {/* <div class="w-100 d-none d-md-block"></div> */}

                <div className="col-2 col-sm-2">
                    <Button variant="danger" onClick={() => cart.deleteFromCart(id)}> <i class="bi bi-trash3"></i></Button>
                </div>
            </div>

            {cart.getProductQuantity(productData.id) > 0 ?
                <>
                    <div className="row justify-content-start">
                        <div className="col align-self-start">
                            <button onClick={() => cart.addOneToCart(id)} style={{ fontSize: "1.1rem", color: "black" }}><i class="bi bi-plus-circle-fill"></i></button>
                            <span style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>{quantity} total</span>
                            <button onClick={() => cart.removeOneFromCart(id)} style={{ fontSize: "1.1rem", color: "black" }}><i class="bi bi-dash-circle-fill"></i></button>
                        </div>

                    </div>
                </>
                :
                // <Button variant="primary" onClick={() => cart.addOneToCart(id)}>Add to Cart</Button>
                <p></p>
            }

            <hr></hr>
        </div >


        // <div className="container">
        //     <h4>{productData.title}</h4>
        //     <h5>{quantity} total</h5>
        //     <h5>${(quantity * productData.price).toFixed(2)}</h5>

        //     <Button className="w-50" style={{ marginTop: "1rem", marginLeft: "5rem" }} onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        //     <hr></hr>
        // </div>
    )
}

export default CartProduct;
