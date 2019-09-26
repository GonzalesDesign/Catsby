import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; //npm install
// import Img from 'gatsby-image'

import LayoutPage from '../components/layout';
import postStyles from'./postStyle.module.scss'

import HeadHelmet from '../components/head'


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

export const queryData = graphql`
		query ($slug: String!) {
			contentfulHome(slug: {eq: $slug}) {
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
	console.log('home template queryData: ', queryData);





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
			
			<HeadHelmet title={props.data.contentfulHome.title}/>
			{console.log('props.data.contentfulHome.title: ', props.data.contentfulHome.title)}

			<div key={props.data.id} className={postStyles.template}>
				<h1 className={postStyles.title}>
					{props.data.contentfulHome.title}
				</h1>
				<p className={postStyles.publishedDate}> 
					{props.data.contentfulHome.publishedDate}
				</p>
					{/* {documentToReactComponents(props.data.contentfulHome.body.json)} */}
				{documentToReactComponents(props.data.contentfulHome.body.json, richTxtAssetOptions)}
				{/* <div dangerouslySetInnerHTML={{__html: props.data.contentfulHome.body}}></div> */}
					{/* <Img fluid={props.data.contentfulHome.fluid} /> */}
					{/* <Img fluid={props.data.contentfulHome.media} /> */}
				<img src={props.data.contentfulHome.media.fluid.src} alt={props.data.contentfulHome.title}/>
			</div>
		</LayoutPage>
	)
}

export default BlogTemplate
