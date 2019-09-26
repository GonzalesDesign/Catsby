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
import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from '../components/head'

import HomeIndexComponent from '../pages/home/index';
// import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( {
	textStyles: {
		background: "white",

		"&:p":{
			margin: 0,
		},
	}
})

// export const queryAllContentType = graphql`
// 	query {
// 		allContentfulContentType {
// 			edges {
// 				node {
// 				name
// 				}
// 			}
// 		}
// 	}
// `
// console.log('queryAllContentType: ', queryAllContentType.node.data.name);
// if()

export const queryBlog = graphql`
		query BlogQuery($slug: String!) {
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
			}
		}
	`
	console.log('queryBlog: ', queryBlog);

	



const BlogTemplate = (props) => {

	const classes = useStyles()

	console.log('BlogTemplate:props: ',props);
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
					<HomeIndexComponent />
				</div>

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
