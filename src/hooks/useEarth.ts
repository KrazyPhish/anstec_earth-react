import { createEarth, Utils, type Earth } from "@anstec/earth"
import type { Viewer } from "cesium"
import { useEffect, useRef, type RefObject } from "react"

export default (
  containerRef: RefObject<HTMLDivElement | null>,
  id?: string,
  cesiumOptions?: Viewer.ConstructorOptions,
  options?: Earth.ConstructorOptions
) => {
  const earthRef = useRef<Earth | null>(null)
  const realId = useRef(id ?? Utils.uuid())

  useEffect(() => {
    if (!containerRef.current) return
    earthRef.current = createEarth(realId.current, containerRef.current, cesiumOptions, options)
  }, [])

  return earthRef
}
