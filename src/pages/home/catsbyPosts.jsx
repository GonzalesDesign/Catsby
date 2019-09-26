
// Catsby Posts for testing a second component with different ContentType running in Hone


import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
// import LayoutPage from '../../components/layout';
import HeadHelmet from "../../components/head"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

// import HomeStyles from "./homePosts.module.scss"
// import LayoutPage from '../../components/layout'



///////////////////////////////////////////////////////////////
// export default function CatsbyPostsComponent() {
const CatsbyPostsComponent = () => {
  const classes = useStyles()
  // const tags = "about"

  /*--=| BlogPost |=---*/
  const datas = useStaticQuery(graphql`
    query {
      allContentfulCatsby(
          limit: 4,
          sort: { fields: publishedDate, order: DESC }
          filter: { tags: { ne: "about" } }) {
        edges {
          node {
            id
            title
            slug
            tags
            publishedDate(formatString: "MMMM DD, YYYY")
            media {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            thumbnail {
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

  return (
    <React.Fragment>
      <HeadHelmet title="Home Posts" />

      {/* <Single /> */}

      {/* =--------------------------------= */}
      {/* <div>
        {categoryDatas.allContentfulCategory.edges.map(({ node }) => {
          return (
            <React.Fragment>
              <div>HOME: {node.home.title}</div>
              <div>BLOG: {node.blog_post.title}</div>
            </React.Fragment>
          )
        })}
      </div> */}
      {/* =--------------------------------= */}

      <Grid container spacing={0}
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
        }}>
        {datas.allContentfulCatsby.edges.map(({ node }) => {
          //  const title = node.title || node.slug
          // console.log("node: ", node)
          // console.log("title: ", title)

          return (
            <Grid
              item
                xs={12}
                sm={6}
                lg={3}
              key={node.id}
              style={{
                padding: "0 0px",
                // margin: "50px auto",
                // margin: "1rem",
                display: "flex",
                // gridTemplateColumns: "1 1",
                // gridTemplateRows: "auto",
                // background: "white",
                //  gridGap: '10px',
                //  justifySelf: 'center',
                // width: "200px",
                overflow: "hidden",
                border: "5px solid transparent",
              }}
            >
              <Card
                className={classes.card}
                style={{
                  // padding: "0 auto",
                  // margin: "0 auto",
                  // display: "grid",
                  // gridTemplateColumns: "1 1",
                  // gridTemplateRows: "auto",
                  justifySelf: "center",
                  width: "100%",
                  // alignItems: 'center',
                  // border: "4px solid cyan",
                }}
              >
                <CardActionArea>
                  {/* <Link to={`/blog-template/${node.slug}`} className={classes.cardMedia} > */}

                  {/* <Link
                    to={`/homePost/${node.slug}`}
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

                    <CardContent 
                      // className={ [ HomeStyles.title, classes.contentText ] }
                      // className={HomeStyles.title}
                      className={classes.contentText}
                    >
                      <h4>{node.title}</h4>
                      <h6>{node.publishedDate}</h6>
                      {/* <h5>{node.subTitle}</h5> */}
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default CatsbyPostsComponent

const useStyles = makeStyles({
  card: {
    //  maxWidth: 345,
    // height: 300,
  },
  cardMedia: {
    textDecoration: "none",
    backgroundPositionY: 0,
    //  backgroundSize: "cover",
  },
  media: {
    height: 220,
    backgroundPositionY: "top",
    backgroundSize: "cover",
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
  cardFont: {},
  contentText: {
    "& h4": {
      color: "var(--rlg-color-medium-tint2)",
      fontWeight: 400,
      marginBottom: 0,
    },
    "& p": {
      color: "var(--rlg-color-dark)",
      fontSize: ".7rem",
      fontWeight: 400,
      textTransform: "uppercase",
    },
  },
})