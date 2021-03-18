import { useMediaQuery } from "react-responsive"

// TODO: add event listener for the resize
function Mobile({ children }) {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  })
  return isTabletOrMobileDevice && children
}

function Desktop({ children }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 769px)",
  })
  return isDesktopOrLaptop && children
}

const Responsive = { Mobile, Desktop }

export default Responsive
