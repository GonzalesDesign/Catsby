import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; //npm install
// import Img from 'gatsby-image'

import LayoutPage from './../components/layout';
import postStyles from'./postStyle.module.scss'

import Head from './../components/head'

export const queryData = graphql`
		query ($slug: String!) {
			contentfulBlogPost(slug: {eq: $slug}) {
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
	console.log('queryData: ', queryData);

const BlogTemplate = (props) => {

	const richTxtAssetOptions = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const imgUrl = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={imgUrl}/>
			}
		}
	}
	
	return(
		<LayoutPage>
			
			<Head title={props.data.contentfulBlogPost.title}/>

			<div key={props.data.id} className={postStyles.template}>
				<h1 className={postStyles.title}>
					{props.data.contentfulBlogPost.title}
				</h1>
				<p className={postStyles.publishedDate}> 
					{props.data.contentfulBlogPost.publishedDate}
				</p>
					{/* {documentToReactComponents(props.data.contentfulBlogPost.body.json)} */}
				{documentToReactComponents(props.data.contentfulBlogPost.body.json, richTxtAssetOptions)}
				{/* <div dangerouslySetInnerHTML={{__html: props.data.contentfulBlogPost.body}}></div> */}
					{/* <Img fluid={props.data.contentfulBlogPost.fluid} /> */}
					{/* <Img fluid={props.data.contentfulBlogPost.media} /> */}
				<img src={props.data.contentfulBlogPost.media.fluid.src} alt={props.data.contentfulBlogPost.title}/>
			</div>
		</LayoutPage>
	)
}

export default BlogTemplate
