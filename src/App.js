import React from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./pages/Landing"
import SignupPage from "./pages/Signup"
import ChatPage from "./pages/Chat"
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
