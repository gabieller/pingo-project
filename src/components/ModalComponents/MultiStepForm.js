import React, { Component } from "react"
import Survey from "./Survey"
import Confirm from "./Confirm"
import Submit from "./Submit"

import questions from "./questions"

export class MultiStepForm extends Component {
  state = {
    step: 0,
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState({
      step: step + 1,
    })
  }

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState({
      step: step - 1,
    })
  }

  // Handle fields change
  handleChange = (field, value) => {
    this.setState({ [field]: value })
  }

  render() {
    const { step } = this.state

    const values = {}
    questions.forEach(e => {
      values[e.name] = this.state[e.name]
    })

    if (step === 4) {
      return (
        <Confirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
    }

    if (step === 5) {
      return <Submit values={values} />
    }

    return (
      <Survey
        index={step}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        prevStep={this.prevStep}
      />
    )
  }
}

export default MultiStepForm
