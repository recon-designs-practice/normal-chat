import React from "react"
import styled from "@emotion/styled"
import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../firebase"
import { Header, Button, Chatroom } from "../components/index"

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

export default function ChatPage() {
  const [user] = useAuthState(auth)

  return (
    <AppContainer>
      <Header />
      <Section>
        {user ? <Chatroom /> : <Button onclick={signIn}>Log in</Button>}
      </Section>
    </AppContainer>
  )
}
