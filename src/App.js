import React from "react"
import { Switch, Route } from 'react-router-dom'
import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase"
import styled from "@emotion/styled"
import LandingPage from './pages/Landing'
import SignupPage from './pages/Signup'
import ChatPage from './pages/Chat'
import Header from "./components/Header"
import Chatroom from "./components/Chatroom"
import Button from "./components/Button"
import "./App.css"

const AppContainer = styled.div`
  text-align: center;
  max-width: 728px;
  margin: 0 auto;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: rgb(40, 37, 53);
`

function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider()

  auth.signInWithPopup(provider)
}

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      <Switch>
      <Route path={'/chat'}>
          <ChatPage />
        </Route>
        <Route path={'/signup'}>
          <SignupPage />
        </Route>
        <Route path={'/'}>
          <LandingPage />
        </Route>
      </Switch>
    </>
    // <AppContainer>
    //   <Header />
    //   <Section>
    //     {user ? <Chatroom /> : <Button onclick={signIn}>Log in</Button>}
    //   </Section>
    // </AppContainer>
  )
}

export default App
