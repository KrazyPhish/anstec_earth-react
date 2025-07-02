import { PolylineLayer, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default <T>(earthRef: RefObject<Earth | null>) => {
  const layerRef = useRef<PolylineLayer<T> | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    layerRef.current = new PolylineLayer<T>(earthRef.current)
  }, [])

  return layerRef
}
