import React from "react"
import Footer from "./Footer"
import ScrollTop from "./ScrollTop"
import CookieConsent from "../components/CookieConsent"
import "../styles/layout.css"
export default function LayoutPingo(props) {
  const isSSR = typeof window === "undefined"
  return (
    <>
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
