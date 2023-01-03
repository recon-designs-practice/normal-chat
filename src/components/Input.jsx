import React from "react"
import styled from "@emotion/styled"

const InputEl = styled.input`
  line-height: 1.5;
  width: 100%;
  font-size: 1.5rem;
  background: rgb(58, 58, 58);
  color: white;
  outline: none;
  border: none;
  padding: 0 10px;
`

export default function Input({ value, onchange }) {
  return <InputEl value={value} onChange={onchange} />
}
