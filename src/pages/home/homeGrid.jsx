/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Note: Grid layout design 1. 
	Collection of cards for Home section. 
**************************************************/
import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import IndexStyles from "./home.module.scss"
import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from "../../components/head"

const HomeGridComponent = () => {
   
   const classes = useStyles()

   const queryHome = useStaticQuery(graphql`
      query {
         allContentfulCatsby(
            limit: 7, 
            filter: { tags: { ne: "about" } },
            sort: { fields: [updatedAt], order: ASC },
            ) {
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
                  thumbnail {
                     fluid {
                        src
                        ...GatsbyContentfulFluid
                     }
                  }
               }
            }
         }
      }
   `)

   console.log("queryHome: ", queryHome)

   return (
      <React.Fragment>
         <HeadHelmet title="Home" />

         <div className={classes.feed}>
            {queryHome.allContentfulCatsby.edges.map(({ node }) => {
               return (
                  <div key={node.id}
                     className={classes.cardIndex}
                     style={{
                        backgroundImage: `linear-gradient(
                        to bottom,
                        rgba(10,10,10,0) 0%,
                        rgba(10,10,10,0) 50%,
                        rgba(10,10,10,.9) 100%),
                        url(${node.thumbnail.fluid.src})`,
                        }}
                     onClick={ () => navigate(`/postTemplate/${node.slug}`)} >
                     <div className={IndexStyles.cardTitle}>{node.title}</div>
                     <div className={IndexStyles.cardSubTitle}>{node.subTitle}</div>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}

export default HomeGridComponent

const gridChildLargeHt = 350
const gridChildSmallHt = 175
const gridChildBottomHt = 110
const feedContainerHt = ( gridChildLargeHt + gridChildSmallHt + gridChildBottomHt )

const useStyles = makeStyles( {
	feed: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridAutoRows: gridChildLargeHt,
      overflow: "hidden",
      height: feedContainerHt,
      background: "red",
      // border: "1px solid white",
      "@media screen and (max-width: 700px)": {
			"&:nth-child(n)": {
            gridColumnStart: "span 12",
            height: "auto",
            gridChildLargeHt: 175,
            position: "relative",
            top: 0,
			}
		}
   },
   
   cardIndex: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 20,
      transition: "all 0.3s ease",
      // border: 1px solid white,
      "&:hover": {
         cursor: "pointer",
         transform: "scale(1.05)",
         zIndex: 101,
      },
      "&:nth-child(1)": {
         gridColumnStart: "span 6",
         height: {gridChildLargeHt},
      },
      "&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)": {
         gridColumnStart: "span 3",
         height: gridChildSmallHt,
      },
      "&:nth-child(6)": {
         gridColumnStart: "span 6",
         position: "relative",
         top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(7)": {
         gridColumnStart: "span 12",
         height: gridChildBottomHt,
         position: "relative",
         top: -gridChildSmallHt,
         // border: "1px solid white"
      },
		"@media screen and (min-width: 601px) and (max-width: 800px)": {
			"&:nth-child(n)": {
            gridColumnStart: "span 6",
            height: 350,
            gridChildLargeHt: 175,
            position: "relative",
            top: 0,
         },
         "&:nth-last-child(3)": {
            gridColumnStart: "span 12",
         },
		},
		"@media screen and (max-width: 600px)": {
			"&:nth-child(n)": {
            gridColumnStart: "span 12",
            height: 350,
            gridChildLargeHt: 175,
            position: "relative",
            top: 0,
			}
		}
   }
})
