import React, { PureComponent } from 'react'

export default class Detail2 extends PureComponent {
  render() {
    console.log(this.props.location)
    // 动态路由
    return (
      <div>
        <h2>Detail:{this.props.location.search} </h2>
      </div>
    )
  }
}
