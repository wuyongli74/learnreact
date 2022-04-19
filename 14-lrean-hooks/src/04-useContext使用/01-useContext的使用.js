import React, { useContext } from 'react'
import { ThemContext, UserContext } from '../App'

export default function ContextHookDemo(props) {
  const user = useContext(UserContext)
  const theme = useContext(ThemContext)

  console.log(user, theme)

  return (
    <div>
      <h2>ContextHookDemo</h2>
      {/* 1.基本写法 */}
      {/* <UserContext.Consumer>
        {user => {
          return (
            <div>
              <h2>{user.name}</h2>
              <h2>{user.age}</h2>
            </div>
          )
        }}
      </UserContext.Consumer> */}
    </div>
  )
}
