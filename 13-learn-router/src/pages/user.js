import React, { PureComponent } from 'react'
import { Navigate, Redirect } from 'react-router-dom'

export default class User extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isLogin: true,
    }
  }

  render() {
    return this.state.isLogin ? (
      <div>
        <h2>User</h2>
        <h2>用户名：fsdvs</h2>
      </div>
    ) : (
      // <Redirect>不在 a 内的普通元素<Switch>可以保留。它们将成为<Navigate>v6 中的元素
      // <Navigate to="/login" />
      <Redirect to="/login" />
    )
  }
}
