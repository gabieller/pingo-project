import React, { Suspense, useState } from "react"
import Layout from "../components/Layout"
import Arrow from "../components/Arrow"
import Responsive from "../components/Responsive"
import Button from "@material-ui/core/Button"
import Modal from "../components/ModalComponents/Modal"

import coverage from "../images/coverage-icon.svg"
import efficiency from "../images/efficiency-icon.svg"
import equity from "../images/equity-icon.svg"
import convenience from "../images/convenience-icon.svg"
import howitworks from "../images/whytrc-howitworks.jpg"
import whytrclines from "../images/whytrc-lines.jpg"
import mockup_ridepingo from "../images/mockup-ridepingo.png"
import womanillustration from "../images/woman-illustration.png"
import add_circle from "../images/add_circle.svg"
import equal_circle from "../images/equal_circle.svg"
import mockup from "../images/mockup.png"
import googleplaybadge from "../images/google-play-badge.png"
import appstorebadge from "../images/app-store-badge.png"

import "../styles/whytrc.css"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

export default function WhyTRC(props) {
  const [buttonText, setButtonText] = useState(
    "A revolution in demand-response transportation"
  )

  const changeText = text => setButtonText(text)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)

  return (
    <Layout {...props}>
      <div id="whytrc" className="container-fluid">
        <div className="section title why-trc">
          <div className="animation-container">
            <Suspense fallback={<div className="fallback" />}>
              <CanvasAnimation />
            </Suspense>
          </div>
          <Responsive.Desktop>
            <div className="container title-content ">
              <h1 className="pb-3 pt-5 ps-md-4 ms-md-3 ps-3">
                It’s <br />
                <p className="green">
                  time to launch the{" "}
                  <span className="text-decoration-underline text-dark">
                    most efficient
                  </span>{" "}
                  <br /> on-demand transportation system in the world
                </p>
              </h1>
            </div>
          </Responsive.Desktop>
          <Responsive.Mobile>
            <div className="container title-content">
              <h1 className="section pb-3 ps-4">
                It’s time
                <br />
                <p className="green">
                  to launch the most efficient on-demand transportation system
                  in the world
                </p>
              </h1>
            </div>
          </Responsive.Mobile>
        </div>
        <div className="container px-5 pt-3">
          <div className="row row-cols-1 row-cols-md-4 cards-row">
            <div className="col-md-3 pb-3 pb-md-0 ps-md-0  pe-md-3">
              <div
                className="card bg-white border border-dark mx-0 h-75"
                onClick={() =>
                  changeText("A revolution in demand-response transportation")
                }
              >
                <div className="card-body h-75 icons d-flex flex-row ps-md-1 ps-lg-3">
                  <img src={coverage} alt="Coverage Icon" className="pe-3" />
                  <span className="card-title m-0 fs-6">Coverage</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 pb-3 pb-md-0 ps-md-0 pe-md-3">
              <div
                className="card bg-white border border-dark mx-0 h-75"
                onClick={() =>
                  changeText(
                    "Microtransit will no longer be an expensive experiment"
                  )
                }
              >
                <div className="card-body h-75 icons d-flex flex-row ps-md-1 ps-lg-3">
                  <img
                    src={efficiency}
                    alt="Efficiency Icon"
                    className="pe-3"
                  />
                  <span className="card-title m-0 fs-6">Efficiency</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 pb-3 pb-md-0 ps-md-0 pe-md-3">
              <div
                className="card bg-white border border-dark mx-0 h-75"
                onClick={() =>
                  changeText("Cost per rider trip is on-par with fixed routes")
                }
              >
                <div className="card-body h-75 icons d-flex flex-row ps-md-1 ps-lg-3">
                  <img src={equity} alt="equity Icon" className="pe-3" />
                  <span className="card-title m-0 fs-6">Equity</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 pb-3 pb-md-0 ps-md-0 pe-md-3">
              <div className="card bg-white  border border-dark mx-0 h-75">
                <div
                  className="card-body h-75 icons d-flex flex-row ps-md-1 ps-lg-3"
                  onClick={() => changeText("Dial-a-ride in real time")}
                >
                  <img
                    src={convenience}
                    alt="Convenience Icon"
                    className="pe-3"
                  />
                  <span className="card-title m-0 fs-6">Convenience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-trc pt-5 px-md-5 mx-md-3 px-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3 text-center pb-2">
                All possible routes are considered in real time
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Global optimization allows you to optimize for the city not the
                individual
              </div>
              <div className="col-md-1 text-center pb-2">
                <img src={add_circle} alt="Add Icon" />
              </div>
              <div className="col-md-3 text-center pb-2">
                Real-time rebalancing reduces vehicle miles travelled
              </div>
              <div className="d-flex justify-content-center pt-5">
                <hr className="col-9 line" />
              </div>
            </div>
            <div className="d-flex flex-column d-flex justify-content-center  pt-4 equal-icon">
              <div className="d-flex justify-content-center pb-2 pt-5">
                <img src={equal_circle} alt="Equal Icon" />
              </div>
            </div>
            <div>
              <h2 className="text-center pt-5 fw-bold">{buttonText}</h2>
            </div>
          </div>
        </div>

        <div className="row col-9 justify-content-center pt-3">
          <img src={mockup} alt="Mockup" className="img-fluid" />
        </div>
      </div>

      <div className="container-fluid  border border-dark bg-white">
        <div className="row">
          <div className="col-12 col-md-7 how-it-works d-flex flex-column justify-content-center align-items-center p-5">
            <h2 className="col-12 col-md-9 pb-3">How it works</h2>
            <div className="col-12 col-md-9 pe-5">
              <p className="fs-5">
                You’ll get a full product suite to dynamically route shared
                rides in real-time through a fleet management dashboard, a rider
                app, and a driver app, all powered by MIT-inspired technology.
              </p>
              <p className="fs-5">
                It’s the first set of tools in microtransit to allow you to
                match 14+ riders in a vehicle safely at once.
              </p>
            </div>
          </div>

          <div className="col-md-5 g-0">
            <img src={howitworks} alt="App" width="100%" height="100%" />
          </div>
        </div>
      </div>

      <div className="container-fluid  bg-white">
        <div className="row g-0">
          <div className="col-md-5 p-0 col-left d-none d-md-block">
            <img
              src={whytrclines}
              className="border border-top-0 border-dark whytrc-arrow"
              alt="Why TRC"
              width="100%"
              height="100%"
            />
          </div>

          <Arrow />

          <div className="col-md-5 bg-white col-right border border-top-0 border-dark pt-5 px-md-5 px-3">
            <div className="row solutions flex-column">
              <div className="col-12 col-md-9">
                <h3 className=" fw-bold">1.</h3>
                <div className="pb-3 pb-md-5">
                  We work with you to build solutions that are tailor-made to
                  your transit needs.
                </div>
              </div>
              <div className="col-12 col-md-11">
                <h3 className=" fw-bold">2.</h3>
                <div className="pb-3 pb-md-5">
                  You access TRC fleet management tools to setup a fleet of
                  shuttles and buses in your city to operate on-demand.
                </div>
              </div>
              <div className="col-12 col-md-9">
                <h3 className=" fw-bold">3.</h3>
                <div className="pb-3 pb-md-5">
                  You set the pricing, you are in control.
                </div>
              </div>
              <div className="col-12 col-md-11">
                <h3 className="fw-bold">4.</h3>
                <div className="pb-3 pb-md-5">
                  Your riders and drivers get separate apps and your operators
                  get call center booking tools.
                </div>
              </div>
              <div className="col-12 col-md-9">
                <h3 className=" fw-bold">5.</h3>
                <div className="pb-3 pb-md-5">
                  You increase your coverage area and core metrics with less
                  stress and less money spent on operations.
                </div>
              </div>
              <div className="col-12 col-md-9">
                <h3 className=" fw-bold">6.</h3>
                <div className="pb-3 pb-md-5">
                  Riders enjoy lower wait times and more reliable service.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Responsive.Desktop>
        <div className="section-mini bg-white wrap-illustration">
          <div className=" container box-shadow shadow-lg ">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-around">
              <div className="col-md-5 col-lg-4">
                <img src={mockup_ridepingo} alt="Ride Pingo"></img>
              </div>
              <div className="col-md-5 col-lg-7 ps-md-5">
                <h2 className="fw-bold text-uppercase">
                  Ride Pingo! <br /> Download our rider app
                </h2>
                <h2>Transit that moves with you</h2>
                <div className="col-6 col-md-6 d-md-flex">
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
            <div className="wrap-illustration col-md-4">
              <img
                src={womanillustration}
                alt="Woman Standing"
                className="somewhere-illustration img-fluid"
                // width="450"
              />
            </div>
          </div>
        </div>
      </Responsive.Desktop>

      <Responsive.Mobile>
        <div className="row pt-5 bg-white">
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
                <h3 className="fw-bold text-uppercase pt-5">
                  Ride Pingo! <br />
                </h3>
                <h3 className="fw-bold">Download our rider app</h3>
                <p className="fs-5">Transit that moves with you</p>
                <div className="d-flex flex-column px-5 justify-content-center">
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
            <div className="col-8 wrap-illustration-mobile">
              <img
                src={womanillustration}
                alt="Woman Standing"
                className="somewhere-illustration-mobile img-fluid"
              />
            </div>
          </div>
        </div>
      </Responsive.Mobile>

      <div className="section-mini bg-white">
        <div className="container fs-1 col-8 col-md-12">
          Lower costs. More coverage.
          <div className="d-flex justify-content-start pt-3 pt-md-0">
            <div>
              {isModalVisible ? (
                <div onClick={closeModalHandler} className="back-drop"></div>
              ) : null}

              <div className="action-buttons text-center">
                <Button className="btn-black" onClick={openModal}>
                  GET STARTED
                </Button>
              </div>

              <Modal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
