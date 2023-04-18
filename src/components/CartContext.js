import { createContext, useState} from "react";
import { productsArray } from "./productsStore";

 export const CartContext = createContext({
    items :[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});

export function CartProvider({children}){
    
}