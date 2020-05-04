import * as React from 'react'
import { TextField, TextFieldProps, TextFieldHTMLProps, TextFieldHelperTextProps } from '@rmwc/textfield'
import '@rmwc/icon/styles'
import classnames from 'classnames'
// import msg_classnames from 'classnames'

interface InternalTextFieldProps {
  validationState?: 'valid' | 'warning' | 'invalid';
}

type InputProps = InternalTextFieldProps & TextFieldProps & TextFieldHTMLProps;

export const Input = (props: InputProps) => {
  const {
    validationState = props.invalid && 'invalid',
    helpText,
    ...rest
  } = props;
  const className = classnames('cp-input', validationState);
  const msgClassName = classnames('cp-input-msg', validationState)

  if (validationState && helpText && (helpText as TextFieldHelperTextProps)) {
    (helpText as TextFieldHelperTextProps).children = 
      <span className={msgClassName} >{(helpText as TextFieldHelperTextProps).children}</span>
  }

  const trailingIcon = validationState === 'invalid' ? 'info' :
    validationState === 'valid' ? 'check_circle' :
    validationState === 'warning' ? 'warning' : ''

  return (
    <TextField
      className={className}
      helpText={helpText}
      // trailingIcon={trailingIcon}
      {...rest}
    />
  )
}