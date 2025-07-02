import { ContextMenu, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default (earthRef: RefObject<Earth | null>) => {
  const contextMenuRef = useRef<ContextMenu | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    contextMenuRef.current = new ContextMenu(earthRef.current)
    return () => {
      contextMenuRef.current?.destroy()
    }
  }, [])

  return contextMenuRef
}
