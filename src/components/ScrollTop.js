import React, { useState } from "react"
import { useEffectOnlyOnce } from "../utils/hooks"
import Button from "@material-ui/core/Button"

import "../styles/scrollTop.css"

import arrowUp from "../images/arrowUp.svg"

export default function ScrollTop() {
  const [showScroll, setShowScroll] = useState(false)

  useEffectOnlyOnce(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    window.addEventListener("scroll", checkScrollTop)
    return () => {
      window.removeEventListener("scroll", checkScrollTop)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Button
      id="toTopBtn"
      onClick={scrollToTop}
      className={`btn btn-link ${showScroll ? "visible" : ""}`}
    >
      <img
        className="button"
        alt="Scroll Top Icon"
        src={arrowUp}
        width="50"
        height="50"
      ></img>
    </Button>
  )
}
