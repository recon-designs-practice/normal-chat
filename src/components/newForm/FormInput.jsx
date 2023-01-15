import React from "react"
import PropTypes from 'prop-types'
import styled from "@emotion/styled"

const InputContainer = styled.div`
  margin: 8px 0px;
  display: flex;
  flex-direction: column;
`

const InputLabel = styled.label`
  margin-bottom: 4px;
  box-sizing: border-box;
  font-size: 14px;
  line-height: 16px;
  font-family: sans-serif !important;
`

const InputEl = styled.input`
  box-sizing: border-box;
  padding: 4px 8px;
  font-size: 16px;
  line-height: 20px;
  color: #282c34;
  border: 2px solid #282c34;
  border-radius: 4px;
`

export default function FormInput({ id, className, type, label, onchange, placeholder }) {
  const lableId = `${id}-label`
  const inputId = `${id}-input`

  return (
    <InputContainer className={className}>
      {label && <InputLabel id={lableId}>{label}</InputLabel>}
      <InputEl id={inputId} type={type} onChange={onchange} placeholder={placeholder} />
    </InputContainer>
  )
}

FormInput.defaultProps = {
  type: 'text'
}

FormInput.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onchanage: PropTypes.func,
  placeholder: PropTypes.string
}