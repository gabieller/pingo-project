import React from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"

import "../styles/sidemenu.css"

import trclogowhite from "../images/trclogo-white.png"
import pingosidemenu from "../images/pingo-sidemenu.png"
import linkedin from "../images/linkedin.svg"
import medium from "../images/medium.png"
import twitter from "../images/twitter.svg"
import arrowright from "../images/arrow-right-white.svg"

export default function SideMenu({ uri, visible }) {
  return (
    <>
      <div id="overlay" className={visible ? "open" : ""}>
        <div className={`sidebar ${visible ? "open" : ""}`}>
          <div className="container flex-column">
            <Link to="/">
              <div className="pt-3">
                <img
                  src={trclogowhite}
                  alt="Main logo"
                  className=" img-fluid"
                  width="230"
                />
              </div>
            </Link>
            <div className="row d-flex section-mini">
              <div id="side-menu" className="col-md-8 menu">
                <ul className="navbar-nav ml-auto fw-bold">
                  <li className={`nav-item ${uri === "/" ? "active" : ""}`}>
                    <Link to="/" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pe-2">01</span>Home
                      </h1>
                    </Link>
                  </li>
                  <li className={`nav-item ${uri === "/team" ? "active" : ""}`}>
                    <Link to="/team" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pe-2">02</span>Team
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/whytrc" ? "active" : ""}`}
                  >
                    <Link to="/whytrc" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pe-2">03</span>Why TRC
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/contact" ? "active" : ""}`}
                  >
                    <Link to="/contact" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pe-2">04</span>Contact
                      </h1>
                    </Link>
                  </li>
                  <li className={`nav-item ${uri === "/blog" ? "active" : ""}`}>
                    <Link to="/blog" className="nav-link d-inline-flex">
                      <h1>
                        <span className="pe-2">05</span>Blog
                      </h1>
                    </Link>
                  </li>
                  <li
                    className={`nav-item ${uri === "/contact" ? "active" : ""}`}
                  >
                    <Link to="/pingo" className="nav-link d-inline-flex">
                      <img
                        src={pingosidemenu}
                        className="pingo-link"
                        alt="Go to Pingo"
                        width="155"
                        height="45"
                      />
                      <img
                        className="pt-2 arrow-pingo"
                        src={arrowright}
                        alt="Go to Pingo"
                        width="50"
                        height="50"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 contact flex-column d-flex align-items-end justify-content-end pt-5 pt-md-0 ">
                <div className="d-flex">
                  <Button
                    className="btn btn-link p-0"
                    href="https://medium.com/routable-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={medium}
                      alt="Medium button"
                      width="50"
                      height="30"
                    />
                  </Button>
                  <Button
                    className="btn btn-link p-2"
                    href="https://www.linkedin.com/company/theroutingcompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={linkedin}
                      alt="Linkedin button"
                      width="24"
                      height="24"
                    />
                  </Button>
                  <Button
                    className="btn btn-link p-2"
                    href="https://twitter.com/routing_company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={twitter}
                      alt="Twitter button"
                      width="30"
                      height="24"
                    />
                  </Button>
                </div>
                <div className="d-flex email-link">
                  <a href="mailto:hello@theroutingcompany.com?subject=Informations">
                    hello@theroutingcompany.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
