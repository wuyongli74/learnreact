import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './TransitionGroup.css'

export default class TransitionGroupDemo extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      names: ['why', 'kobo', 'lily'],
    }
  }

  render() {
    return (
      <div>
        <TransitionGroup>
          {this.state.names.map((item, index) => {
            return (
              <CSSTransition timeout={500} classNames="item" key={item}>
                <div>
                  {item}
                  <button onClick={e => this.removeItem(index)}>-</button>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        <button onClick={e => this.addName()}>+name</button>
      </div>
    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, 'why'],
    })
  }

  removeItem(index) {
    this.setState({
      //
      names: this.state.names.filter((item, indey) => index !== indey),
    })
  }
}
