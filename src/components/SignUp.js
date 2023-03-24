import React from 'react'
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }

    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }

    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4' style={{ color: "black" }}>Sign Up</h2>
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
                        <Button className="w-100" onClick={signIn}>
                            Sign Up
                        </Button>

                        <Button className="w-100" style={{ marginTop: "1rem" }} onClick={signInWithGoogle}>
                            Sign Up With Google
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2" style={{ color: "black" }}>
                Already have an account? Log In
            </div>
        </>
    )
}

export default SignUp