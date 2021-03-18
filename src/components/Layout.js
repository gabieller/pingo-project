import React, { useState } from "react"

import Header from "./Header"
import CookieConsent from "../components/CookieConsent"
import Footer from "./Footer"

import "../styles/layout.css"

export default function Layout(props) {
  const [isOpenSidebar, setOpenSidebar] = useState(false)
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <>
          <Header uri={props.uri} onOpen={isOpen => setOpenSidebar(isOpen)} />
          <CookieConsent />

          <div className={`main-container ${isOpenSidebar && "open"} pt-0`}>
            {props.children}
          </div>
          <Footer />
        </>
      )}
    </>
  )
}
