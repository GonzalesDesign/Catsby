import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

export default function WhiteBengalGrid() {
   const classes = useStyles()

   const queryWhiteBengalGrid = useStaticQuery(graphql`
      query WhiteBengalGridQuery {
         allContentfulBlogPost(
            limit: 4
            sort: { fields: [createdAt], order: DESC }
            filter: { node_locale: { eq: "en-US" } }
         ) {
            edges {
               node {
                  id
                  title
                  slug
                  multiplePhotos {
                     title
                     id
                     file {
                        url
                     }
                  }
               }
            }
         }
      }
   `)

   // const aFile = []
   // const photosLenght = queryWhiteBengalGrid.allContentfulBlogPost.edges[0].node.multiplePhotos.length
   // console.log("photosLenght: ", photosLenght)
   // console.log("queryWhiteBengalGrid.allContentfulBlogPost.limit: ", queryWhiteBengalGrid.allContentfulBlogPost.limit)

   // for (let i = 0; i < photosLenght; i++) {
   //    aFile.push(queryWhiteBengalGrid.allContentfulBlogPost.edges[0].node.multiplePhotos[i]
   //    )
   //    console.log("aFile: ", aFile)
   // }

   return (
      <React.Fragment>
         <div className={classes.mainWrapper}>
				{/* {aFile.map(res => { */}
				{queryWhiteBengalGrid.allContentfulBlogPost.edges[0].node.multiplePhotos.map(res => {
               return (
                  <div className={classes.container}
                     key={res.id}
                     style={{
                        backgroundImage: `linear-gradient(
								to bottom,
								rgba(10,10,10,0) 0%,
								rgba(10,10,10,0) 50%,
								rgba(10,10,10,.9) 100%),
								url(${res.file.url})`,
                        height: 250,
                     }} >
                     <div style={{ 
                        color: "var(--rlg-color-medium-tint2)",
                        fontFamily: "var(--rlg-font-OpenSans)",
                        fontSize: ".8rem",
                        fontWeight: 500,
                        textTransform: "uppercase",
                        lineHeight: 1,
                        margin: 0,
                        padding: 10,
                        // border: "1px solid white",
                        }}>{res.title}
                     </div>
                  </div>
               )
            })}
         </div>
      </React.Fragment>
   )
}

const gridChildLargeHt = 250

const useStyles = makeStyles({
   mainWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridAutoRows: gridChildLargeHt,
      overflow: "hidden",
      background: "var(--rlg-color-warning)",
      // border: "1px solid white",
   },

   container: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      // padding: "0, 0, 0, 20",
      paddingLeft: 0,
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
         gridColumnStart: "span 6",
         height: { gridChildLargeHt },
         // overflow: "hidden",
      },
      "&:nth-child(2)": {
         gridColumnStart: "span 6",
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
      "@media screen and (max-width: 800px)": {
         "&:nth-child(n)": {
            gridColumnStart: "span 6",
         },
      },
      "@media screen and (max-width: 500px)": {
         "&:nth-child(n)": {
            gridColumnStart: "span 12",
         },
      },
   },
   
})
