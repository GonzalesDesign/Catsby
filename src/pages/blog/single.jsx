import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import singleStyle from "./single.module.scss"
import { makeStyles } from '@material-ui/core'

// import Grid from "@material-ui/core/Grid"
// import { makeStyles } from "@material-ui/core/styles"
// import Card from "@material-ui/core/Card"
// import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
// import CardContent from "@material-ui/core/CardContent"
// import CardMedia from "@material-ui/core/CardMedia"
const useStyles = makeStyles({
  link: {
    textDecoration: "none",
    h1: {
      color: "var(--rlg-color-danger)",
    }
  },
  media: {
    height: "400px",
    width: "80%",
    padding: "20px",
    margin: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    transition: "all .3s ease",
  }
})

// const useStyles = makeStyles({
//   card: {
//     // maxWidth: 345,
//     //  height: 600,
//     //  textDecoration: "none",
//   },
//   cardMedia: {
//     //  height: 200,
//     textDecoration: "none",
//     // paddingTop: "0%", // 16:9
//     //  top: 10,
//     backgroundPositionY: 0,
//     backgroundSize: "cover",
//   },
//   media: {
//     height: 140,
//     backgroundPositionY: -40,
//     backgroundSize: "cover",
//     "&:hover": {
//       backgroundSize: "110%",
//     },
//   },
// })


///////////////////////////////////////////////////////////////

export default function Single() {
  
  const classes = useStyles()

  const singleQuery = useStaticQuery(graphql`
    query {
      contentfulBlogPost {
        id
		    title
		    slug
        publishedDate(formatString: "MMMM Do, YYYY")
        media {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)
  // console.log("singleQuery: ", singleQuery)

  return (
    <React.Fragment>

{/* <Link to={`/blogPost/${singleQuery.contentfulBlogPost.slug}`}  */}
{/* <Link to={`/postTemplate/${singleQuery.contentfulBlogPost.slug}`}  */}
<Link to={`/postTemplate/${singleQuery.contentfulBlogPost.slug}`}
      // className={singleStyle.link} 
      // style={{ textDecoration: 'none' }} >
      className={classes.link} >
      <div className={singleStyle.singleContainer}
        // className={singleStyle.singleMedia} 
        className={classes.media} 
        // key={singleQuery.id}
        style={{
          backgroundImage: `linear-gradient(to bottom, 
            rgba(10, 10, 10, 0) 0%,
            rgba(10, 10, 10, 0) 50%,
            rgba(10, 10, 10, .6) 100%),
            url( ${ singleQuery.contentfulBlogPost.media.fluid.src })`
        }}>
           
          <h1>{singleQuery.contentfulBlogPost.title}</h1>
          <p>{singleQuery.contentfulBlogPost.publishedDate}</p>
          {/* <img
            className={singleStyle.singleMedia}
            src={singleQuery.contentfulBlogPost.media.fluid.src}
            alt={singleQuery.contentfulBlogPost.title}
          /> */}
          {/* <div className={singleStyle.singleMedia} 
            style={{
              backgroundImage: `linear-gradient(to bottom, 
                rgba(10, 10, 10, 0) 0%,
                rgba(10, 10, 10, 0) 50%,
                rgba(10, 10, 10, 0) 100%),
                url( ${ singleQuery.contentfulBlogPost.media.fluid.src })`
            }} >
          </div>  */}
        </div>
      </Link>

    </React.Fragment>
  )
}
