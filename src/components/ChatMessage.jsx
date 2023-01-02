import React from "react"
import { auth } from "../firebase"

export default function ChatMessage({ uid, children, photoUrl }) {
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

  return (
    <div className={`message ${messageClass}`}>
      {photoUrl && (<img src={photoUrl} alt='user photo' />)}
      <p>{children}</p>
    </div>
  )
}
