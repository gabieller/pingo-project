import React from "react"
import Responsive from "../Responsive"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"

const SurveyItem = ({ handleChange, nextStep, icon, content, question }) => {
  const handleNext = e => {
    e.preventDefault()
    handleChange(question, content)
    nextStep()
  }

  return (
    <>
      <Responsive.Desktop>
        <Button>
          <Card
            className="rounded-0 border-dark"
            variant="outlined"
            onClick={e => handleNext(e, 0)}
          >
            <CardContent className="d-flex flex-column card-content justify-content-center">
              <img src={icon} height="64" alt="Agency" />
              <p
                className="fs-6 pt-3"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </CardContent>
          </Card>
        </Button>
      </Responsive.Desktop>

      <Responsive.Mobile>
        <Button className="border border-dark rounded-0 card-modal-mobile mx-1 mb-3">
          <Card
            className="border-0"
            variant="outlined"
            onClick={e => handleNext(e, 0)}
          >
            <CardContent className="d-flex flex-column card-content-mobile p-0 mx-2">
              <img src={icon} height="24" alt="Agency" />
              <p
                className="pt-2 mb-0"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </CardContent>
          </Card>
        </Button>
      </Responsive.Mobile>
    </>
  )
}

export default SurveyItem
