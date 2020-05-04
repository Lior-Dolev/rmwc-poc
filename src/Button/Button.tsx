import * as React from 'react'
import { Button as RButton, ButtonProps } from '@rmwc/button'
import classnames from 'classnames'

interface InternalButtonProps extends ButtonProps {
  styleType?: 'default' | 'primary' | 'ghost';
  invalid?: boolean;
}

export const Button = (props: InternalButtonProps) => {
  const {
    styleType = 'default',
    invalid,
    ...rest
  } = props;
  const className = classnames('cp-button', styleType, {invalid})

  return (
    <RButton
      className={className}
      {...rest}
    />
  )
}