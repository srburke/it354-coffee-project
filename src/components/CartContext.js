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

function getProductQuantity(id){
    cartProducts.find(product => product.id === id)?.quantity

    if (quantity === undefined){
        return 0;
    }
    return quantity;
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