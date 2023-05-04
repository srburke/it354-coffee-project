import React from 'react'
import '../styles/account.css';
import SignIn from './auth/SignIn';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../config/firebase';


const Account = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    /** The useEffect hook is used to listen for changes in the user’s authentication state using 
     * Firebase’s function “onAuthStateChanged”. If the user is signed in, their user object is 
     * set to the authUser state variable and if they’re signed out, authUser is set to null.*/
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        })

        return () => {
            listen();
        }
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("Sign out successful")
            navigate('/');
        }).catch(error => console.log(error))
    }

    return (
        <div className='container' id="account">
            <div>{authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut} className="sign-out">Sign Out</button></> : <SignIn />}
            </div>
        </div>

    )
}



export default Account