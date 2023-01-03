import React from "react"
import styled from "@emotion/styled"
import { auth } from "../firebase"

const Text = styled.p`
  max-width: 500px;
  margin-bottom: 12px;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 25px;
  position: relative;
  color: white;
  text-align: center;
`

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px 5px;
`

export default function ChatMessage({ uid, children, photoUrl }) {
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received"

  return (
    <div className={`message ${messageClass}`}>
      {photoUrl && <UserAvatar src={photoUrl} alt="user avatar" />}
      <Text>{children}</Text>
    </div>
  )
}
