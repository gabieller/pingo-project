import React, { useEffect, useState } from "react"
import axios from "axios"

export default function Medium({ numberPosts }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getMediumFeed() {
      try {
        const mediumRssFeed = "https://medium.com/feed/routable-ai"
        const rssToJsonApi = "https://api.rss2json.com/v1/api.json"
        const data = { params: { rss_url: mediumRssFeed } }
        const res = await axios.get(rssToJsonApi, data)
        if (res.data.status === "ok") {
          setPosts(res.data.items)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getMediumFeed()
  }, [])

  const sortedPosts = posts.sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1))
  const showedPosts = sortedPosts.slice(0, numberPosts)

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {showedPosts.map(e => (
        <div key={e.title} className="col pe-4">
          <div
            className="card h-100"
            onClick={() => window.open(`${e.link}`, "_blank")}
            style={{ cursor: "pointer" }}
          >
            <img
              // src={"https://cdn-images-1.medium.com/max/1024/1*OZcyztxLDRSjrCWRRIUphA.png"}
              src={e.thumbnail}
              className="card-img-top"
              alt={e.title}
              style={{
                height: "25vw",
                objectFit: "cover",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p
                className="card-text"
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {e.description.replace(/(<([^>]+)>)/gi, "")}
              </p>
            </div>
            <div className="card-footer bg-transparent">
              <span className="card-text">
                {e.author}
                {" - "}
                <span className="text-muted">
                  {/* {e.pubDate} */}
                  {new Date(e.pubDate).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
