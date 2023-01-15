import React, { useState } from 'react'
import { NewForm, Button } from '../components'
import FormInput from '../components/newForm/FormInput'

function handleSubmit(e, value1, value2) {
  e.preventDefault()

  console.log({ name: value1, pass: value2 })
}

export default function LandingPage() {
  const [userName, setUserName] = useState('')
  const [userPass, setUserPass] = useState('')

  return (
    <div>
      <h1>Log in</h1>
      <NewForm onsubmit={(e) => handleSubmit(e, userName, userPass)} id={'loginForm'}>
        <FormInput id={'loginForm-username'} label={'Username'} onchange={(e) => setUserName(e.target.value)} />
        <FormInput id={'loginForm-userpassword'} label={'Password'} onchange={(e) => setUserPass(e.target.value)} />
        <Button>Submit</Button>
      </NewForm>
    </div>
  )
}
