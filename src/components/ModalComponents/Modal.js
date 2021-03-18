import React, { useRef, useEffect, useCallback } from "react"
import MultiStepForm from "./MultiStepForm"
// import Button from "@material-ui/core/Button"

import "../../styles/modal.css"
import arrow from "../../images/modal_arrow.svg"

export default function Modal({ isModalVisible, setIsModalVisible }) {
  const modalRef = useRef()

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && isModalVisible) {
        setIsModalVisible(false)
      }
    },
    [setIsModalVisible, isModalVisible]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      {isModalVisible ? (
        <div
          id="modal"
          className="modal-wrapper p-md-5 p-3"
          style={{
            transform: isModalVisible
              ? "translateY(0vh)"
              : "translateY(-100vh)",
            opacity: isModalVisible ? "1" : "0",
          }}
        >
          <MultiStepForm setIsModalVisible={setIsModalVisible} ref={modalRef} />
          <div className="wrap-close-btn">
            <button
              className="close-button"
              onClick={() => setIsModalVisible(prev => !prev)}
            >
              <img className="arrow" src={arrow} widt />
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
