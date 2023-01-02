import React from 'react'
import firebase from 'firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase'
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
        <p>{user ? 'Logged in' : 'Not logged in'}</p>
        {user ? <Button onclick={signOut}>Log out</Button> : <Button onclick={signIn}>Log in</Button>}
      </header>
    </div>
  );
}

export default App;
