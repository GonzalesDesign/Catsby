/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.28
* Note: Grid layout design Asia. 
	Collection of cards for Blog's Asia section.
* To do: Use a different template design.
**************************************************/

import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
// import HeadHelmet from '../../components/head';
// import LayoutPage from '../../components/layout';

// let catTitle = "Websites Design"
// let kategory = ""
// let category = "Websites"

export default function AsiaMainGridComponent() {
   const classes = useStyles()

   const queryBlog = useStaticQuery(graphql`
      query AsiaQuery {
         # query AsiaQuery($category: String!) {
         allContentfulBlogPost(
            # limit: 6,
            sort: { fields: [createdAt], order: DESC }
            filter: {
               node_locale: { eq: "en-US" }
               # continent: {elemMatch: {title: {eq: "North & South America"}}}
               # continent: {elemMatch: {title: {eq: "Europe"}}}
               # continent: {elemMatch: {title: {eq: "Africa"}}}
               continent: { elemMatch: { title: { eq: "Asia" } } }
               # featured: {eq: true}
               # category: {
               # 	# elemMatch: {title: {eq: "Arts & Crafts" }}
               # 	# elemMatch: {title: {eq: "Arts & Crafts" }}
               # 	# elemMatch: {title: {eq: "JSFrameworks" }}
               # 	# elemMatch: {title: {eq: "Animations" }}
               # 	elemMatch: {title: {eq: "Websites" }}
               # 	# elemMatch: {title: {eq: $category }}
               # }
            }
         ) {
            # allContentfulBlogPost (limit: 6) {
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
                  # body {
                  # 	content {
                  # 		content {
                  # 			value
                  # 		}
                  # 	}
                  # 	body
                  # 	json
                  # }
               }
            }
         }
      }
   `)

   return (
      <React.Fragment>
			<h1 style={{color:"orange",}}>ASIAN CONTINENT</h1>
         <div className={classes.blogWrapper}>
				{/* {queryBlog.allContentfulBlogPost.edges.node.continent.title[0]}</h1> */}
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
                     onClick={() => navigate(`/blogTemplate/${node.slug}`)}
                     // onClick={() => navigate(`/asiaTemplate/${node.slug}`)}
                  >
                     <div className={classes.titleContainer}>
                        <h4 style={{ color: "red", margin: 0 }}>
                           {node.continent.title}
                        </h4>
                        <h6 style={{ color: "white", margin: 10, letterSpacing: 1.7, fontSize: 16 }}>
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
      overflow: "hidden",
      // height: feedContainerHt,
      // background: "red",
      background: "var(--rlg-color-danger-shade)",
      border: "4px solid var(--rlg-color-secondary-shade)",
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
         height: { gridChildLargeHt },
         // overflow: "hidden",
      },
      "&:nth-child(2)": {
         gridColumnStart: "span 4",
         height: { gridChildLargeHt },
      },
      "&:nth-child(3)": {
         gridColumnStart: "span 4",
         height: { gridChildLargeHt },
      },
      "&:nth-child(4)": {
         gridColumnStart: "span 8",
         height: { gridChildLargeHt },
      },
      "&:nth-child(5)": {
         gridColumnStart: "span 6",
         height: { gridChildLargeHt },
      },
      // "&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)": {
      //    gridColumnStart: "span 3",
      //    height: gridChildSmallHt,
      // },
      "&:nth-child(6)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(7), &:nth-child(8), &:nth-child(9)": {
         gridColumnStart: "span 4",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(10)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(11)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
         // background: "var(--rlg-color-primary)"
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

   titleContainer: {
      alignItems: "flex-end",
      "&:h4": {
         color: "white",
         fontWeight: 600,
         lineHeight: 1,
         margin: 0,
         border: "1px solid white",
      },
      "&:h5": {
         color: "red",
         fontWeight: 600,
         lineHeight: 1,
         margin: 0,
         border: "1px solid white",
      },
   },
})
