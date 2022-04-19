import { useEffect, useState } from 'react'

function useScrollPosition() {
  const [scrollPostion, setScrollPostion] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPostion(window.scrollY)
      console.log(window.scrollY)
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [scrollPostion]
}
export default useScrollPosition
