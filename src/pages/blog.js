import React, { Suspense } from "react"
import Layout from "../components/Layout"
import Demo from "../components/Demo"

const MediumIntegration = React.lazy(() =>
  import("../components/MediumIntegration")
)

export default function Blog(props) {
  return (
    <Layout {...props}>
      <div
        id="contact"
        className="container-fluid"
        style={{ background: "#F5F4F5" }}
      >
        <div className="container ">
          <div className="section">
            <h1 className="col-8 col-md-12 ps-3">What we have been up to</h1>
            <Suspense fallback={<div />}>
              <MediumIntegration numberPosts={4} />
            </Suspense>
          </div>
        </div>
      </div>

      <Demo />
    </Layout>
  )
}
