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
  
  const queryData = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        filter: {fileAbsolutePath: {ne: null} },
      ){
        edges {
          node {
            frontmatter {
              title
              date
              author
              image {
                relativePath
                name
              }
            }
            html
            # fields {
            #   slug
            # }
          }
        }
      }
    }
  `)

  return (
    <LayoutPage>
      <HeadHelmet title="About" />

      {/* markDown files */}
      <div className={AboutStyle.container}>
        <ol>
          {queryData.allMarkdownRemark.edges.map(({ node }) => {
            const title = node.frontmatter.title || node.slug
            const date = node.frontmatter.date
            // const id = node.frontmatter.title
            const slug = node.fields.slug
            // const image = node.frontmatter.image
            // const html = node.html
            //  console.log("slug: ", slug)
            //  console.log("image: ", image)
            //  console.log("html: ", html)
            //  console.log("node: ", node)
            //  console.log("title: ", title)

            ///////// TO DO: get the image source working ////////////////////////

            return (
              <Link to={`/about/aboutPost/${slug}`} key={slug}>
                <li>
                  <h1>{title}</h1>
                  <p>{date}</p>
                  
                  {/* <div className={AboutStyle.htmlContent}
                    dangerouslySetInnerHTML={{ __html: html }}
                  ></div> */}

                  {/* <img src={`./../../assets/${image}`} alt={title}/> */}

                </li>
              </Link>
            )
          })}
        </ol>
      </div>
    </LayoutPage>
  )
}

export default AboutPage
