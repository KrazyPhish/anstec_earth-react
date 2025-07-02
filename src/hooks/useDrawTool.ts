import { Draw, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default (earthRef: RefObject<Earth | null>) => {
  const drawRef = useRef<Draw | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    drawRef.current = new Draw(earthRef.current)
    return () => {
      drawRef.current?.destroy()
    }
  }, [])

  return drawRef
}
