import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import Button from "@material-ui/core/Button"
import Modal from "../components/ModalComponents/Modal"
import { HamburgerCollapse } from "react-animated-burgers"
import SideMenu from "./SideMenu"
import { useEffectOnlyOnce } from "../utils/hooks"

import "../styles/header.css"
import trclogo from "../images/trc-logo-black.png"

export default function Header({ uri }) {
  const [state, setState] = useState({
    visibilityClass: "",
    isSidebarOpen: false,
  })
  const pathname = window.location.pathname
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleButton = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      isSidebarOpen: !prevState.isSidebarOpen,
    }))
  }, [])

  useEffectOnlyOnce(() => {
    const handleScroll = () => {
      setState(prevState => ({
        ...prevState,
        visibilityClass:
          window.pageYOffset > 60 ? "bg-white navbar-scrolled" : "",
      }))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const openModal = () => {
    setIsModalVisible(prev => !prev)
  }

  const closeModalHandler = () => setIsModalVisible(false)

  const keyPress = useCallback(
    e => {
      if (e.key === "Escape" && state.isSidebarOpen) {
        setState(false)
      }
    },
    [setState, state.isSidebarOpen]
  )

  useEffect(() => {
    document.addEventListener("keydown", keyPress)
    return () => document.removeEventListener("keydown", keyPress)
  }, [keyPress])

  return (
    <>
      <nav
        id="header"
        className={` navbar fixed-top col-12  ${state.visibilityClass}`}
      >
        <div className="container">
          <Link to="/" className="navbar-brand py-3 ms-md-4 ms-xxl-0">
            <img src={trclogo} alt="Main logo" className="logo-header" />
          </Link>
          {pathname !== "/" && (
            <div className="col-md-5 d-none d-md-block d-lg-block">
              <div className="d-flex flex-row-reverse ">
                <div>
                  {isModalVisible ? (
                    <div
                      onClick={closeModalHandler}
                      className="back-drop"
                    ></div>
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
          )}

          {pathname === "/" && window.pageYOffset > 450 ? (
            <div className="col-md-5 d-none d-md-block d-lg-block">
              <div className="d-flex flex-row-reverse ">
                <div>
                  {isModalVisible ? (
                    <div
                      onClick={closeModalHandler}
                      className="back-drop"
                    ></div>
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
          ) : null}

          <HamburgerCollapse
            className="collapse-button p-0"
            isActive={state.isSidebarOpen}
            barColor="black"
            onClick={toggleButton}
          />
        </div>
      </nav>

      <HamburgerCollapse
        className="fixed-top collapse-button"
        isActive={state.isSidebarOpen}
        barColor={state.isSidebarOpen ? "white" : "transparent"}
        onClick={toggleButton}
      />
      <SideMenu
        visible={state.isSidebarOpen}
        uri={uri}
        onClick={toggleButton}
      />
    </>
  )
}
