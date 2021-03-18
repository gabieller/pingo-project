import React, { useState } from "react"
import Layout from "../components/Layout"
import Button from "@material-ui/core/Button"

import Modal from "../components/ModalComponents/Modal"
import "../styles/modal.css"

export default function Test(props) {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)

  return (
    <Layout {...props}>
      <div className="pt-5">
        {isModalVisible ? (
          <div onClick={closeModalHandler} className="back-drop"></div>
        ) : null}
        <Button className="mt-5 btn-black" onClick={openModal}>
          GET STARTED
        </Button>
        <Modal
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </Layout>
  )
}
