import React from "react"

export default function Button({ onclick, children }) {
  return (
    <button onClick={onclick}>{children}</button>
  )
}
