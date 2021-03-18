import React, { useRef, useImperativeHandle, forwardRef } from "react"
import anime from "animejs"

const colorPicker = (function () {
  const colors = ["#25799f", "#58968a", "#8ec999"]
  let index = 0
  function next() {
    index = index++ < colors.length - 1 ? index : 0
    return colors[index]
  }
  function current() {
    return colors[index]
  }
  return {
    next: next,
    current: current,
  }
})()
const resizeCanvas = function (canvas, cW, cH) {
  if (canvas) {
    canvas.width = cW
    canvas.height = cH
  }
}
function calcPageFillRadius(x, y, cW, cH) {
  var l = Math.max(x - 0, cW - x)
  var h = Math.max(y - 0, cH - y)
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2))
}

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key]
    }
  }
  return a
}

const Circle = function (opts) {
  extend(this, opts)
}

Circle.prototype.draw = function (ctx) {
  ctx.globalAlpha = this.opacity || 1
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color
    ctx.lineWidth = this.stroke.width
    ctx.stroke()
  }
  if (this.fill) {
    ctx.fillStyle = this.fill
    ctx.fill()
  }
  ctx.closePath()
  ctx.globalAlpha = 1
}
function removeAnimation(animation) {
  var index = animations.indexOf(animation)
  if (index > -1) animations.splice(index, 1)
}

let bgColor = "#8ec999"
const animations = []

const CanvasPingo = forwardRef((props, selfRef) => {
  const ref = useRef()
  React.useEffect(() => {
    const ctx = ref.current.getContext("2d")
    const cW = ref.current.clientWidth
    const cH = ref.current.clientHeight

    anime({
      duration: Infinity,
      update: () => {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, cW, cH)
        animations.forEach(anim => {
          anim.animatables.forEach(animatable => animatable.target.draw(ctx))
        })
      },
    })

    resizeCanvas(ref.current, cW, cH)

    var ro = new ResizeObserver(entries => {
      entries.forEach(({ contentRect }) =>
        resizeCanvas(ref.current, contentRect.width, contentRect.height)
      )
    })

    ro.observe(ref.current)

    setTimeout(() => {
      handleEvent({
        pageX: anime.random(cW * 0.2, cW * 0.8),
        pageY: anime.random(cH * 0.2, cH * 0.8),
      })
    }, anime.random(2000, 2500))
  }, [])

  useImperativeHandle(selfRef, () => ({
    triggerAnimation: e => {
      handleEvent(e)
    },
  }))

  const handleEvent = e => {
    if (!ref || !ref.current) {
      return
    }
    if (e.touches) {
      e.preventDefault()
      e = e.touches[0]
    }
    const cW = ref.current.clientWidth
    const cH = ref.current.clientHeight

    const currentColor = colorPicker.current()
    const nextColor = colorPicker.next()
    const targetR = calcPageFillRadius(e.pageX, e.pageY, cW, cH)
    const rippleSize = Math.min(200, cW * 0.4)
    const minCoverDuration = 750

    const fillAnimation = anime({
      targets: new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: nextColor,
      }),
      r: targetR,
      duration: Math.max(targetR / 2, minCoverDuration),
      easing: "easeOutQuart",
      complete: () => {
        bgColor = nextColor
        removeAnimation(fillAnimation)
      },
    })

    const rippleAnimation = anime({
      targets: new Circle({
        x: e.pageX,
        y: e.pageY,
        r: 0,
        fill: currentColor,
        stroke: {
          width: 3,
          color: currentColor,
        },
        opacity: 1,
      }),
      r: rippleSize,
      opacity: 0,
      easing: "easeOutExpo",
      duration: 900,
      complete: removeAnimation,
    })

    // Animação particulas
    const particlesAnimation = anime({
      targets: new Array(32).fill(0).map(
        () =>
          new Circle({
            x: e.pageX,
            y: e.pageY,
            fill: currentColor,
            r: anime.random(24, 48),
          })
      ),
      x: particle => {
        return particle.x + anime.random(rippleSize, -rippleSize)
      },
      y: particle => {
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15)
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000, 1300),
      complete: removeAnimation,
    })
    animations.push(fillAnimation, rippleAnimation, particlesAnimation)
  }

  return (
    <canvas
      style={{
        display: "block",
        width: "100%",
      }}
      ref={ref}
      onMouseDown={handleEvent}
      onTouchStart={handleEvent}
    />
  )
})

export default CanvasPingo
