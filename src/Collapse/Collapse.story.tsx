import * as React from 'react'
import { storiesOf } from '@storybook/react' 
import { Collapse } from './index'
import '../styles/index.scss'

storiesOf('Collapse', module)
.add('Full CSS', () => (
  <React.Fragment>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <Collapse />
  </React.Fragment>
))

