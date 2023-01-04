import React from "react"
import styled from "@emotion/styled"
import { auth } from "../firebase"
import { Button } from "./index"

const AppHeader = styled.header`
  background-color: #181717;
  height: 10vh;
  min-height: 50px;
  color: white;
  position: fixed;
  width: 100%;
  max-width: 728px;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 10px;
  box-sizing: border-box;
`

function signOut() {
  auth.signOut()
}

export default function Header() {
  return (
    <AppHeader>
      <h1>⚛️🔥💬</h1>
      <Button onclick={signOut}>Log out</Button>
    </AppHeader>
  )
}
