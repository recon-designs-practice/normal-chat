import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import firebase from "firebase"
import { firestore, auth } from "../firebase"
import { useCollectionData } from "react-firebase-hooks/firestore"
import ChatMessage from "../components/ChatMessage"
import Form from "./Form"
import Button from "../components/Button"
import Input from "./Input"

const Main = styled.main`
  padding: 10px;
  height: 80vh;
  margin: 10vh 0 10vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`

const FormButton = styled(Button)`
  width: 20%;
  background-color: rgb(56, 56, 143);
`

export default function Chatroom() {
  const messagesRef = firestore.collection("messages")
  const query = messagesRef.orderBy("createdAt").limit(50)
  const [messages] = useCollectionData(query, { idField: "id" })
  const [formValue, setFormValue] = useState("")
  const scrollToDiv = useRef()

  const sendMessage = async (e) => {
    e.preventDefault()

    const { uid, photoURL } = auth.currentUser

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    })

    setFormValue("")

    scrollToDiv.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Main>
        {messages &&
          messages.map((msg) => {
            return <ChatMessage key={msg.id}>{msg.text}</ChatMessage>
          })}

        <span ref={scrollToDiv}></span>
      </Main>

      <Form onsubmit={sendMessage}>
        <Input 
          value={formValue}
          onchange={(e) => setFormValue(e.target.value)}        
        />
        <FormButton>🕊️</FormButton>
      </Form>
    </>
  )
}
