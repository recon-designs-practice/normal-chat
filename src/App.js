import React from 'react'
import firebase from 'firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase'
import Header from './components/Header'
import Chatroom from './components/Chatroom'
import Button from './components/Button'
import './App.css';

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider()

  auth.signInWithPopup(provider)
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <Header />
      <section>
        {user ? <Chatroom /> : <Button onclick={signIn}>Log in</Button>}
      </section>
    </div>
  );
}

export default App;
