import { createContext, useState} from "react";
import { productsArray } from "./productsStore";

const CartContext = createContext({
    items :[],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});