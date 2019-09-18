import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
// import LayoutPage from '../../components/layout';
import Head from "../../components/head"

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

import HomeStyles from "./homePosts.module.scss"

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
// export default function HomeArticlePostsComponent() {
const HomeArticlePostsComponent = () => {
 
  const classes = useStyles()

  /*--=| BlogPost |=---*/
  const datas = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
  console.log("datas: ", datas)

  // const categoryDatas = useStaticQuery( graphql`
  //   query {
  //     allContentfulCategory {
  //       edges {
  //         node {
  //           blog_post {
  //             title
  //           }
  //           home {
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  // console.log("categoryDatas: ", categoryDatas)

  return (
    <React.Fragment>
      <Head title="Home Posts" />

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

      <Grid container spacing={4}>
        {datas.allContentfulBlogPost.edges.map(({ node }) => {
          //  const title = node.title || node.slug
          // console.log("node: ", node)
          // console.log("title: ", title)

          return (
            <Grid item xs={8} sm={6} key={node.id}>
              <Card className={classes.card}>
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

                    <CardContent className={HomeStyles.title}>
                      <h4>{node.title}</h4>
                      <p>{node.publishedDate}</p>
                      <h5>{node.subTitle}</h5>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>

      {/* <ol className={HomeStyles.posts}>
        {datas.allContentfulBlogPost.edges.map(data => {
          return (
            <li className={HomeStyles.post} key={data.node.id}>
              <Link to={`/blogPost/${data.node.slug}`}>
                <h2 className={HomeStyles.title}>{data.node.title}</h2>
              </Link>
              <p className={HomeStyles.date}>{data.node.publishedDate}</p>

              <img src={data.node.media.fluid.src} alt={data.node.title}/>
              {console.log('data.node.fluid: ', data.node.media.fluid.src)}
            </li>
          )
        })}
      </ol> */}
    </React.Fragment>
  )
}

export default HomeArticlePostsComponent

// const useStyles = makeStyles({
// 	cardLion: {
// 		width: 400,
// 		height: 400,
// 		// position: "fixed",
// 		backgroundImage: "url('./../../assets/media/background-images/lion-king.jpg')",
// 		// backgroundImage: "url('./../../../assets/media/background-images/lion-king.jpg')",
// 		backgroundRepeat: "no-repeat",
// 		backgroundSize: "cover",
// 		backgroundPositionX: "center",
// 		backgroundPositionY: "center",
// 		// opacity: 0.5,
// 		// zIndex: "-110",
// 		border: "5px solid yellowGreen",
// 	},
//  })
