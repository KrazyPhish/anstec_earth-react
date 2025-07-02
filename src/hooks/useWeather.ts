import { Weather, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default (earthRef: RefObject<Earth | null>) => {
  const weatherRef = useRef<Weather | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    weatherRef.current = new Weather(earthRef.current)
    return () => {
      weatherRef.current?.destroy()
    }
  }, [])

  return weatherRef
}
