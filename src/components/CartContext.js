import { createContext, useState} from "react";
import { productsArray } from "./productsStore";
import Cart from "./Cart";
import context from "react-bootstrap/esm/AccordionContext";

 export const CartContext = createContext({
    items :[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({children}){
const [cartProducts, setCartProducts]= useState([]);


// Cart Functions
function getProductQuantity(id){
    cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined){
        return 0;
    }
    return quantity;
}

function addOneToCart(id){
    const quantity = getProductQuantity(id);

    if(quantity === 0){// product is not in cart
            setCartProducts(
                [
                    ...cartProducts{
                        id: id,
                        quantity: 1
                    }
                ]
            )
    }else{ //product is in cart
        setCartProducts(
            cartProducts.map(
                product.id === id
                ? {...product, quantity: product.quantity} // if statement is true
                : product                                  //if statement is false
            )
        )
    }
}

function removeOneFromCart(id){
    const quantity = getProductQuantity(id);

    if(quantity ==1){
        deleteFromCart(id);
    }else{
        setCartProducts(
            cartProducts.map(
                product.id === id
                ? {...product, quantity: product.quantit -1} // if statement is true
                : product                                  //if statement is false
            )
        )
    }
}

function deleteFromCart(id){
    setCartProducts(
        cartProducts =>
        cartProducts.filter(currentProduct => {
            return currentProduct.id != id;
        })
    )
}



const contextValue = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
}

    return(
        <CartContext.Provider value = {contextValue}>
            {children}
        </CartContext.Provider>
    )
}