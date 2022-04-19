import { useEffect, useState } from 'react'

function useLocalStorage(key) {
  const [name, setName] = useState(() => {
    // const name = JSON.parse(window.localStorage.getItem(key))
    const name = window.localStorage.getItem(key)
    console.log(name)
    return name
  })

  useEffect(() => {
    // window.localStorage.setItem(key, JSON.stringify(name))
    window.localStorage.setItem(key, name)
  }, [name])

  return [name, setName]
}

export default useLocalStorage
