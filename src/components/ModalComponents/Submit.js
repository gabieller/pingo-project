import React from "react"
import { useForm, ValidationError } from "@formspree/react"
import Button from "@material-ui/core/Button"
import Responsive from "../Responsive"

import mockup from "../../images/mockup_cut.png"

export default function Sucess({ prevStep, values }) {
  const [state, handleSubmit] = useForm("xgepgjyv", {
    data: {
      _subject: "Someone joined the newsletter",
      description: function () {
        return JSON.stringify(values)
      },
    },
  })

  const response = values["highestPriority"]
  return (
    <>
      <Responsive.Desktop>
        <div id="submit">
          <div className="d-flex flex-inline pt-5">
            <div className="col-md-7">
              <h3>
                See how our product can improve <br />
                <span className="green">{response}</span> in your coverage area.
              </h3>
            </div>
          </div>

          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control ps-2"
                  placeholder="| Enter your email"
                  aria-label="| Enter your email"
                />
                <Button
                  type="submit"
                  className="btn-black"
                  variant="contained"
                  disabled={state.submitting}
                >
                  SEND
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
          <div className="d-flex flex-row-reverse">
            <img src={mockup} alt="Mockup" className="mockup img-fluid" />
          </div>
        </div>

        <div className="col-md-4 submit">
          Many companies in this space <br /> talk a big game but can’t deliver{" "}
          <br />
          results. We’re different.
        </div>
      </Responsive.Desktop>
      <Responsive.Mobile>
        <div id="submit">
          <div className="d-flex flex-column pt-5">
            <div className="col-md-7">
              <h3>
                See how our product can improve{" "}
                <span className="green">{response}</span> in your coverage area.
              </h3>
            </div>
          </div>

          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="col-11 rounded-0">
                <label htmlFor="email"></label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control ps-2 rounded-0"
                  placeholder="| Enter your email"
                  aria-label="| Enter your email"
                />
              </div>
              <div className="col-11 pb-4">
                <Button
                  type="submit"
                  className="btn btn-black col-12"
                  variant="contained"
                >
                  SEND
                </Button>
                {state.succeeded ? (
                  <div id="message" className="px-5">
                    {" "}
                    Thank you for your response!
                  </div>
                ) : null}
              </div>
            </form>
            <div className="submit-mobile py-3">
              Many companies in this space talk a big game but can’t deliver
              results. We’re different.
            </div>
          </div>
          <div className="">
            <img
              src={mockup}
              alt="Mockup"
              className="mockup-mobile img-fluid"
            />
          </div>
        </div>
      </Responsive.Mobile>
    </>
  )
}
