import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/coffee.css';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { collection, query, onSnapshot, getDocs, where, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Coffee = (props) => {

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

    const [products, setProducts] = useState([]);


    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`;
            console.log(props);

            getDocs(collection(db, path)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    productsArray.push({ ...doc.data(), id: doc.id })
                    console.log(doc.id, " => ", doc.data());
                })
                setProducts(productsArray);
            }).catch((error) => {
                console.log(error.message);
            });
        }
        getProducts();
    }, [])
    // console.log(props.type)

    let Product;
    const addToCart = (product) => {
        if (uid !== null) {
            Product = product;
            Product['qty'] = 1;
            Product['TotalProductPrice'] = Product.qty * Product.productPrice;
            addDoc(collection(db, 'Cart ' + uid), {
                id: product.id,
                ProductName: product.productName,
                ProductPrice: product.productPrice,
                qty: Product.qty,
                TotalProductPrice: Product.TotalProductPrice

            }).then(() => {
                console.log('Successfully added to cart');

            })
        }
    }

    // const addToCart = () => {
    //     if (uid !== null) {
    //         addDoc(collection(db, 'Cart ' + loggeduser[0].uid), {
    //             products, quantity: 1
    //         }).then(() => {
    //             console.log('Successfully added to cart');

    //         })
    //     }
    // }

    return (
        <>
            <div className="container">
                <Row xs={1} md={3} className="g-4" id="coffeeRow">
                    {products.map((product) => (
                        <Col align="center">
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToCart={addToCart}
                            />
                        </Col>
                    ))}

                </Row>


            </div>

        </>
    )
}
export default Coffee;






{/* <ProductCard /> */ }


{/* <Row xs={1} md={3} className="g-4" id="coffeeRow">
                    {productsArray.map((product, idx) => (
                        <Col align="center" key={idx}>
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row> */}
