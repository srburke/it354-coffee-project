import { createContext, useState, useReducer } from "react";
import { productsArray, getProductData } from "./productsStore";
import { collection, query, onSnapshot, getDocs, where, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useContext, useEffect } from 'react';


export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    getProductData: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { },
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

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

    function GetCurrentUser() {
        const [user, setUser] = useState('');
        const usersCollectionRef = collection(db, "users");

        useEffect(() => {
            auth.onAuthStateChanged(userlogged => { /**  Listens for changes to the auth state. If a user is logged in, getusers function is called  */
                if (userlogged) {
                    const getUsers = async () => { // Queries the users collection using query method and where clause to filter by the logged-in user's uid.
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        console.log(q);
                        const data = await getDocs(q); // getDocs method is used to retrieve the documents matching the query
                        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // setUser function is used to update the user state with the retrieved data
                    };
                    getUsers();
                } else {
                    setUser(null);
                }
            })
        }, [])
        return user
    }
    const loggeduser = GetCurrentUser();
    console.log(loggeduser);


    useEffect(() => {
        const getCart = () => {
            const productsArray = [];
            const path = `Cart-${uid}`;
            console.log(path);

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id, " => ", doc.data());
                })
                setCart(productsArray);
            }).catch((error) => {
                console.log(error.message);
            });
        }
        getCart();
    }, [])

    let Product;
    const addToCart = (product) => {
        if (uid !== null) {
            Product = product;
            Product['qty'] = 1;
            // Product['TotalProductPrice'] = Product.qty * Product.productPrice;
            addDoc(collection(db, 'Cart ' + uid), {
                [product.id]: {
                    ProductName: product.productName,
                    ProductPrice: product.productPrice,
                    uid: uid,
                    qty: Product.qty,
                    TotalPrice: Product.qty * Product.productPrice
                }
            }).then(() => {
                console.log('Successfully added to cart');
            })
        }
    }

    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {

        const quantity = getProductQuantity(id);

        if (quantity == 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function getProductData(id) {
        let productData = cart.find(product => product.id === id)

        if (productData == undefined) {
            console.log("Product data does not exist for ID: " + id);
            return undefined;
        }
        return productData;
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id != id;
                })
        )
    }


    function getTotalCost() {
        let totalCost = 0
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);

        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        getProductData,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider;


// export const CartContext = createContext({
//     items: [],
//     addOneToCart: () => { },
//     getProductQuantity: () => { },
//     removeOneFromCart: () => { },
//     deleteFromCart: () => { },
//     getTotalCost: () => { },
// });

// export function CartProvider({ children }) {
//     const [cart, setCart] = useState([]);

//     function GetUserUid() {
//         const [uid, setUid] = useState(null);
//         useEffect(() => {
//             auth.onAuthStateChanged(user => {
//                 if (user) {
//                     setUid(user.uid);
//                 }
//             })
//         }, [])
//         return uid;
//     }
//     const uid = GetUserUid();

//     function GetCurrentUser() {
//         const [user, setUser] = useState('');
//         const usersCollectionRef = collection(db, "users");

//         useEffect(() => {
//             auth.onAuthStateChanged(userlogged => { /**  Listens for changes to the auth state. If a user is logged in, getusers function is called  */
//                 if (userlogged) {
//                     const getUsers = async () => { // Queries the users collection using query method and where clause to filter by the logged-in user's uid.
//                         const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
//                         console.log(q);
//                         const data = await getDocs(q); // getDocs method is used to retrieve the documents matching the query
//                         setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); // setUser function is used to update the user state with the retrieved data
//                     };
//                     getUsers();
//                 } else {
//                     setUser(null);
//                 }
//             })
//         }, [])
//         return user
//     }
//     const loggeduser = GetCurrentUser();
//     console.log(loggeduser);


//     useEffect(() => {
//         const getCart = () => {
//             const productsArray = [];
//             const path = `cart-${loggeduser}`;
//             console.log(path);

//             getDocs(collection(db, path)).then((querySnapshot) => {
//                 querySnapshot.forEach((doc) => {
//                     productsArray.push({ ...doc.data(), id: doc.id })
//                     console.log(doc.id, " => ", doc.data());
//                 })
//                 setCart(productsArray);
//             }).catch((error) => {
//                 console.log(error.message);
//             });
//         }
//         getCart();
//     }, [])

//     let Product;
//     const addToCart = (product) => {
//         if (uid !== null) {
//             Product = product;
//             Product['qty'] = 1;
//             Product['TotalProductPrice'] = Product.qty * Product.productPrice;
//             addDoc(collection(db, 'Cart ' + uid), {
//                 [product.id]: {
//                     ProductName: product.productName,
//                     ProductPrice: product.productPrice,
//                     uid: uid,
//                     qty: Product.qty,
//                     TotalPrice: Product.TotalProductPrice
//                 }
//             }).then(() => {
//                 console.log('Successfully added to cart');
//             })
//         }
//     }



//     function getProductQuantity(id) {
//         const quantity = cart.find(product => product.id === id)?.quantity

//         if (quantity === undefined) {
//             return 0;
//         }
//         return quantity;
//     }



//     function addOneToCart(id) {
//         const quantity = getProductQuantity(id);

//         if (quantity === 0) { // product is not in cart
//             setCart(
//                 [
//                     ...cart,
//                     {
//                         id: id,
//                         quantity: 1
//                     }
//                 ]
//             )
//         } else {
//             setCart(
//                 cart.map(
//                     product =>
//                         product.id === id                                // if condition
//                             ? { ...product, quantity: product.quantity + 1 } // if statement is true
//                             : product                                        // if statement is false
//                 )
//             )
//         }
//     }


//     function deleteFromCart(id) {
//         setCart(
//             cart =>
//                 cart.filter(currentProduct => {
//                     return currentProduct.id != id;
//                 })
//         )
//     }

//     function removeOneFromCart(id) {

//         const quantity = getProductQuantity(id);

//         if (quantity == 1) {
//             deleteFromCart(id);
//         } else {
//             setCart(
//                 cart.map(
//                     product =>
//                         product.id === id
//                             ? { ...product, quantity: product.quantity - 1 } // if statement is true
//                             : product                                        // if statement is false
//                 )
//             )
//         }
//     }

//     function getTotalCost() {
//         let totalCost = 0
//         cart.map((cartItem) => {
//             const productData = getProductData(cartItem.id);
//             totalCost += (productData.price * cartItem.quantity);

//         });
//         return totalCost;
//     }

//     const contextValue = {
//         items: cart,
//         getProductQuantity,
//         addOneToCart,
//         deleteFromCart,
//         removeOneFromCart,
//         getTotalCost
//     }


//     return (
//         <CartContext.Provider value={{ contextValue }}>
//             {children}
//         </CartContext.Provider>
//     )
// }