import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { collection, updateDoc, getDocs, where, addDoc, doc, setDoc } from "firebase/firestore";
import { Button, container, Modal } from 'react-bootstrap';
import CartProduct from './CartProduct.js'
import { db, auth } from "../config/firebase";

const Cart = () => {
    function GetUserUid() {
        const [uid, setUid] = useState(null);
        useEffect(() => {
            auth.onAuthStateChanged(user => {
                if (user) {
                    setUid(user.uid);
                }
            })
        }, [])
        return uid;
    }
    const uid = GetUserUid();


    const [cartProducts, setCartProducts] = useState([]);
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const newCartProduct = [];
                const path = "Cart " + user.uid;
                console.log(path);

                getDocs(collection(db, path)).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => (
                        newCartProduct.push({ ...doc.data(), id: doc.id })

                    ));
                    setCartProducts(newCartProduct);
                })
            } else {
                console.log("User is not signed in to retrieve shopping cart.")
            }
        })
    }, [])


    const addOneToCart = (cartProduct) => {
        const updateCart = {
            ...cartProduct,
            qty: cartProduct.qty + 1,
            TotalProductPrice: (cartProduct.qty + 1) * cartProduct.ProductPrice
        }
        // update in Firestore
        const user = auth.currentUser;
        const path = `Cart ${user.uid}/${cartProduct.id}`;
        const docRef = doc(db, path);
        if (user) {
            setDoc(docRef, updateCart).then(() => {
                console.log("increase")
            })
        } else {
            console.log('user is not logged in to increment')
        }

    }


    const productsCount = cartProducts.reduce((sum, product) => sum + product.qty, 0);
    return (
        <>


            {cartProducts.length > 0 ?
                <>
                    <h5>Items in your cart:</h5>

                    {cartProducts.map((cartProduct) => (
                        <CartProduct key={cartProduct.id} cartProduct={cartProduct} addOneToCart={addOneToCart} />
                    ))}

                    <h5>Subtotal ({productsCount}): {cartProducts.TotalProductPrice}</h5>
                    <Button variant="success">
                        Purchase items!
                    </Button>
                </>
                :
                <h4>There are no items in your cart!</h4>

            }

        </>
    )
}

export default Cart;