//fetch slug

import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from 'gatsby-image'

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

import LayoutPage from "../components/layout"
import blogStyles from "./blog.module.scss"

import Head from "./../components/head"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
})

const BlogContentful = () => {

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
                # ...GatsbyImageSharpFluid
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

//   const options = {
//     renderNode: {
//       "embedded-asset-block": node => {
//         // const alt = node.content.target.fields.title["en-US"]
//         // const url = node.content.target.fields.file["en-US"].url
//         const url = node.media.fluid.src
//         console.log("url: ", url)
//         // return <img alt={alt} src={url} />
//       },
//     },
//   }
//   console.log("options: ", options)
// const fluidImage = datas.allContentfulBlogPost.edges.node.media.fluid.src

  const classes = useStyles()

  return (
    <LayoutPage>
      <Head title="Posts" />

      <ol className={blogStyles.posts}>
        {datas.allContentfulBlogPost.edges.map(data => {
          return (
            <li className={blogStyles.post} key={data.node.id}>
              <Link to={`/blog-template/${data.node.slug}`}>
                <h2 className={blogStyles.title}>{data.node.title}</h2>
              </Link>
              <p className={blogStyles.date}>{data.node.publishedDate}</p>
            </li>
          )
        })}
      </ol>
      <p>Integrate materialUI</p>
	  <Grid container spacing={2}>
        {datas.allContentfulBlogPost.edges.map(data => {
		  // {options}
		  
          return (
			  <Grid item xs={12} sm={6} key={data.node.id}>
				{/* <img src={data.node.media.fluid.src} alt="cheetah2"/>	
			  	<div>{console.log('data.node.media.fluid.src}: ', data.node.media.fluid.src)}</div> */}
				{/* <Img fluid={data.node.media.fluid} /> */}
              <Card>
                <CardActionArea>
                  {/* <CardMedia
                    // className={classes.media}
                    // image={contentfulImage} //"/static/images/cards/contemplative-reptile.jpg"
                    // title="Contemplative Reptile"
				  > */}
                  <CardMedia
                    component="img"
                    alt={data.node.title}
                    height="140"
                    image={data.node.media}
                    title={data.node.title}
                  >
					{/* <img src={props.data.contentfulBlogPost.media.fluid.src} alt="cheetah2"/> */}
					{/* {console.log('data.node.media.fluid.src}: ', data.node.media.fluid.src)} */}
					{/* {data.node.media.fluid.src} */}
                  {/* {documentToReactComponents(data.node.body.json, options)} */}
                  </CardMedia>

                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.cardFontMerri}
                    >
                      <h2>{data.node.title}</h2>
                      {/* <h2 className={blogStyles.title}>{data.node.title}</h2> */}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.cardFontMerri}
                    >
                      <p className={blogStyles.date}>
                        {data.node.publishedDate}
                      </p>
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>

    </LayoutPage>
  )
}

export default BlogContentful

// const BlogPage = () => {
// 	const datas = useStaticQuery(graphql`
// 		query {
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						id
// 						frontmatter {
// 							title
// 							date
// 						}
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// console.log('datas: ', datas);

// 	return(
// 		<LayoutPage>
// 			<ol className={blogStyles.posts}>
// 				{datas.allMarkdownRemark.edges.map((data) => {
// 					return (
// 						<li className={blogStyles.post} key={data.node.id}>
// 							{/* <Link to={'/blog/'+ data.node.fields.slug}> */}
// 							<Link to={`/blog/${data.node.fields.slug}`}>
// 								<h2 className={blogStyles.titleX}>{data.node.frontmatter.title}</h2>
// 							</Link>
// 							<p className={blogStyles.dateX}>{data.node.frontmatter.date}</p>
// 							{/* <p>{data.node.id}</p> */}
// 							{/* {console.log('data.node.id: ', data.node.id)} */}
// 						</li>
// 					)
// 				})}
// 			</ol>
// 			<p>Posts here...</p>
// 		</LayoutPage>
// 	)

// }

// export default BlogPage
