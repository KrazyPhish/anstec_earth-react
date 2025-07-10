## @anstec/earth-react

React hooks for module [@anstec/earth](https://www.npmjs.com/package/@anstec/earth).

### Before start

Before start using this module, install packages blow manually: [cesium](https://www.npmjs.com/package/cesium), [react](https://www.npmjs.com/package/react), [@anstec/earth](https://www.npmjs.com/package/@anstec/earth).

Then install this module:  
```shell
npm install @anstec/earth-react
```

### Get started

```tsx
// in your map module, when initializing the cesium viewer
import { useEffect, useRef, type FC, type RefObject } from "react"
import { Utils, type Earth } from "@anstec/earth"
import { useEarth } from "@anstec/earth-react"

export default (): FC => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const id = useRef<string>(Utils.uuid())
  const earthRef: RefObject<Earth | null> = useEarth(containerRef, id.current)

  useEffect(() => {
    if (!earthRef.current) return
    //doing some job
    return () => {
      //do not try to recycle the earth or destroy any other components
      //useEarth hook or other components hooks will do it for you
    }
  }, [])

  return (
    <>
      <div ref={containerRef}></div>
    </>
  )
}
```
