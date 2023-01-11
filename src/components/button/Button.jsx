import React from "react"
import styled from '@emotion/styled'

const ButtonEl = styled.button`
  background-color: #282c34;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  font-size: 1.25rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function Button({ onclick, className, children }) {
  return (
    <ButtonEl className={className} onClick={onclick}>{children}</ButtonEl>
  )
}
