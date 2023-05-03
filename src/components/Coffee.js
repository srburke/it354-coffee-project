import React, { useEffect, useState } from 'react';
import '../styles/style.css';
import '../styles/coffee.css';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';
import { collection, query, doc, getDocs, getDoc, where, addDoc } from "firebase/firestore";
import { db, auth } from "../config/firebase";

const Coffee = (props) => {
    const [products, setProducts] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const { type, id } = useParams()
    const [currentProd, setCurrentProd] = useState('');

    function GetCurrentUser() {
        const [user, setUser] = useState('');
        useEffect(() => {
            auth.onAuthStateChanged(userlogged => { /**  Listens for changes to the auth state. If a user is logged in, getusers function is called  */
                if (userlogged) {
                    const getUsers = async () => { // Queries the users collection using query method and where clause to filter by the logged-in user's uid.
                        const q = query(collection(db, "users"), where("uid", "==", userlogged.uid));
                        // console.log(q);
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


    useEffect(() => {
        const getProducts = () => {
            const productsArray = [];
            const path = `products-${props.type.toUpperCase()}`;

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

    function GetProductData() {
        useEffect(() => {
            const getProduct = async () => {
                const docRef = doc(db, `products-${type.toUpperCase()}`, id);
                const docSnap = await getDoc(docRef);
                setCurrentProd(docSnap.data());
            };
            getProduct();
        }, [])
        return currentProd;
    }
    GetProductData();
    console.log('test:', currentProd)

    const addToCart = () => {
        if (loggeduser) {
            addDoc(collection(db, `cart-${loggeduser[0].uid}`), {
                currentProd, quantity: 1
            }).then(() => {
                console.log('Product added to cart');
                setSuccessMsg('Product added to cart');
            }).catch((error) => {
                console.log(error.message);
            })
        } else {
            setErrorMsg('You need to login first');
        }
    }

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
