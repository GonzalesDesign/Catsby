/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Component: Archive Template
* Note: Template for blog post 
**************************************************/
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; //npm install
// import Img from 'gatsby-image'
import LayoutPage from './../components/layout';
import postStyles from'./postStyle.module.scss'

import HeadHelmet from './../components/head'


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

export const queryArchive = graphql`
		query ArchiveQuery {
			contentfulCatsby {
		# query ArchiveQuery($slug: String!, $skip: Int!, $limit: Int! ) {
		# query ArchiveQuery($slug: String!) {
		# 	contentfulCatsby(
		# 			slug: {eq: $slug}
		# 			# skip: $skip
		# 			# limit: $limit
		# 			) 
		# {
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
	console.log('queryArchive: ', queryArchive);

const ArchiveTemplate = (props) => {



	const richTxtAssetOptions = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const imgUrl = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={imgUrl}/>
			}
		}
	}
	
	const blogContent = props.data.contentfulCatsby
	const post = props.data.contentfulCatsby;
	
	console.log('ArchiveTemplate:blogContent: ',blogContent);
	console.log('ArchiveTemplate:props: ',props);
	
	return(
		<LayoutPage>
			
			<HeadHelmet title={post.title}/>

			<div className={postStyles.template}
				// activeClassName={postStyles.activeNavItem}
				>
				<h1 className={postStyles.title}>
					{post.title}
				</h1>
				<p className={postStyles.publishedDate}> 
					{post.publishedDate}
				</p>
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

export default ArchiveTemplate
