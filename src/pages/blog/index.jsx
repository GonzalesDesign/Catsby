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

import React from 'react'
import { graphql, useStaticQuery,navigate } from 'gatsby';
import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from '../../components/head';
import LayoutPage from '../../components/layout';

export default function BlogIndexComponent() {
		
	const classes = useStyles()

	const queryBlog = useStaticQuery(graphql`
		query {
			allContentfulBlogPost (limit: 6) {
			# allContentfulBlogPost (limit: 6) {
				edges {
					node {
						id
						title
						slug
						internal {
							type
						}
						media {
                     fluid {
                        src
                        ...GatsbyContentfulFluid
                     }
                  }
						# category {
						# 	id
						# 	slug
						# }
						# body {
						# 	content {
						# 		content {
						# 			value
						# 		}
						# 	}
						# 	body
						# 	json
						# }
					}
				}
			}
		}
	`)

	return (
		<React.Fragment>
			<HeadHelmet title="Blog Posts" />
			<LayoutPage>

				<div className={classes.blogWrapper}>
					{queryBlog.allContentfulBlogPost.edges.map(({node}) => {
						return (
							<div key={node.id} className={classes.blogContainer}
								style={{
									// backgroundImage: `url(${node.media.fluid.src})`
									backgroundImage: `linear-gradient(
									to bottom,
									rgba(10,10,10,0) 0%,
									rgba(10,10,10,0) 50%,
									rgba(10,10,10,.9) 100%),
									url(${node.media.fluid.src})`,
								}}
								onClick={ () => navigate(`/blogTemplate/${node.slug}`)} >
								{/* {console.log('/archiveTemplate/${node.slug}): ', `/archiveTemplate/${node.slug}`)} */}

								<div className={classes.titleContainer}>
									<h4>
										{node.title}
									</h4>
									{/* <h4>{node.subTitle}</h4> */}
									<p>
										{node.slug}
									</p>
								</div>
							</div>
						)
					})}

				</div>

			</LayoutPage>

		</React.Fragment>
	)
}

const gridChildLargeHt = 250; //350
// const gridChildSmallHt = 175
// const gridChildBottomHt = 110
// const feedContainerHt = ( gridChildLargeHt + gridChildSmallHt + gridChildBottomHt )

const useStyles = makeStyles( {
	blogWrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridAutoRows: gridChildLargeHt,
      overflow: "hidden",
      // height: feedContainerHt,
      // background: "red",
      background: "var(--rlg-color-primary-shade)",
      // border: "1px solid white",
   },
   
   blogContainer: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
		// padding: "0, 0, 0, 20",
		paddingLeft: 20,
		paddingBottom: 0,
      transition: "all 0.3s ease",
		// border: "1px solid white",
		
      "&:hover": {
         cursor: "pointer",
         transform: "scale(1.02)",
			zIndex: 101,
			// overflow: "hidden",
      },
      "&:nth-child(1)": {
         gridColumnStart: "span 8",
         height: {gridChildLargeHt},
			// overflow: "hidden",
		},
		"&:nth-child(2)": {
         gridColumnStart: "span 4",
         height: {gridChildLargeHt},
      },
		"&:nth-child(3)": {
         gridColumnStart: "span 4",
         height: {gridChildLargeHt},
      },
		"&:nth-child(4)": {
         gridColumnStart: "span 8",
         height: {gridChildLargeHt},
      },
		"&:nth-child(5)": {
         gridColumnStart: "span 6",
         height: {gridChildLargeHt},
      },
      // "&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)": {
      //    gridColumnStart: "span 3",
      //    height: gridChildSmallHt,
      // },
      "&:nth-child(6)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(7), &:nth-child(8), &:nth-child(9)": {
         gridColumnStart: "span 4",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(10)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
         height: gridChildLargeHt,
      },
      "&:nth-child(11)": {
         gridColumnStart: "span 6",
         position: "relative",
         // top: -gridChildSmallHt,
			height: gridChildLargeHt,
			// background: "var(--rlg-color-primary)"
		},
		"@media screen and (max-width: 800px)": {
			"&:nth-child(n)": {
				gridColumnStart: "span 6",
			}
		},
		"@media screen and (max-width: 500px)": {
			"&:nth-child(n)": {
				gridColumnStart: "span 12",
			}
		}
	},

	titleContainer: {
		alignItems: "flex-end",
		"&:h4": {
			color: "white",
			fontWeight: 600,
			lineHeight:1, 
			margin:0, 
			border:"1px solid white",
		},
		"&:p": {
			color: "red",
			fontWeight: 600,
			lineHeight:1, 
			margin:0, 
			border:"1px solid white",
		}
	}
})
	// const blogWrapper = {
	// 	display: "grid",
   //    gridTemplateColumns: "repeat(12, 1fr)",
   //    gridAutoRows: gridChildLargeHt,
   //    overflow: "hidden",
   //    height: feedContainerHt,
	// 	background: "red",
	// 	border: "1px solid white",
	// }
	// const blogContainer = {
	// 	display: "flex",
	// 	flexDirection: "column",
   //    justifyContent: "flex-end",
   //    padding: 20,
   //    transition: "all 0.3s ease",
   //    border: "1px solid white",
   //    "&:hover": {
   //       cursor: "pointer",
   //       transform: "scale(1.05)",
   //       zIndex: 101,
   //    },
   //    "&:nth-child(1)": {
   //       gridColumnStart: "span 6",
   //       height: {gridChildLargeHt},
   //    },
   //    "&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5)": {
   //       gridColumnStart: "span 3",
   //       height: gridChildSmallHt,
   //    },
   //    "&:nth-child(6)": {
   //       gridColumnStart: "span 6",
   //       position: "relative",
   //       top: -gridChildSmallHt,
   //       height: gridChildLargeHt,
   //    },
	// }
	// const titleContainer = {

	// }