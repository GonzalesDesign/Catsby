/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.28
* Note: Grid layout design Africa. 
	Collection of cards for Blog's Africa section.
* To do: Use a different template design.
**************************************************/

import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

export default function AfricaMainGridComponent() {

   /*--------=| materialui: css |=--------*/
   const classes = useStyles()

   /*--------=| graphql |=--------*/
   const queryBlog = useStaticQuery(graphql`
      query AfricaQuery {
         allContentfulBlogPost(
            # limit: 6,
            sort: { fields: [createdAt], order: DESC }
            filter: {
               node_locale: { eq: "en-US" }
               continent: { elemMatch: { title: { eq: "Africa" } } }
            }
         ) {
            edges {
               node {
                  id
                  title
                  slug
                  internal {
                     type
                  }
                  media {
                     fluid {
                        src
                        ...GatsbyContentfulFluid
                     }
                  }
                  continent {
                     id
                     slug
                     title
                  }
               }
            }
         }
      }
   `)
   /*--------=| render |=--------*/
   return (
      <React.Fragment>
			<h1 style={{color:"var(--rlg-color-success)",}}>AFRICAN CONTINENT</h1>
         <div className={classes.blogWrapper}>
            {queryBlog.allContentfulBlogPost.edges.map(({ node }) => {

					return (
                     <div
                        key={node.id}
                        className={classes.blogContainer}
                        style={{
                           backgroundImage: `linear-gradient(
									to bottom,
									rgba(10,10,10,0) 0%,
									rgba(10,10,10,0) 50%,
									rgba(10,10,10,.9) 100%),
                           url(${node.media.fluid.src})`,
                        }}
                        
                        onClick={() => navigate(`/blogTemplate/${node.slug}`)} >

                        <div className={classes.titleContainer}>
                           <h6 style={{ 
                              color: "var(--rlg-color-medium-tint3)", 
                              margin: 10, 
                              letterSpacing: 1.7, 
                              fontSize: 16 }}>
                              {node.title}
                           </h6>
                        </div>
                     </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}

const gridChildLargeHt = 250 //350
const useStyles = makeStyles({
   blogWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridAutoRows: gridChildLargeHt,
      // overflow: "hidden",
      background: "var(--rlg-color-danger-shade)",
      border: "4px solid var(--rlg-color-success-shade)",
      // border: "4px solid white",
   },

   blogContainer: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      // padding: "0, 0, 0, 20",
      paddingLeft: 20,
      paddingBottom: 0,
      transition: "all 0.3s ease",
      // border: "1px solid white",

      "&:hover": {
         cursor: "pointer",
         transform: "scale(1.02)",
         zIndex: 101,
         // overflow: "hidden",
      },
      "&:nth-child(1)": {
         gridColumnStart: "span 8",
         height: gridChildLargeHt,
         // overflow: "hidden",
      },
      "&:nth-child(2)": {
         gridColumnStart: "span 4",
         height: gridChildLargeHt,
         backgroundPosition: "top left",
      },
      "&:nth-child(3)": {
         gridColumnStart: "span 12",
         // gridColumnStart: gridCount,
         height: gridChildLargeHt,
         backgroundPosition: "top left",
      },

      "@media screen and (max-width: 800px)": {
         "&:nth-child(n)": {
            gridColumnStart: "span 6",
         },
         "&:nth-last-child(1)": {
            gridColumnStart: "span 12",
         },
      },
      "@media screen and (max-width: 500px)": {
         "&:nth-child(n)": {
            gridColumnStart: "span 12",
         },
      },
   },

})
