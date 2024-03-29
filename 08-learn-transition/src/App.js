import React, { PureComponent } from 'react'
import CSSTransitionDemo from './transition/CSSTransitionDemo'
import SwitchTransitionDemo from './transition/SwitchTransitionDemo'
import TransitionGroupDemo from './transition/TransitionGroupDemo'

export default class App extends PureComponent {
  render() {
    return (
      <div style={{ padding: '10px', margin: '30px' }}>
        <CSSTransitionDemo />
        <SwitchTransitionDemo />
        <TransitionGroupDemo />
      </div>
    )
  }
}
