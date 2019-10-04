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
import { documentToReactComponents } from "@contentful/rich-text-react-renderer" //npm install
// import Img from 'gatsby-image'
import LayoutPage from "../components/layout"
import postStyles from "./postStyle.module.scss"
// import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from "../components/head"

import HomeGridComponent from "../pages/home/index"
import ArticleComponent from "../pages/home/article"
import BlogGridComponent from "../pages/blog/blogGrid"
import BlogArticleComponent from "../pages/blog/blog-article"
import WhiteTigerOptionGridComponent from "../pages/blog/whiteTiger-option-grid"
import WhiteBengalGrid from "../pages/blog/KittyGrids/WhiteBengalGrid"

export const queryBlogTemplate = graphql`
   query BlogTemplateQuery($slug: String!) {
      contentfulBlogPost(slug: { eq: $slug }) {
         id
         title
         slug
         author
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
      }
   }
`

const BlogTemplate = props => {
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
            <h1 className={postStyles.title}> {post.title} </h1>
            <p className={postStyles.publishedDate}> {post.publishedDate} </p>
            <p className={postStyles.author}> {post.author} </p>

            {/*---=| Additional component added to specific pages based on the title. |=---*/}
            <div style={{ margin: "20px 0" }}>
               {(() => {
                  switch (post.title) {
                     case "White Bengal": 	return <WhiteBengalGrid />
                     case "Siberian Tiger": 	return <HomeGridComponent />
                     case "Lion": 				return <BlogArticleComponent />
                     case "Jaguar": 			return <WhiteTigerOptionGridComponent />
                     case "Leopard": 			return <ArticleComponent />
                     case "Caracal": 			return <BlogGridComponent />
                     default:
                  }
               })()}
            </div>

            {documentToReactComponents(post.body.json, richTxtAssetOptions)}

            <img src={post.media.fluid.src} alt={post.title} />
         </div>
      </LayoutPage>
   )
}

export default BlogTemplate
