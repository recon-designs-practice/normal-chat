import React from "react"
import { auth } from "../firebase"

export default function ChatMessage({ uid, children, photoUrl }) {
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'receive'

  return (
    <div className={`message ${messageClass}`}>
      {photoUrl && (<img src={photoUrl} />)}
      <p>{children}</p>
    </div>
  )
}
