import React from 'react'
import { useState, useContext } from 'react';
import CartProvider, { CartContext } from './CartContext';
import { Button, container, Modal } from 'react-bootstrap';
import CartProduct from './CartProduct.js'
// import { auth, db } from './config/firebase';
// import { collection, getDocs, query, where } from 'firebase/firestore';

const Cart = () => {
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);



    return (
        <>
            {productsCount > 0 ?
                <>
                    <h5>Items in your cart:</h5>
                    {cart.items.map((currentProduct, idx) => (
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                    ))}
                    <h5>Subtotal ({productsCount}): {cart.getTotalCost().toFixed(2)}</h5>
                    <Button variant="success">
                        Purchase items!
                    </Button>
                </>

                : <h4>There are no items in your cart!</h4>
            }
        </>
    )
}

export default Cart;