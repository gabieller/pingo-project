import React, { useState, useCallback } from "react"
import { QuickStartCanvas } from "react-pts-canvas"
import { Create, Group, Const, Circle } from "pts"

const createLines = space => {
  var ps = Create.distributeRandom(space, 100)
  return ps.map(item => {
    return new Group(
      item,
      item
        .clone()
        .toAngle(
          Math.random() * Const.pi,
          (Math.random() * space.size.y) / 1 + 10,
          true
        )
    )
  })
}

export default function Canvas() {
  const [lines, setLines] = useState([])

  const onResize = useCallback(space => setLines(createLines(space.bound)), [])

  const onStart = useCallback(bound => setLines(createLines(bound)), [])

  const onAnimate = useCallback(
    (space, form) => {
      const range = Circle.fromCenter(space.pointer, 20)
      form.stroke("#fff").lines(lines)
      lines.forEach(line => {
        const inPath = Circle.intersectRay2D(range, line)
        const inLine = Circle.intersectLine2D(range, line)

        if (inPath.length > 1) {
          form
            .stroke("rgba(44,84,53,.10)")
            .line(line.concat(inPath[1], inPath[0]))
          form.stroke("#BEC6C4").line(line)
          form.fillOnly("#000").points(inPath, 6, "circle")
        }

        if (inLine.length > 0) {
          form.stroke("#000").line(line)
          form.fillOnly("#000").points(inLine, 12, "circle")
        }
      })
    },
    [lines]
  )

  return (
    <QuickStartCanvas
      background="#E4E1E5"
      onStart={onStart}
      onResize={onResize}
      onAnimate={onAnimate}
      style={{
        width: "100%",
      }}
    />
  )
}
