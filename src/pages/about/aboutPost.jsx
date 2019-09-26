import React from "react"
// import { graphql } from "gatsby"
import LayoutPage from "../../components/layout"
// import HeadHelmet from "../../components/head"
// import AboutPostStyles from "./about.module.scss"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date(formatString: "MMMM Do, YYYY")
//         author
//       }
//       html
//     }
//   }
// `

export default function AboutPost(props) {
  return (
    <LayoutPage>
      {/* <HeadHelmet title={props.data.markdownRemark.frontmatter.title} /> */}

      {/* <div className={AboutPostStyles.container}>

        <div className={AboutPostStyles.postBodyCopy}>
          <h1 className={AboutPostStyles.postTitle}>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
          <p className={AboutPostStyles.postDate}>
            {props.data.markdownRemark.frontmatter.date}
          </p>
          <p className={AboutPostStyles.postAuthor}>
            By: {props.data.markdownRemark.frontmatter.author}
          </p>
          <div className={AboutPostStyles.content}
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </div>

      </div> */}

    </LayoutPage>
  )
}
