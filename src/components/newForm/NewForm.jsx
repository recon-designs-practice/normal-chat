import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Form = styled.form`
  padding: 20px;
  background: lightgray;
  border-radius: 4px;
`

export default function NewForm({ id, className, onsubmit, children }) {
  const formId = `${id}-form`

  return (
      <Form id={formId} className={className} onSubmit={onsubmit}>
        {children}
      </Form>
  )
}

NewForm.propTypes = {
  id: PropTypes.string,
  onsubmit: PropTypes.func,
  children: PropTypes.element
}