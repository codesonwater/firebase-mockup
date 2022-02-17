import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './scenes/Home';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import { useState } from 'react';



function App() {
 const [user, setUser] = useState()

  return (
    <>
    <h1>Jeremiah and Danielle's App!</h1>
    <Routes>
      <Route path="/" element= {user? <Home user={user} /> : <Login setuser={setUser}/>} />
      <Route path="/login" element= {<Login setuser={setUser}/>}/>
      <Route path="/signup" element= {<Signup setuser={setUser}/>} />
    </Routes>
    </>
  );
}

export default App;
