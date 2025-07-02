import { Cluster, type Earth } from "@anstec/earth"
import { useEffect, useRef, type RefObject } from "react"

export default (earthRef: RefObject<Earth | null>, options?: Cluster.ConstructorOptions) => {
  const clusterRef = useRef<Cluster | null>(null)

  useEffect(() => {
    if (!earthRef.current) return
    clusterRef.current = new Cluster(earthRef.current, options)
  }, [])

  return clusterRef
}
