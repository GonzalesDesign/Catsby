//fetch slug

import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
// import Img from "gatsby-image" //npm i
// import styled from "styled-components" //npm i

import Single from "./single"

import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
// import Typography from "@material-ui/core/Typography"
// import Button from "@material-ui/core/Button"

import LayoutPage from "../../components/layout"
import blogStyles from "./blogPosts.module.scss"

import Head from "../../components/head" //helmet

const useStyles = makeStyles({
  card: {
    // maxWidth: 345,
  },
  cardMedia: {
    textDecoration: "none",
    backgroundPositionY: 0,
    backgroundSize: "cover",
  },
  media: {
    height: 140,
    backgroundPositionY: -40,
    backgroundSize: "cover",
    "&:hover": {
      backgroundSize: "110%",
    },
  },
  cardFont: {},
})

///////////////////////////////////////////////////////////////
const BlogPostsComponent = () => {
  const classes = useStyles()

  const datas = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        # nodes {
        edges {
          node {
            id
            title
            slug
            publishedDate(formatString: "MMMM DD, YYYY")
            media {
              fluid {
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
  // console.log("datas: ", datas)

  // const firstPost = datas.allContentfulBlogPost.edges[0]

  return (
    <LayoutPage>
      <Head title="Posts" />

      <div className={blogStyles.container}>
        <Single />

        {/* =--------------------------------= */}

        <Grid container spacing={4}>
          {datas.allContentfulBlogPost.edges.map(({ node }) => {
            // const title = node.title || node.slug
            // console.log("node: ", node)
            // console.log("title: ", title)

            return (
              // <React.Fragment>
              <Grid item xs={12} sm={6} key={node.id}>
                <Card className={classes.card}>
                  <CardActionArea>
                    {/* <Link to={`/blog-template/${node.slug}`} className={classes.cardMedia} > */}
                    {/* <Link
                      to={`/blogPost/${node.slug}`}
                      className={classes.cardMedia}
                    > */}
                    <Link
                      to={`/postTemplate/${node.slug}`}
                      className={classes.cardMedia}
                    >
                      <CardMedia
                        className={classes.media}
                        image={node.media.fluid.src}
                        title={node.title}
                      />

                      <CardContent className={blogStyles.title}>
                        <h4>{node.title}</h4>
                        <p>{node.publishedDate}</p>
                      </CardContent>
                    </Link>
                  </CardActionArea>
                </Card>
              </Grid>
              // </React.Fragment>
            )
          })}
        </Grid>
      </div>
      {/* <ol className={blogStyles.posts}>
        {datas.allContentfulBlogPost.edges.map(data => {
          return (
            <li className={blogStyles.post} key={data.node.id}>
              <Link to={`/blogPost/${data.node.slug}`}>
                <h2 className={blogStyles.title}>{data.node.title}</h2>
              </Link>
              <p className={blogStyles.date}>{data.node.publishedDate}</p>

              </li>
          )
        })}
      </ol> */}
    </LayoutPage>
  )
}

export default BlogPostsComponent
