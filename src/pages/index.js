// import React from "react"
// import { Link } from "gatsby"
//
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
//
// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi World</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )
//
// export default IndexPage
import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby!"/>
    <p>What a world we live in.</p>
    <img src="https://source.unsplash.com/random/400x200" alt=""/>
  </div>
)
