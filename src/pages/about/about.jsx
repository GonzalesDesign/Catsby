import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import LayoutPage from "./../../components/layout"
import HeadHelmet from "./../../components/head"

import AboutStyle from "./about.module.scss"

// export const queryData = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             author
//           }
//         }
//       }
//     }
//   }
// `)
// console.log("about queryData: ", queryData)

const AboutPage = () => {
  
  

  return (
    <LayoutPage>
      <HeadHelmet title="About" />

      <h1 style={{color: "white", marginTop: 100, border: "0px solid white", textAlign: "center",}}>In Progress</h1>
    </LayoutPage>
  )
}

export default AboutPage
