import icon1_1 from "../../images/form1_1.svg"
import icon1_2 from "../../images/form1_2.svg"

import icon2_1 from "../../images/form2_1.svg"
import icon2_2 from "../../images/form2_2.svg"
import icon2_3 from "../../images/form2_3.svg"
import icon2_4 from "../../images/form2_4.svg"

import icon3_1 from "../../images/coverage-icon.svg"
import icon3_2 from "../../images/efficiency-icon.svg"
import icon3_3 from "../../images/equity-icon.svg"
import icon3_4 from "../../images/convenience-icon.svg"

import icon4_1 from "../../images/form4_1.svg"
import icon4_2 from "../../images/form4_2.svg"
import icon4_3 from "../../images/form4_3.svg"

const questions = [
  {
    name: "whatAreYou",
    title: "You Are...",
    options: [
      { content: `A transit agency <br /> or operator`, icon: icon1_1 },
      {
        content: `Some other type of <br /> transportation manager`,
        icon: icon1_2,
      },
    ],
  },
  {
    name: "youWantToImprove",
    title: "You want to improve…",
    options: [
      { content: `On-demand transit`, icon: icon2_1 },
      { content: `Paratransit`, icon: icon2_2 },
      { content: `Reporting and tracking`, icon: icon2_3 },
      { content: `Fixed route`, icon: icon2_4 },
    ],
  },
  {
    name: "highestPriority",
    title: "Your highest priority is…",
    options: [
      { content: `Coverage`, icon: icon3_1 },
      { content: `Efficiency`, icon: icon3_2 },
      { content: `Equity`, icon: icon3_3 },
      { content: `Convenience`, icon: icon3_4 },
    ],
  },
  {
    name: "youHave",
    title: "You have…",
    options: [
      { content: `Buses`, icon: icon4_1 },
      { content: `Buses and drivers`, icon: icon4_2 },
      { content: `No buses`, icon: icon4_3 },
    ],
  },
]

export default questions
