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
import WhiteBengalGrid from '../pages/blog/KittyGrids/WhiteBengalGrid';

// const useStyles = makeStyles( {
// 	textStyles: {
// 		background: "white",
// 		"&:p":{
// 			margin: 0,
// 		},
// 	}
// })

export const queryBlogTemplate = graphql`
		query BlogTemplateQuery($slug: String!) {
			contentfulBlogPost(slug: {eq: $slug}) {
				id
				title
				slug
				author
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
			}
		}`

const BlogTemplate = (props) => {

	// const classes = useStyles()

	// console.log('BlogTemplate:props: ',props);
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
				<h1 className={postStyles.title}> {post.title} </h1>
				<p className={postStyles.publishedDate}>  {post.publishedDate} </p>
				<p className={postStyles.author}>  {post.author} </p>

				{/*---=| Grid layed out images: posts |=---*/}
				<div style={{marginBottom:"20px"}}>
					
					{/* {post.title === "Siberian Tiger" ? <HomeGridComponent /> : null} */}

					{/*--=| Displaying an optional component inside each particular post 
							It's a static solution. Needs to be dynamic. 
							case "Title of the Post" return <Grid Component Name />|=--*/}
					{(() => {
						switch (post.title) {
							case "Siberian Tiger":   return <HomeGridComponent />;
							case "Leopard":   return <div style={{marginTop: "20px"}}><ArticleComponent /></div>;
							case "Caracal":   return <BlogGridComponent />;
							case "Lion":   return <div style={{marginTop: "20px"}}><BlogArticleComponent /></div>;
							case "Jaguar":   return <div style={{marginTop: "20px"}}><WhiteTigerOptionGridComponent /></div>;
							case "White Bengal":   return <div style={{marginTop: "20px"}}><WhiteBengalGrid /></div>; //WhiteBengalGrid
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

export default BlogTemplate
