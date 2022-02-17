import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { app } from "../ConnectAuth"

export default function Login({setUser}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()    
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            navigate('/')
        })
        .catch(alert)
    }
    const handleGoogleLogin = (e) => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
            navigate('/')
        })
        .catch(alert)
    }

    return (
        <>
        <h1>Login</h1>
        <hr/>
        <form onSubmit={handleFormSubmit}>
            <label>Email: 
                <input type='email' value={email} 
                onChange={e => setEmail(e.target.value)}/>
            </label>

            <label>Password:
                <input type='password' value = {password}
                   onChange={e => setPassword(e.target.value)}/>
            </label>
            <input type ='submit' value = 'Log In' />
        </form>
        <button onClick={handleGoogleLogin}>Log in with Google</button>
        <p>Not a user? <Link to='/signup'> Sign Up</Link></p>
        </>
    )
    }