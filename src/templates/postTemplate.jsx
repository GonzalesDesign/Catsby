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

export const queryPost = graphql`
		query PostQuery($slug: String!) {
			contentfulCatsby(slug: {eq: $slug}) {
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
	console.log('queryPost: ', queryPost);

	



const PostTemplate = (props) => {

	console.log('PostTemplate:props: ',props);
	
	const richTxtAssetOptions = {
		renderNode: {
			"embedded-asset-block": (node) => {
				const alt = node.data.target.fields.title['en-US']
				const imgUrl = node.data.target.fields.file['en-US'].url
				return <img alt={alt} src={imgUrl}/>
			}
		}
	}

	const post = props.data.contentfulCatsby;
	
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

export default PostTemplate
