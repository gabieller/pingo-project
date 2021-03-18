import React, { Suspense } from "react"
import { useForm, ValidationError } from "@formspree/react"
import Layout from "../components/Layout"
import Responsive from "../components/Responsive"
import Button from "@material-ui/core/Button"

import "../styles/contact.css"

const CanvasAnimation = React.lazy(() =>
  import("../components/CanvasAnimation")
)

export default function Contact(props) {
  const [state, handleSubmit] = useForm("moqpgowq")

  return (
    <Layout {...props}>
      <Responsive.Desktop>
        <div id="contact" className=" container-fluid">
          <div className="  title justify-content-left">
            <div className="animation-container">
              <Suspense fallback={<div className="fallback" />}>
                <CanvasAnimation />
              </Suspense>
            </div>

            <div className="container title-content g-0">
              <div className="container">
                <div className="section  row ps-md-5">
                  <div className="col-md-8 shadow bg-white p-md-5">
                    <h1 className="ps-5">
                      Lower costs. More coverage. <br />
                      <p className="green">Contact our team.</p>
                    </h1>

                    <form onSubmit={handleSubmit} className="form g-0 ps-5">
                      <div className="row g-3 pb-3 align-items-start">
                        <div className="col-md-3 mt-0 fw-bold">
                          <label
                            htmlFor="inputEmail"
                            className="col-form-label"
                          >
                            Email
                          </label>
                        </div>
                        <div className="col-md-9 g-0">
                          <input
                            name="Email"
                            placeholder="| janedoe@example.com"
                            type="text"
                            id="inputEmail"
                            className="form-control rounded-0"
                            aria-describedby="email"
                          />
                          <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="row g-3 align-items-start">
                        <div className="col-md-3 mt-0 fw-bold">
                          <label
                            htmlFor="inputMessage"
                            className="col-form-label"
                          >
                            Problem to solve
                          </label>
                        </div>
                        <div className="col-md-9 g-0">
                          <textarea
                            name="message"
                            type="textarea"
                            placeholder="| Insert your message here"
                            rows="5"
                            id="inputMessage"
                            className="form-control rounded-0"
                            aria-describedby="message"
                          />

                          <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                          />
                        </div>
                      </div>

                      <div className="d-flex flex-row-reverse pt-md-3 py-4 ">
                        <Button
                          type="submit"
                          className="btn btn-black btn-block"
                          disabled={state.submitting}
                          variant="contained"
                        >
                          Get in touch
                        </Button>

                        {state.succeeded ? (
                          <div id="message" className="px-5">
                            {" "}
                            Thank you for your response!
                          </div>
                        ) : null}
                      </div>
                    </form>
                  </div>

                  <div className="col-md-4 pt-5 ps-md-4 pe-md-0">
                    <div className="py-3 box">
                      <h5 className="fw-bold">General queries</h5>
                      <small>
                        For general queries, please email <br />
                        <span className="text-decoration-underline">
                          hello@theroutingcompany.com
                        </span>
                      </small>
                    </div>
                    <div className="py-3 box">
                      <h5 className="fw-bold">Technical support</h5>

                      <small>
                        For general queries, please email <br />
                        <span className="text-decoration-underline">
                          hello@theroutingcompany.com
                        </span>
                      </small>
                    </div>
                    <div className="py-3 box">
                      <h5 className="fw-bold">Careers</h5>
                      <small>
                        For general queries, please email <br />
                        <span className="text-decoration-underline">
                          hello@theroutingcompany.com
                        </span>
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Responsive.Desktop>

      <Responsive.Mobile>
        <div id="contact" className=" container-fluid">
          <div className=" title justify-content-left">
            <div className="animation-container" style={{ opacity: "0.2" }}>
              <Suspense fallback={<div className="fallback" />}>
                <CanvasAnimation />
              </Suspense>
            </div>

            <div className="container title-content g-0">
              <div className="container">
                <div className="section-mini row ps-3">
                  <h1>
                    Lower costs. <br />
                    More coverage. <br />
                    <p className="green">Contact our team.</p>
                  </h1>
                  <div className="d-flex justify-content-center">
                    <div className="shadow bg-white">
                      <form onSubmit={handleSubmit} className="form px-4">
                        <div className="row g-3 align-items-center">
                          <div className="col-4 fw-bold px-0">
                            <label
                              htmlFor="inputEmail"
                              className="col-form-label"
                            >
                              Email
                            </label>
                          </div>
                          <div className="col-11 g-0">
                            <input
                              name="Email"
                              placeholder="| janedoe@example.com"
                              type="text"
                              id="inputEmail"
                              className="form-control rounded-0"
                              aria-describedby="email"
                            />
                          </div>
                        </div>

                        <div className="row g-3 align-items-center">
                          <div className="col-7 fw-bold px-0">
                            <label
                              htmlFor="inputMessage"
                              className="col-form-label"
                            >
                              Problem to solve
                            </label>
                          </div>
                          <div className="col-11 g-0">
                            <textarea
                              name="message"
                              type="textarea"
                              placeholder="| Insert your message"
                              rows="5"
                              id="inputMessage"
                              className="form-control rounded-0"
                              aria-describedby="message"
                            />
                          </div>
                        </div>

                        <div className="col-11  py-4  ">
                          <Button
                            type="submit"
                            className="btn btn-black btn-block col-12"
                            disabled={state.submitting}
                            variant="contained"
                          >
                            Get in touch
                          </Button>
                          {state.succeeded ? (
                            <div id="message" className="px-5">
                              {" "}
                              Thank you for your response!
                            </div>
                          ) : null}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-9 ps-5">
                  <div className="py-3">
                    <h5 className="fw-bold">General queries</h5>
                    <small>
                      For general queries, please email
                      hello@theroutingcompany.com
                    </small>
                  </div>
                  <div className="py-3">
                    <h5 className="fw-bold">Technical support</h5>

                    <small>
                      For general queries, please email
                      hello@theroutingcompany.com
                    </small>
                  </div>
                  <div className="py-3">
                    <h5 className="fw-bold">Careers</h5>
                    <small>
                      For general queries, please email
                      hello@theroutingcompany.com
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Responsive.Mobile>
    </Layout>
  )
}
