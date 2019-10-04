/**************************************************
 * Project: Catsby
 * URL: projectname.com
 * Contact: rolandolloyd@gmail.com
 * Copyright © 2019 GonzalesDesign
 * Version: 19.09.07
 * Component: Blog Template
 * Note: Rendering template for blog section
 **************************************************/
import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import LayoutPage from "../components/layout"
import postStyles from "./postStyle.module.scss"
import HeadHelmet from "../components/head"

import HomeGridComponent from "../pages/home/index"
import ArticleComponent from "../pages/home/article"
import BlogGridComponent from "../pages/blog/blogGrid"
import BlogArticleComponent from "../pages/blog/blog-article"
import WhiteTigerOptionGridComponent from "../pages/blog/whiteTiger-option-grid"

export const queryAsiaTemplate = graphql`
   query AsiaTemplateQuery($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
         id
         title
         slug
         publishedDate(formatString: "MMMM Do, YYYY")
         media {
            fluid {
               src
               ...GatsbyContentfulFluid
            }
         }
         body {
            json
         }
         continent {
            title
            slug
         }
      }
   }
`

const AsiaTemplate = props => {
   // console.log("AsiaTemplate:props: ", props)
   const richTxtAssetOptions = {
      renderNode: {
         "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const imgUrl = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={imgUrl} />
         },
      },
   }

   const post = props.data.contentfulBlogPost
   return (
      <LayoutPage>
         <HeadHelmet title={post.title} />
         <div className={postStyles.template}>
            <h1 className={postStyles.title}>{post.title}</h1>
            <p className={postStyles.publishedDate}>{post.publishedDate}</p>

            {/*---=| Grid layed out images: posts |=---*/}
            <div style={{ marginBottom: "20px" }}>
               {(() => {
                  switch (post.title) {
                     case "Siberian Tiger": return <HomeGridComponent />
                     case "Leopard": return (
                           <div style={{ marginTop: "20px" }}>
                              <ArticleComponent />
                           </div>
                        )
                     case "Caracal": return <BlogGridComponent />
                     case "Lion": return (
                           <div style={{ marginTop: "20px" }}>
                              <BlogArticleComponent />
                           </div>
                        )
                     case "Jaguar": return (
                           <div style={{ marginTop: "20px" }}>
                              <WhiteTigerOptionGridComponent />
                           </div>
                        )
                     default:
                  }
               })()}
            </div>

            {documentToReactComponents(post.body.json, richTxtAssetOptions)}
            {/* <div dangerouslySetInnerHTML={{__html: post.body}}></div> */}
            {/* <Img fluid={post.fluid} /> */}
            {/* <Img fluid={post.media} /> */}

            <img src={post.media.fluid.src} alt={post.title} />
         </div>
      </LayoutPage>
   )
}

export default AsiaTemplate
