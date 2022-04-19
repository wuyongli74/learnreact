import React, { PureComponent } from 'react'

export default class Detail3 extends PureComponent {
  render() {
    const location = this.props.location
    console.log(location)
    // 动态路由
    return (
      <div>
        <h2>Detail3:{location.state.name} </h2>
      </div>
    )
  }
}
