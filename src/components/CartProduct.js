import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import { useContext, useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, onSnapshot, getDocs } from "firebase/firestore";
// import { getProductData } from './productsStore';

export const CartProduct = ({ cartProduct, addOneToCart }) => {

    const handleIncrement = () => {
        addOneToCart(cartProduct)
    }

    return (
        <div className="container">

            <div className="row align-items-start">
                <div className="col-6 col-sm-6">
                    <p>{cartProduct.ProductName}</p>
                </div>

                <div className="col-4 col-sm-3">
                    <p>${(cartProduct.qty * cartProduct.ProductPrice).toFixed(2)}</p>
                </div>

                {/* <div class="w-100 d-none d-md-block"></div> */}

                <div className="col-2 col-sm-2">
                    <Button variant="danger"> <i class="bi bi-trash3"></i></Button>
                </div>
            </div>

            {cartProduct.qty > 0 ?
                <>
                    <div className="row justify-content-start">
                        <div className="col align-self-start">
                            <button onClick={handleIncrement} style={{ fontSize: "1.1rem", color: "black" }}><i class="bi bi-plus-circle-fill"></i></button>
                            <span style={{ paddingLeft: "1rem", paddingRight: "1rem" }}>{cartProduct.qty} total</span>
                            <button style={{ fontSize: "1.1rem", color: "black" }}><i class="bi bi-dash-circle-fill"></i></button>
                        </div>

                    </div>
                </>
                :
                // <Button variant="primary" onClick={() => cart.addOneToCart(id)}>Add to Cart</Button>
                <p></p>
            }

            <hr></hr>
        </div >
    )

    //  <h5>Subtotal (): {cart.getTotalCost().toFixed(2)}</h5>
    //  <Button variant="success">
    //      Purchase items!
    //  </Button>

    // <div className="container">
    //     <h4>{productData.title}</h4>
    //     <h5>{quantity} total</h5>
    //     <h5>${(quantity * productData.price).toFixed(2)}</h5>

    //     <Button className="w-50" style={{ marginTop: "1rem", marginLeft: "5rem" }} onClick={() => cart.deleteFromCart(id)}>Remove</Button>
    //     <hr></hr>
    // </div>

}

export default CartProduct;


// const [productData, setProductData] = useState({});
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const getProduct = async () => {

//         getDocs(collection(db, 'products')).then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 productData({ ...doc.data(), id: doc.id });
//                 console.log(doc.id, " => cart", doc.data());
//             });
//             setLoading(false);
//         }).catch((error) => {
//             console.log(error.message);
//         });

//         // const productDoc = await productRef.get();
//         // if (productDoc.exists) {
//         //     setProductData({ id: productDoc.id, ...productDoc.data() });
//         // }
//         // setLoading(false);
//     };
//     getProduct();
// }, [props.id]);

// const handleDelete = () => {
//     cart.deleteFromCart(props.id);
//     db.collection('carts').doc(cart.cartId).update({
//         [props.id]: null,
//     });
// };

// const handleAddOne = () => {
//     cart.addOneToCart(props.id);
//     db.collection('carts').doc(cart.cartId).update({
//         [props.id]: cart.getProductQuantity(props.id) + 1,
//     });
// };

// const handleRemoveOne = () => {
//     cart.removeOneFromCart(props.id);
//     db.collection('carts').doc(cart.cartId).update({
//         [props.id]: cart.getProductQuantity(props.id) - 1,
//     });
// };