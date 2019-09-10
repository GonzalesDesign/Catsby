import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image'

import LayoutPage from '../components/layout';
import postStyles from'./post.module.scss'

import Head from './../components/head'

export const queryData = graphql`
		query ($slug: String!){
			contentfulBlogPost(slug: {eq: $slug}) {
				title
				publishedDate(formatString: "MMMM Do, YYYY")
				media {
					fluid {
					#   src
						# ...GatsbyImageSharpFluid
						...GatsbyContentfulFluid
					}
				}
				body {
					json
				}
			}
		}
		# query ($slug: String!){
		# 	contentfulBlogPost(slug: {eq: $slug}) {
		# 		title
		# 		publishedDate(formatString: "MMMM Do, YYYY")
		# 		body {
		# 			json
		# 		}
		# 		media {
      #         fluid {
		# 			#   src
      #           # ...GatsbyImageSharpFluid
      #           ...GatsbyContentfulFluid
      #         }
      #       }
		# 	}
		# }
	`
	console.log('queryData: ', queryData);

const BlogTemplate = (props) => {

	const options = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const url = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={url}/>
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
				{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
				{/* <div dangerouslySetInnerHTML={{__html: props.data.contentfulBlogPost.body}}></div> */}
				{/* <Img fluid={props.data.contentfulBlogPost.fluid} /> */}
				{/* <Img fluid={props.data.contentfulBlogPost.media} /> */}
				<img src={props.data.contentfulBlogPost.media.fluid.src} alt={props.data.contentfulBlogPost.title}/>
				{console.log('props.data.contentfulBlogPost.fluid: ', props.data.contentfulBlogPost.media.fluid.src)}
			</div>

		</LayoutPage>
	)
}

export default BlogTemplate
