import { LabelLayer, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default <T>(earthRef: RefObject<Earth | null>) => {
  const layerRef = useRef<LabelLayer<T> | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    layerRef.current = new LabelLayer<T>(earthRef.current)
  }, [])

  return layerRef
}
