import React from "react"
import Newsletter from "../components/Newsletter"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"

import "../styles/footer.css"

import trclogo from "../images/trc-logo-white.png"
import pingologo from "../images/pingo-logo-white.png"
import medium from "../images/medium.png"
import linkedin from "../images/linkedin.svg"
import twitter from "../images/twitter.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"

// TODO: fix image size on mobile, align app buttons and social media links to the right

export default function Footer() {
  return (
    <footer id="footer" className="section-mini fw-bold">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-md-5 px-3 px-md-0">
            <div className="row g-0">
              <div className="col-6 col-md-12">
                <a to="https://theroutingcompany.com/">
                  <img src={trclogo} alt="Logo TRC" className="trclogo" />
                </a>
              </div>
              <div className="col-6 col-md-12 py-md-3 d-flex align-middle">
                <Button
                  className="btn btn-link px-0 d-dlex justify-content-start"
                  href="https://medium.com/routable-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={medium}
                    alt="Medium button"
                    width="40"
                    height="30"
                  />
                </Button>
                <Button
                  className="btn btn-link"
                  href="https://twitter.com/routing_company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twitter}
                    alt="Twitter button"
                    className="img-fluid"
                  />
                </Button>
                <Button
                  className="btn btn-link"
                  href="https://www.linkedin.com/company/theroutingcompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="Linkedin button"
                    className="img-fluid"
                  />
                </Button>
              </div>
            </div>
            <hr className="d-md-none" />
            <div className="row g-0 py-md-5">
              <div className="col-6 col-md-12 py-3">
                <Link to="/">
                  <img src={pingologo} alt="Logo PINGO" className="pingologo" />
                </Link>
              </div>
              <div className="col-6 col-md-12 py-3">
                <div className="d-flex flex-column flex-md-row col-md-6">
                  <Button
                    className="btn btn-link px-0"
                    href="https://play.google.com/store/apps/details?id=com.theroutingcompany.pingo.driver"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={googleplaybadge}
                      alt="Google Play Download"
                      className="app-badge img-fluid"
                    />
                  </Button>
                  <Button
                    className="btn btn-link px-md-4"
                    href="https://apps.apple.com/in/app/pingo-rider/id1536281958"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={appstorebadge}
                      alt="App Store Download"
                      className="app-badge img-fluid"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <hr className="d-md-none" />
          </div>
          <div className="col-3 d-none d-md-block">
            <div className="row g-0 links-row px-0">
              <div className="col-xl-5 col-lg-4 pb-md-3 links">
                <div>COMPANY</div>
                <a
                  href="https://theroutingcompany.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Home</div>
                </a>
                <a
                  href="https://theroutingcompany.com/team"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Team</div>
                </a>
                <a
                  href="https://theroutingcompany.com/whytrc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Why TRC</div>
                </a>
                <a
                  href="https://theroutingcompany.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Contact</div>
                </a>
                <a
                  href="https://theroutingcompany.com/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Blog</div>
                </a>
                <a
                  href="https://jobs.lever.co/theroutingcompany"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>Careers</div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-4 d-none d-md-block">
            <p>TRC NEWSLETTER</p>
            <Newsletter />
          </div>
        </div>
        <div className="d-flex flex-column col-12 g-0 pt-5 ps-3 ps-md-0 text-md-center">
          ??2021 The Routing Company <br />
          All Rights Reserved
          <a
            href="https://theroutingcompany.com/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms and Conditions | Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
