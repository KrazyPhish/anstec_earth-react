import { BillboardLayer, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default <T>(earthRef: RefObject<Earth | null>) => {
  const layerRef = useRef<BillboardLayer<T> | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    layerRef.current = new BillboardLayer<T>(earthRef.current)
  }, [])

  return layerRef
}
