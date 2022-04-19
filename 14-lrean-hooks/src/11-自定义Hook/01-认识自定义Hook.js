import React, { useEffect } from 'react'

const Home = props => {
  useLogggingLife('Home')
  return <h2>Home</h2>
}
const Profile = props => {
  useLogggingLife('Profile')
  return <h2>Profile</h2>
}

export default function CustomLifeHookDemo01() {
  useLogggingLife('CustomLifeHookDemo01')
  return (
    <div>
      <h2>CustomHookDemo01</h2>
      <Home />
      <Profile />
    </div>
  )
}

function useLogggingLife(name) {
  useEffect(() => {
    console.log(`${name}创建`)
    return () => {
      console.log(`${name}销毁`)
    }
  }, [])
}
