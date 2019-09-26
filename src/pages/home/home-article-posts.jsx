import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from "../../components/head"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
// import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import HomeStyles from "./homePosts.module.scss"


///////////////////////////////////////////////////////////////
// export default function HomeArticlePostsComponent() {
const HomeArticlePostsComponent = () => {
   const classes = useStyles()

   const homeArticleQuery = useStaticQuery(graphql`
      query {
         allContentfulCatsby(
            sort: { fields: publishedDate, order: DESC }
            filter: { tags: { eq: "about" } }
         ) # filter: {slug: {eq: "cheetah"}}
         # filter: {catsby: {elemMatch: {sectionRef: {elemMatch: {title:{eq:" "}}}}}}
         # featured: {eq: true}
         {
            edges {
               node {
                  id
                  title
                  slug
                  tags
                  # tags (title: {eq: "about"})
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
   
   return (
      <React.Fragment>
         <HeadHelmet title="Home Posts" />

         {/* <LayoutPage> */}
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
               {homeArticleQuery.allContentfulCatsby.edges.map(({ node }) => {
                  //  const title = node.title || node.slug
                  // console.log("node: ", node)
                  // console.log("title: ", title)

                  return (
                     <Grid
                        item
                        xs={12}
                        md={6}
                        key={node.id}
                        style={{
                           // padding: "0 auto",
                           // margin: "0 auto",
                           display: "flex",
                           justifyContent: "center",
                           // gridTemplateColumns: "1 1",
                           // gridTemplateRows: "auto",
                           // background: "white",
                           //  gridGap: '10px',
                           //  justifySelf: 'center',
                           // width: "70%",
                           border: "1px solid red",
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
                              width: 350,
                              // alignItems: 'center',
                              border: "1px solid purple",
                           }}
                        >
                           <CardActionArea>
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
                                    className={[HomeStyles.title, classes.contentText]}
                                    // className={HomeStyles.title}
                                    // className={classes.contentText}
                                 >
                                    <h4>{node.title}</h4>
                                    <p>{node.publishedDate}</p>
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

export default HomeArticlePostsComponent

const useStyles = makeStyles({
   card: {
      //  maxWidth: 345,
      height: 300,
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
      "&:hover": {
         backgroundSize: "110%",
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