import { useState } from "react"
import { app } from '../ConnectAuth'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";


export default function Signup({setUser}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')    
    const auth = getAuth(app)
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider()
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            navigate('/')
            .catch(alert)
        })
    }
    const handleGoogleLogin = (e) => {
        signInWithPopup(auth, provider)
        .then(result => {
            setUser(result.user)
            navigate('/')
            .catch(alert)
        })
    }

    return (
        <>
        <h1>Signup</h1>
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
            <input type ='submit' value = 'Sign Up' />
        </form>
        <button onClick={handleGoogleLogin}>Sign up with Google</button>
        <p>Already a user? <Link to='/Login'> Login</Link></p>
        </>
    )
    }