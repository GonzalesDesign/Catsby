import React from "react"

import LayoutPage from './../../components/layout';
import HeadHelmet from './../../components/head'
import { graphql, useStaticQuery, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';

// export const portfolioData = (graphql`
// 	query {
// 		allContentfulPortfolio {
// 			edges {
// 				node {
// 				title
// 				subTitle
// 				description {
// 					description
// 				}
// 				coverImage {
// 					fluid {
// 						src
// 					}
// 				}
// 				seoTitle
// 				seoDescription
// 				seoAuthor
// 				seoKeywords
// 				}
// 			}
// 		}
// 	}
// `)
// console.log('portfolioData: ', portfolioData)
const useStyles = makeStyles({
	cardTitle: {
		color: "white",
		fontWeight: 400,
		marginBottom: 0,
	},
	cardSubTitle: {
		color: "white"
	},
	link: {
	  textDecoration: "none",
	  h1: {
		 color: "var(--rlg-color-danger)",
	  }
	},
	media: {
	  height: "400px",
	  width: "80%",
	  padding: "20px",
	  margin: "20px",
	  backgroundSize: "cover",
	  backgroundRepeat: "no-repeat",
	  backgroundPosition: "center",
	  borderRadius: "5px",
	  display: "flex",
	  flexDirection: "column",
	  justifyContent: "flex-end",
	  transition: "all .3s ease",
	}
 })

const ContactPage = () => {

	const classes = useStyles();

	const portfolioData = useStaticQuery(graphql`
		query {
			allContentfulPortfolio {
				edges {
					node {
						id
						slug
						title
						subTitle
						description {
							description
						}
						coverImage {
							fluid {
								src
							}
						}
						seoTitle
						seoDescription
						seoAuthor
						seoKeywords
					}
				}
			}
		}
	`)
	

	return(
		<LayoutPage>
			<HeadHelmet title="Contact"/>
			
			{portfolioData.allContentfulPortfolio.edges.map(({ node }) => {
				return (
					<React.Fragment key={node.id}>
						<Link to={`/postTemplate/${node.slug}`} className={classes.link} >
							{/* <SEO title={node.seoTitle} description={seoDescription}/> */}
							<h1>{node.title}</h1>
							<h4>{node.subTitle}</h4>
							<div className={classes.media}
								style={{
									backgroundImage: `linear-gradient(to bottom, 
										rgba(10, 10, 10, 0) 0%,
										rgba(10, 10, 10, 0) 50%,
										rgba(10, 10, 10, .6) 100%),
										url( ${ node.coverImage.fluid.src })`
								}}>
									<h4 className={classes.cardTitle}>{node.title}</h4>
									<h5 className={classes.cardSubTitle}>{node.subTitle}</h5>
								</div>
						</Link>
					</React.Fragment>
				)
			})}
			<h1>Contact</h1>
			<p>Contact info here...</p>
		</LayoutPage>
	)
}

export default ContactPage