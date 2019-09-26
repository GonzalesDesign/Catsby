/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Component: Article page
* Note: 
**************************************************/
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ArticleStyles from "./article.module.scss"
import Deer from './../../assets/media/deer.png'

export default function ArticleComponent() {

   const bgImgStyle = {
      backgroundImage: `url(${Deer})`,
      // position: "realative",
      // bottom: -698,
      // backgroundImage: `linear-gradient(
      //    to bottom,
      //    rgba(10,10,10,0) 0%,
      //    rgba(10,10,10,.25) 50%,
      //    rgba(10,10,10,1) 100%),
      //    url(${Deer})`,

      height: 200,
      width: "calc(70vw - 10px)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left",
      padding: "1rem",
      margin: '40px 0 0 0',
      // border: "1px solid grey",
   }

   const articleQuery = useStaticQuery(graphql`
      query {
         allContentfulHome(
            limit: 1
         ) # sort: { fields: publishedDate, order: ASC }
         # sort: { fields: [updatedAt], order: ASC },
         {
            edges {
               node {
                  id
                  title
                  subTitle
                  slug
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
         }
      }
   `)

   console.log("articleQuery: ", articleQuery)

   const richTxtAssetOptions = {
      renderNode: {
         "embedded-asset-block": node => {
            const alt = node.data.target.fields.title["en-US"]
            const imgUrl = node.data.target.fields.file["en-US"].url
            return <img alt={alt} src={imgUrl} />
         },
      },
   }

   return (
      <React.Fragment>
         {articleQuery.allContentfulHome.edges.map(({ node }) => {
            return (
               <div key={node.id} className={ArticleStyles.articleMainContainer}>
						<div style={{
                     display: "flex",
                     alignItems: 'flex-end',
							// backgroundImage: `url(${node.thumbnail.fluid.src})`
							backgroundImage: `linear-gradient(
							to bottom,
							rgba(10,10,10,0) 0%,
							rgba(10,10,10,0) 50%,
							rgba(10,10,10,.9) 100%),
							url(${node.media.fluid.src})`,
							height: "400px",
							marginTop: 100,
							backgroundSize: "cover",
							}}>
                     <div style={bgImgStyle} />
						</div>
						{/* <img src={node.media.fluid.src} alt={node.title} className={ArticleStyles.topImage}/> */}

                  <div className={ArticleStyles.articleContainer}>
                     <h1 className={ArticleStyles.title}>{node.title}</h1>

                     <h5 className={ArticleStyles.subTitle}>{node.subTitle}</h5>

                     {documentToReactComponents(node.body.json, richTxtAssetOptions)}

                  </div>
               </div>
            )
         })}
      </React.Fragment>
   )
}
