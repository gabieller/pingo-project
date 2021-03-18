import React, { useRef } from "react"
import { useEffectOnlyOnce } from "../utils/hooks"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
// import IphoneAnimation from "../components/IphoneAnimation"

import LayoutPingo from "../components/LayoutPingo"
import Responsive from "../components/Responsive"
import CanvasPingo from "../components/CanvasPingo"

import trclogo from "../images/trc-logo-black.png"
import arrowright from "../images/arrow-right-black.svg"
import arrowrightmobile from "../images/arrow-right-black-mobile.svg"
import pingologowhite from "../images/pingologowhite.png"
import medium from "../images/medium_black.svg"
import linkedin from "../images/linkedin_black.svg"
import twitter from "../images/twitter_black.svg"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"
import mockup_ridepingo from "../images/mockup-ridepingo.png"
import ridepingo from "../images/ridepingo.png"
import ridepingo_mobile from "../images/ridepingo_mobile.png"
import womanillustration from "../images/woman-illustration.png"

import "../styles/pingo.css"

//TODO: fix card size large screen
export default function Pingo(props) {
  useEffectOnlyOnce(() => {
    window.addEventListener("scroll", scrollRotate)
    return () => {
      window.removeEventListener("scroll", scrollRotate)
    }
  })

  // window.addEventListener("scroll", scrollRotate)

  function scrollRotate() {
    let ridepingo = document.getElementById("ridePingo")
    if (window.pageYOffset < 350)
      ridepingo.style.transform =
        "translateY(" + window.pageYOffset * 0.28 + "px)"
  }

  const canvasRef = useRef()
  return (
    <LayoutPingo {...props}>
      <div id="pingo-page" className="container-fluid">
        <Responsive.Desktop>
          <div id="pingo-header">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <CanvasPingo ref={canvasRef} />
            </div>

            <div className="container" role="application">
              <div className="d-flex flex-row">
                <div
                  id="social-icons"
                  className="col-3 py-3 d-flex align-middle"
                >
                  <Button
                    className="btn btn-link px-0"
                    href="https://medium.com/routable-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={medium}
                      alt="Medium button"
                      width="24"
                      height="24"
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

                <div className="col-9">
                  <Link to="/">
                    <div className="d-flex flex-row-reverse row-trc-logo user-select-none">
                      <img className="trc-logo" src={trclogo} alt="TRC logo" />
                      <img src={arrowright} alt="Go to TRC" />
                    </div>
                  </Link>
                </div>
              </div>

              <div
                className=" d-flex flex-row pingo-landing-page user-select-none justify-content-center"
                onMouseDown={e => {
                  e.stopPropagation()
                  canvasRef.current.triggerAnimation(e)
                }}
              >
                <img
                  className="img-fluid pingo-logo"
                  src={pingologowhite}
                  alt="Pingo Main logo"
                />
                <h1 className="d-flex align-items-center fs-3 ps-3">
                  Transit <br />
                  that moves <br />
                  with you
                </h1>
              </div>
              <div
                id="download-pingo"
                className="col-10 d-flex flex-row section container shadow-lg bg-white container mt-5"
              >
                <div className="row col-md-6">
                  <h2 className="fs-5">
                    The whole city in <br />
                    the palm of your hand.
                  </h2>
                  <h2 className="fs-1">Download</h2>
                  <h2 id="Pingo_Rider" className="fw-bold fs-1">
                    Pingo Rider
                  </h2>
                  <div className="col-8">
                    <div className="d-flex flex-row">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.theroutingcompany.pingo.rider"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link px-0"
                      >
                        <img
                          src={googleplaybadge}
                          alt="Google Play Download"
                          className="img-fluid"
                        />
                      </a>
                      <a
                        href="https://apps.apple.com/in/app/pingo-rider/id1536281958"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link px-0"
                      >
                        <img
                          src={appstorebadge}
                          alt="App Store Download"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 wrap-mockup">
                  <img
                    id="ridePingo"
                    src={ridepingo}
                    alt="Mockup Pingo"
                    className="mockup-image img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div id="announcements-card" className="section-mini">
            <div className="container">
              <div className=" announcements-title">
                <h3 className="green fs-2">The talk of the town</h3>
              </div>

              <div className="announcements-list">
                <div className="announcements-1 p-5 d-flex flex-column ">
                  <div className="announcements-text fs-5">
                    <div>
                      “The most fun <br /> app to use!”
                    </div>
                    <div className="pt-5 announcements-name">
                      George M., <br /> Pingo rider
                    </div>
                  </div>
                </div>

                <div className="announcements-2 p-5 d-flex flex-column ">
                  <div className="announcements-text fs-5">
                    <div>“Pingo helps me save 20 minutes every day!</div>
                    <div className="pt-5 announcements-name">
                      Savannah W., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-3 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>“It’s a huge improvement on my commute. Love it!”</div>
                    <div className="pt-5 announcements-name">
                      Jason O., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-4 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>
                      “I wish I had discovered Pingo before. It’s incredible!”
                    </div>
                    <div className="pt-5 announcements-name ">
                      Maria B., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-5 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>
                      I love Pingo, and I love the impact it has on my city - I
                      definitely recommend it!”
                    </div>
                    <div className="pt-3 announcements-name">
                      Sharon S., <br /> Pingo rider
                    </div>
                  </div>
                </div>
                <div className="announcements-6 p-5 d-flex flex-column">
                  <div className="announcements-text fs-5">
                    <div>“It is very easy to use, and super reliable.”</div>
                    <div className="pt-5 announcements-name">
                      Onika P., <br /> Pingo rider
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container section">
            <h3 className="text-center text-hover fs-1">
              Are you <span className="underline-right text-green">ready</span>{" "}
              to have the whole
              <br /> city in the palm of your hand?
            </h3>

            <div id="box-pingo" className="section">
              <div className="container box-shadow shadow-lg ">
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <div className="col-4">
                    <img src={mockup_ridepingo} alt="Ride Pingo"></img>
                  </div>
                  <div className="col-7 px-5">
                    <h2>
                      Download <br /> <b>Pingo Driver</b>
                    </h2>
                    <div className="col-8">
                      <div className="d-flex flex-row">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.theroutingcompany.pingo.driver"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-link px-0"
                        >
                          <img
                            src={googleplaybadge}
                            alt="Google Play Download"
                            className="img-fluid"
                          />
                        </a>
                        <a
                          href="https://apps.apple.com/in/app/pingo-driver/id1536219091"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-link px-0"
                        >
                          <img
                            src={appstorebadge}
                            alt="App Store Download"
                            className="img-fluid"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-1 wrap-illustration-pingo">
                  <img
                    src={womanillustration}
                    alt="Woman Standing"
                    className="somewhere-illustration-pingo"
                    width="450px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Responsive.Desktop>

        <Responsive.Mobile>
          <div id="pingo-header">
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
              }}
            >
              <CanvasPingo ref={canvasRef} />
            </div>

            <div className="container" role="application">
              <Link to="/">
                <div className="d-flex flex-row-reverse row-trc-logo-mobile user-select-none">
                  <div className="trc-logo-mobile">
                    <img
                      className="g-0 img-fluid"
                      src={trclogo}
                      alt="TRC Main logo"
                      width="140"
                      // height="400"
                    />
                  </div>

                  <img
                    src={arrowrightmobile}
                    alt="Go to TRC"
                    className="arrow"
                  />
                </div>
              </Link>
            </div>

            <div
              className="  d-flex flex-column pingo-landing-page user-select-none text-center"
              onMouseDown={e => {
                e.stopPropagation()
                canvasRef.current.triggerAnimation(e)
              }}
            >
              <div className="d-flex justify-content-center">
                <div className="col-11">
                  <img
                    className="img-fluid  pt-5"
                    src={pingologowhite}
                    alt="Pingo Main logo"
                  />
                </div>
              </div>

              <h1 className="fs-3 py-4">Transit that moves with you</h1>

              <div className="d-flex justify-content-center wrap-mockup">
                <div className="col-6">
                  <img
                    className="img-fluid phone-mobile"
                    src={ridepingo_mobile}
                    alt="Pingo Main logo"
                  />
                </div>
              </div>
            </div>

            <div
              id="download-pingo"
              className="col-10 d-flex flex-column section-mini container shadow-lg bg-white container"
            >
              <div className="row px-3">
                <h4 className="text-left">
                  The whole city in <br />
                  the palm of your hand.
                </h4>
                <h2 className="fs-1 pt-4">Download</h2>
                <h2 className="fw-bold fs-1">Pingo Rider</h2>
                <div className="d-flex flex-column col-8 ">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.theroutingcompany.pingo.rider"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link px-0"
                  >
                    <img
                      src={googleplaybadge}
                      alt="Google Play Download"
                      className="img-fluid"
                    />
                  </a>
                  <a
                    href="https://apps.apple.com/in/app/pingo-rider/id1536281958"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-link px-0"
                  >
                    <img
                      src={appstorebadge}
                      alt="App Store Download"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white">
            <div id="announcements-card" className="section">
              <div className="container">
                <div className="announcements-list">
                  <div className="announcements-1-mobile p-5 d-flex flex-column ">
                    <div className="announcements-text fs-6">
                      <div>
                        “The most fun <br /> app to use!”
                      </div>
                      <div className="pt-3 announcements-name">
                        George M., <br /> Pingo rider
                      </div>
                    </div>
                  </div>

                  <div className="announcements-2-mobile p-5 d-flex flex-column ">
                    <div className="announcements-text fs-6">
                      <div>“Pingo helps me save 20 minutes every day!</div>
                      <div className="pt-3 announcements-name">
                        Savannah W., <br /> Pingo rider
                      </div>
                    </div>
                  </div>
                  <div className="announcements-3-mobile p-5 d-flex flex-column">
                    <div className="announcements-text fs-6">
                      <div>
                        “It’s a huge improvement on my commute. Love it!”
                      </div>
                      <div className="pt-3 announcements-name">
                        Jason O., <br /> Pingo rider
                      </div>
                    </div>
                  </div>
                  <div className="announcements-4-mobile p-5 d-flex flex-column">
                    <div className="announcements-text fs-6">
                      <div>
                        “I wish I had discovered Pingo before. It’s incredible!”
                      </div>
                      <div className="pt-3 announcements-name ">
                        Maria B., <br /> Pingo rider
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-mini d-flex justify-content-center">
              <h2 className="text-center pb-5 px-5">
                Are you{" "}
                <span className="text-decoration-underline fw-bold">ready</span>{" "}
                to have the whole city in the palm of your hand
              </h2>
            </div>
            <div className="row pb-5">
              <div className="container box-shadow shadow col-9">
                <div className="d-flex flex-column pt-3 pb-5">
                  <div>
                    <img
                      src={mockup_ridepingo}
                      alt="Ride Pingo"
                      className="img-fluid"
                    />
                  </div>
                  <div>
                    <h3 className="pt-5">Download</h3>
                    <h3 className="fs-5 fw-bold">Pingo Driver</h3>
                    <div className="d-flex flex-column px-5 pt-3 justify-content-center">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.theroutingcompany.pingo.driver"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link px-0"
                      >
                        <img
                          src={googleplaybadge}
                          alt="Google Play Download"
                          className="img-fluid"
                        />
                      </a>
                      <a
                        href="https://apps.apple.com/in/app/pingo-driver/id1536219091"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-link px-0"
                      >
                        <img
                          src={appstorebadge}
                          alt="App Store Download"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Responsive.Mobile>
      </div>
    </LayoutPingo>
  )
}
