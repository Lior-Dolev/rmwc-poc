import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Input } from './index'
import '../styles/index.scss'

storiesOf('Input', module)
.add('Full CSS', () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <p>Regular</p>
    <Input
      placeholder={'Text field...'}
    />
    <hr />
    <p>Read Only</p>
    <Input 
      value={'Read Only'}
      onChange={() => {}}
      readOnly
    />
    <hr />
    <p>Disabled</p>
    <Input 
      value={'Disabled'}
      onChange={() => {}}
      disabled
    />
    <hr />
    <p>Validation - Error</p>
    <Input 
      value={'Validation'}
      onChange={() => {}}
      invalid
    />
    <hr />
    <p>Validation - Error Message</p>
    <Input 
      value={'Validation'}
      onChange={() => {}}
      invalid
      helpText={{
        validationMsg: true,
        children: 'Lorem ipsum dolor sit amet'
      }}
    />
    <hr />
    <p>Validation - Valid Message</p>
    <Input 
      value={'Validation'}
      onChange={() => {}}
      validationState={'valid'}
      helpText={{
        validationMsg: true,
        children: 'Lorem ipsum dolor sit amet'
      }}
    />
    <hr />
    <p>Validation - Warning Message</p>
    <Input 
      value={'Validation'}
      onChange={() => {}}
      validationState={'warning'}
      helpText={{
        validationMsg: true,
        children: 'Lorem ipsum dolor sit amet'
      }}
    />
    <hr />
  </React.Fragment>
))

