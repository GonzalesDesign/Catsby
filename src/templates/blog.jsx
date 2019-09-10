import React from 'react'
import LayoutPage from '../components/layout';
import { graphql } from 'gatsby';

// export const queryData = graphql`
// 		query ($slug: String!){
// 			markdownRemark (
// 				fields: {
// 					slug: {
// 						eq: $slug
// 					}
// 				}
// 			) {
// 				frontmatter {
// 					title
// 					date
// 				}
// 				html
// 			}
// 		}
// 	`
// 	console.log('queryData: ', queryData);

const Blog = (props) => {
	
	return(
		<LayoutPage>
			{/* 250:  3:00:images*/}
			{/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<p>{props.data.markdownRemark.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
			

		</LayoutPage>
	)
}

export default Blog