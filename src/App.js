import React from "react"
import { Switch, Route } from "react-router-dom"
import { LandingPage, SignupPage, ChatPage } from "./pages/index"
import "./App.css"

function App() {
  return (
    <>
      <Switch>
        <Route path={"/chat"}>
          <ChatPage />
        </Route>
        <Route path={"/signup"}>
          <SignupPage />
        </Route>
        <Route path={"/"}>
          <LandingPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
