import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    const match = this.props.match
    console.log(match.params.id)

    // 动态路由
    return (
      <div>
        <h2>Detail: {match.params.id}</h2>
      </div>
    )
  }
}
