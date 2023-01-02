import React from 'react'
import firebase from 'firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase'
import Chatroom from './components/Chatroom'
import Button from './components/Button'
import './App.css';

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider()

  auth.signInWithPopup(provider)
}

function signOut() {
  auth.signOut()
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        <h1>⚛️🔥💬</h1>
        <Button onclick={signOut}>Log out</Button>
      </header>
      <section>
        {user ? <Chatroom /> : <Button onclick={signIn}>Log in</Button>}
      </section>
    </div>
  );
}

export default App;
