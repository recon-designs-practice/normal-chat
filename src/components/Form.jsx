import React from "react"
import styled from "@emotion/styled"

const FormEl = styled.form`
  height: 10vh;
  position: fixed;
  bottom: 0;
  background-color: rgb(24, 23, 23);
  width: 100%;
  max-width: 728px;
  display: flex;
  font-size: 1.5rem;
`

export default function Form({ onsubmit, children }) {
  return <FormEl onSubmit={onsubmit}>{children}</FormEl>
}
