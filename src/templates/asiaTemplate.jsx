
/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Component: Blog Template
* Note: Rendering template for blog section 
**************************************************/
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; //npm install
// import Img from 'gatsby-image'
import LayoutPage from '../components/layout';
import postStyles from'./postStyle.module.scss'
// import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from '../components/head'

import HomeGridComponent from '../pages/home/index';
import ArticleComponent from '../pages/home/article';
import BlogGridComponent from '../pages/blog/blogGrid';
import BlogArticleComponent from '../pages/blog/blog-article';
import WhiteTigerOptionGridComponent from '../pages/blog/whiteTiger-option-grid';

// const useStyles = makeStyles( {
// 	textStyles: {
// 		background: "white",
// 		"&:p":{
// 			margin: 0,
// 		},
// 	}
// })

export const queryAsiaTemplate = graphql`
		query AsiaTemplateQuery($slug: String!) {
			contentfulBlogPost(slug: {eq: $slug}) {
				id
				title
				slug
				publishedDate(formatString: "MMMM Do, YYYY")
				media {
					fluid {
					  src
						...GatsbyContentfulFluid
					}
				}
				body {
					json
				}
				continent {
					title
					slug
				}
			}
		}`

const AsiaTemplate = (props) => {

	// const classes = useStyles()

	console.log('AsiaTemplate:props: ',props);
	const richTxtAssetOptions = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const imgUrl = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={imgUrl}/>
			}
		}
	}

	const post = props.data.contentfulBlogPost;
	return(
		<LayoutPage>
			<HeadHelmet title={post.title}/>
			<div className={postStyles.template}
			// <div classNa÷me={[postStyles.template, classes.textStyles]}
				// activeClassName={postStyles.activeNavItem}
				>
				<h1 className={postStyles.title}>
					{post.title}
				</h1>
				<p className={postStyles.publishedDate}> 
					{post.publishedDate}
				</p>

				{/*---=| Grid layed out images: posts |=---*/}
				<div style={{marginBottom:"20px"}}>
					
					{/* {post.title === "Siberian Tiger" ? <HomeGridComponent /> : null} */}

					{(() => {
						switch (post.title) {
							case "Siberian Tiger":   return <HomeGridComponent />;
							case "Leopard":   return <div style={{marginTop: "20px"}}><ArticleComponent /></div>;
							case "Caracal":   return <BlogGridComponent />;
							case "Lion":   return <div style={{marginTop: "20px"}}><BlogArticleComponent /></div>;
							case "Jaguar":   return <div style={{marginTop: "20px"}}><WhiteTigerOptionGridComponent /></div>;
							default:
						}
					})()}

					{/* {{ if (post.title === "Siberian Tiger") { */}
						{/* <HomeGridComponent /> */}
				</div>

				{/* <p>
					{(() => {
					switch (this.state.color) {
						case "red":   return "#FF0000";
						case "green": return "#00FF00";
						case "blue":  return "#0000FF";
						default:      return "#FFFFFF";
					}
					})()}
				</p> */}

					{/* {documentToReactComponents(post.body.json)} */}
				{documentToReactComponents(post.body.json, richTxtAssetOptions)}
				{/* <div dangerouslySetInnerHTML={{__html: post.body}}></div> */}
					{/* <Img fluid={post.fluid} /> */}
					{/* <Img fluid={post.media} /> */}
				
				<img src={post.media.fluid.src} alt={post.title}/>
			
				

			</div>


		</LayoutPage>
	)
}

export default AsiaTemplate

/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Note: Grid layout design 2. 
	Collection of cards for Blog section.
* To do: Add Categories menu and Pagination.
	Use a different template design.
**************************************************/

// import React from 'react'
// import { graphql, useStaticQuery,navigate } from 'gatsby';
// import { makeStyles } from "@material-ui/core/styles"

// export default function AsiaTemplate() {
		
// 	const classes = useStyles()

// 	const queryBlog = useStaticQuery(graphql`
// 		query ContinentAsiaQuery {
// 		# query ContinentAsiaQuery($categoryName: String){
// 			allContentfulBlogPost (
// 				# limit: 4,
// 				sort: { fields: [createdAt], order: DESC },
// 				filter: { 
// 					node_locale: { eq: "en-US" },
//             	continent: {elemMatch: {title: {eq: "Asia"}}},
// 				},
// 			) {
// 				edges {
// 					node {
// 						id
// 						title
// 						slug
// 						media {
//                      fluid {
//                         src
//                         ...GatsbyContentfulFluid
//                      }
//                   }
// 						continent {
// 							title
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	return (
// 		<React.Fragment>

// 				<div className={classes.blogWrapper}>
// 					{queryBlog.allContentfulBlogPost.edges.map(({node}) => {
// 						return (
// 							<div key={node.id} className={classes.blogContainer}
// 								style={{
// 									backgroundImage: `linear-gradient(
// 									to bottom,
// 									rgba(10,10,10,0) 0%,
// 									rgba(10,10,10,0) 50%,
// 									rgba(10,10,10,.9) 100%),
// 									url(${node.media.fluid.src})`,
// 								}}
// 								onClick={ () => navigate(`/asiaTemplate/${node.slug}`)} >
// 								{/* {console.log('/archiveTemplate/${node.slug}): ', `/archiveTemplate/${node.slug}`)} */}

// 								<div className={classes.titleContainer}>
// 									<h4>{node.title}</h4>
// 									<h5>{node.category.title}</h5>
// 									{console.log('node.category.title: ', node.category.title)}
// 									{/* <p>{node.slug}</p> */}
// 								</div>
// 							</div>
// 						)
// 					})}


// 				</div>
				
// 				{/* <button onClick={changeCategory("Websites")}>WEBSITES</button>
// 				<button onClick={changeCategory("Animations")}>ANIMATIONS</button>
// 				<button onClick={changeCategory("Illustrations")}>ILLUSTRATIONS</button> */}

// 			{/* </LayoutPage> */}

// 		</React.Fragment>
// 	)
// }

// const gridChildLargeHt = 250; //350
// // const gridChildSmallHt = 175
// // const gridChildBottomHt = 110
// // const feedContainerHt = ( gridChildLargeHt + gridChildSmallHt + gridChildBottomHt )

// const useStyles = makeStyles( {
// 	blogWrapper: {
//       display: "grid",
//       gridTemplateColumns: "repeat(12, 1fr)",
//       gridAutoRows: gridChildLargeHt,
//       overflow: "hidden",
//       // height: feedContainerHt,
//       // background: "red",
//       background: "var(--rlg-color-warning)",
//       // border: "1px solid white",
//    },
   
//    blogContainer: {
//       backgroundSize: "cover",
//       backgroundRepeat: "no-repeat",
//       backgroundPosition: "center",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "flex-end",
// 		// padding: "0, 0, 0, 20",
// 		paddingLeft: 20,
// 		paddingBottom: 0,
//       transition: "all 0.3s ease",
// 		// border: "1px solid white",
		
//       "&:hover": {
//          cursor: "pointer",
//          transform: "scale(1.02)",
// 			zIndex: 101,
// 			// overflow: "hidden",
//       },
//       "&:nth-child(1)": {
//          gridColumnStart: "span 6",
//          height: {gridChildLargeHt},
// 			// overflow: "hidden",
// 		},
// 		"&:nth-child(2)": {
//          gridColumnStart: "span 6",
//          height: {gridChildLargeHt},
//       },
// 		"&:nth-child(3)": {
//          gridColumnStart: "span 4",
//          height: {gridChildLargeHt},
//       },
// 		"&:nth-child(4)": {
//          gridColumnStart: "span 8",
//          height: {gridChildLargeHt},
//       },
// 		// "&:nth-child(5)": {
//       //    gridColumnStart: "span 6",
//       //    height: {gridChildLargeHt},
//       // },
//       // "&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)": {
//       //    gridColumnStart: "span 3",
//       //    height: gridChildSmallHt,
//       // },
//       // "&:nth-child(6)": {
//       //    gridColumnStart: "span 6",
//       //    position: "relative",
//       //    // top: -gridChildSmallHt,
//       //    height: gridChildLargeHt,
//       // },
//       // "&:nth-child(7), &:nth-child(8), &:nth-child(9)": {
//       //    gridColumnStart: "span 4",
//       //    position: "relative",
//       //    // top: -gridChildSmallHt,
//       //    height: gridChildLargeHt,
//       // },
//       // "&:nth-child(10)": {
//       //    gridColumnStart: "span 6",
//       //    position: "relative",
//       //    // top: -gridChildSmallHt,
//       //    height: gridChildLargeHt,
//       // },
//       // "&:nth-child(11)": {
//       //    gridColumnStart: "span 6",
//       //    position: "relative",
//       //    // top: -gridChildSmallHt,
// 		// 	height: gridChildLargeHt,
// 		// 	// background: "var(--rlg-color-primary)"
// 		// },
// 		"@media screen and (max-width: 800px)": {
// 			"&:nth-child(n)": {
// 				gridColumnStart: "span 6",
// 			}
// 		},
// 		"@media screen and (max-width: 500px)": {
// 			"&:nth-child(n)": {
// 				gridColumnStart: "span 12",
// 			}
// 		}
// 	},

// 	titleContainer: {
// 		alignItems: "flex-end",
// 		"&:h4": {
// 			color: "white",
// 			fontWeight: 600,
// 			lineHeight:1, 
// 			margin:0, 
// 			border:"1px solid white",
// 		},
// 		"&:h5": {
// 			color: "red",
// 			fontWeight: 600,
// 			lineHeight:1, 
// 			margin:0, 
// 			border:"1px solid white",
// 		}
// 	}
// })