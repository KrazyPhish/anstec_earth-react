import { Heatmap, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default (earthRef: RefObject<Earth | null>, options?: Heatmap.ConstructorOptions) => {
  const clusterRef = useRef<Heatmap | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    clusterRef.current = new Heatmap(earthRef.current, options)
  }, [])

  return clusterRef
}
