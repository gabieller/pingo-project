import React, { useState } from "react"
import Button from "@material-ui/core/Button"
import Modal from "../components/ModalComponents/Modal"

import { Link } from "gatsby"

import "../styles/demo.css"

export default function Demo() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)
  return (
    <div id="demo-component" className=" row section-mini d-flex flex-column">
      <div className="row g-0 text-center">
        <h2 className="fs-1 pb-4 text-hover">
          Are you <span className="underline-right text-green">curious</span> to
          know more?
        </h2>
      </div>

      <div className="d-inline-flex g-0 text-center  ">
        <div className="row col-12 action-buttons g-0 d-flex justify-content-center">
          <div className="col-12 col-md-3 col-xxl-2 pb-4 pb-md-0 d-flex justify-content-around">
            <div>
              {isModalVisible ? (
                <div onClick={closeModalHandler} className="back-drop"></div>
              ) : null}

              <div className="action-buttons text-center">
                <Button className="btn-black-demo" onClick={openModal}>
                  GET STARTED
                </Button>
              </div>

              <Modal
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            </div>
          </div>

          <div className="col-12 col-md-3 col-xxl-2 pb-4 pb-md-0 d-flex justify-content-around">
            <div className="action-buttons">
              <Link to="/whytrc" className="text-decoration-none">
                <Button
                  className="btn-white rounded-0 btn-action"
                  variant="contained"
                >
                  WHY TRC
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
