import React, { PureComponent } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './SwitchTransition.css'

export default class SwitchTransitionDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isOn: true,
    }
  }

  render() {
    const { isOn } = this.state
    return (
      <div>
        {/* in-out--先进后隐藏 out-in--先隐藏后进 */}
        <SwitchTransition mode="in-out">
          {/* SwitchTransition中不添加 in 要添加 key */}
          <CSSTransition key={isOn ? 'on' : 'off'} classNames="btn" timeout={1000}>
            <button onClick={e => this.setState({ isOn: !isOn })}>{isOn ? 'on' : 'off'}</button>
          </CSSTransition>
        </SwitchTransition>
      </div>
    )
  }
}
