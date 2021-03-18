import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

import Footer from "./Footer"
import ScrollTop from "./ScrollTop"
import CookieConsent from "../components/CookieConsent"
import loadingtrc from "../images/TRC_logo_motion.gif"

import "../styles/layout.css"

export default function LayoutPingo(props) {
  const [loading, setLoading] = useState(true)
  const isSSR = typeof window === "undefined"

  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pingo</title>
        <link rel="canonical" href="https://theroutingcompany.com" />
      </Helmet>

      {/* <div className={`loading ${loading ? "open" : ""}`}>
        <img src={loadingtrc} alt="Loading Gif" width="1500" />
      </div> */}

      {!isSSR && (
        <>
          <CookieConsent />

          <div className="main-container-pingo">{props.children}</div>
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  )
}
