import {useEffect, useMemo, useState} from "react";

export default function useOnScreen(ref) {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) observer.disconnect()
      setIntersecting(entry.isIntersecting)
    }
  ), [])


  useEffect(() => {
    if(!ref.current) return
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [observer, ref])

  return isIntersecting
}