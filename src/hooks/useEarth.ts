import { createEarth, recycleEarth, Utils, type Earth } from "@anstec/earth"
import type { Viewer } from "cesium"
import { useEffect, useRef, type RefObject } from "react"

export default (
  containerRef: RefObject<HTMLDivElement | null>,
  id?: string,
  cesiumOptions?: Viewer.ConstructorOptions,
  options?: Earth.ConstructorOptions
) => {
  const earthRef = useRef<Earth | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const realId = id ?? Utils.uuid()
    earthRef.current = createEarth(realId, containerRef.current, cesiumOptions, options)
    return () => {
      if (earthRef.current) {
        recycleEarth(realId)
      }
    }
  }, [containerRef])

  return earthRef
}
