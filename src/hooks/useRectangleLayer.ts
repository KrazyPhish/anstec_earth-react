import { RectangleLayer, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default <T>(earthRef: RefObject<Earth | null>) => {
  const layerRef = useRef<RectangleLayer<T> | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    layerRef.current = new RectangleLayer<T>(earthRef.current)
    return () => {
      layerRef.current?.destroy()
      layerRef.current = null
    }
  }, [])

  return layerRef
}
