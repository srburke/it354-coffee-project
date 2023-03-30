import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { Link, useNavigate } from 'react-router-dom';


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

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
        }).catch(error => console.log(error))
    }
    return (
        //Need to improve
        <div>{authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <Link to='/account/signin' style={{ textDecoration: 'underline' }}>Sign In</Link>}</div>
    )
}

export default AuthDetails