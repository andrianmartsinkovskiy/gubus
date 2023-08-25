import {useEffect, useMemo, useState} from "react";

export default function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) observer.disconnect()
      setIntersecting(entry.isIntersecting)
    }
  ), [ref])


  useEffect(() => {
    if(!ref.current) return
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}