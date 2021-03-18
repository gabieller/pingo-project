import React, { useState } from "react"
import { Link } from "gatsby"

import "../styles/navbar-pingo.css"

const getSelected = (i, length) => (i >= 0 && i < length ? i : 0)

export default function NavBar({ tabs, selected }) {
  const [inHover, setHover] = useState(getSelected(selected, tabs.length))

  const underlineStyle = {
    width: `${100 / tabs.length}%`,
    transform: `translate3d(${inHover * 100}%, 0, 0)`,
  }
  return (
    <ul className="navbar-pingo nav d-flex ">
      {[1, 2, 3].map(i => (
        <div key={i} className="underline" style={underlineStyle} />
      ))}
      {tabs.map(({ name, url }, index) => (
        <Link
          key={name}
          to={`#${url}`}
          className="nav-item text-decoration-none"
          onMouseEnter={() => setHover(getSelected(index, tabs.length))}
          onMouseLeave={() => setHover(getSelected(selected, tabs.length))}
        >
          {name}
        </Link>
      ))}
    </ul>
  )
}
