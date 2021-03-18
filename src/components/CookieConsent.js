import React from "react"
import { Link } from "gatsby"
import CookieConsent from "react-cookie-consent"

export default function Cookies() {
  return (
    <CookieConsent
      buttonText="Agree"
      buttonClasses="btn-black btn-action"
      style={{ background: "white", color: "black" }}
    >
      We use cookies on our website to see how you interact with it. By
      accepting, you agree to our use of such cookies.{" "}
      <Link to="/privacypolicy" style={{ color: "black" }}>
        Privacy Policy
      </Link>
    </CookieConsent>
  )
}
