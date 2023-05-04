import { collection, query, doc, getDocs, getDoc, where, addDoc } from "firebase/firestore";
import { Card, Button } from 'react-bootstrap';
import { db, auth } from "../config/firebase";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const IndividualProduct = () => {
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
            {currentProd ?
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" src={currentProd.productImg} className="images" />
                        <Card.Title>{currentProd.companyName} - {currentProd.productName}</Card.Title>
                        <Card.Text>${currentProd.productPrice}</Card.Text>

                        <Button variant="primary" data-bs-toggle="modal"
                            data-bs-target="#cartModal" onClick={addToCart}>Add to Cart</Button>
                    </Card.Body>

                    {successMsg && <>
                        <div>{successMsg}</div>
                    </>}
                    {errorMsg && <>
                        <div>{errorMsg}</div>
                    </>}
                </Card >

                : <p>Test..</p>}

        </>
    )
}

export default IndividualProduct