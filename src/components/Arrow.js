import React, { useState, useRef } from "react"
import { useEffectOnlyOnce } from "../utils/hooks"
import "../styles/arrow.css"

export default function Arrow() {
  const [arrowHeight, setArrowHeight] = useState(0)
  const selectedDiv = useRef(null)

  useEffectOnlyOnce(() => {
    const onScroll = () => {
      if (selectedDiv.current) {
        const { clientHeight } = document.documentElement
        const { scrollHeight, offsetTop } = selectedDiv.current
        const halfScreenOffset = window.pageYOffset + clientHeight / 2

        let height = halfScreenOffset - offsetTop
        height = height > 20 ? height : 0
        height = height >= scrollHeight ? scrollHeight : height
        setArrowHeight(height)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  return (
    <div
      className="rolling-arrow col-md-2 justify-content-center d-flex"
      ref={selectedDiv}
    >
      <div className="arrow2 d-none d-md-block" style={{ height: arrowHeight }}>
        {arrowHeight > 20 && (
          <>
            <span className="line line-1" />
            <span className="line line-2" />
          </>
        )}
      </div>
    </div>
  )
}
