import React from 'react'
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth, googleProvider } from '../../config/firebase'
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/style.css'
import SignUp from './SignUp'


const SignIn = (setAccount, showAccount) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSignIn, setSignIn] = useState(false);
    const navigate = useNavigate();
    // console.log(auth?.currentUser?.email);

    const signIn = async () => {

        signInWithEmailAndPassword(auth, email, password)
        navigate('/account')
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })


    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }

    };

    return (
        <>


            <div className={`account-drawer ${showSignIn ? "hide-drawer" : ""}`}>
                <div className="w-100 h-100" style={{ maxWidth: "350px" }}>
                    <Card className="signIn-card">
                        <Card.Body>
                            <h2 className='text-center mb-4' style={{ color: "black" }}>Sign In</h2>
                            <Form>
                                <Form.Group id="email">
                                    <div className="mb-3">
                                        <label for="" className="form-label" style={{ color: "black" }}>Email</label>
                                        <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="abc@mail.com" required></input>
                                    </div>
                                </Form.Group>
                                <Form.Group id="password">
                                    <div className="mb-3">
                                        <label for="" class="form-label" style={{ color: "black" }}>Password</label>
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" name="" id="" placeholder="" required></input>
                                    </div>
                                </Form.Group>
                                <Button className="w-100" onClick={() => signIn() + setSignIn(true)}>
                                    Sign In
                                </Button>

                                <Button className="w-100" style={{ marginTop: "1rem" }} onClick={() => signInWithGoogle() + setSignIn(true)}>
                                    Sign In With Google
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>

                    <SignUp />

                </div>

            </div>




        </>
    )
}

export default SignIn