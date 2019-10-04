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

export default function BlogGridComponent() {
	
	const classes = useStyles()

	const queryBlog = useStaticQuery(graphql`
		query BlogQuery {
			allContentfulBlogPost (
				# limit: 6,
				sort: { fields: [createdAt], order: DESC },
				filter: { 
					node_locale: { eq: "en-US" }
				},
				) {
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
					}
				}
			}
		}
	`)

	return (
		<React.Fragment>

				<div className={classes.blogWrapper}>
					{queryBlog.allContentfulBlogPost.edges.map(({node}) => {
						return (
							<div key={node.id} className={classes.blogContainer}
								style={{
									backgroundImage: `linear-gradient(
									to bottom,
									rgba(10,10,10,0) 0%,
									rgba(10,10,10,0) 50%,
									rgba(10,10,10,.9) 100%),
									url(${node.media.fluid.src})`,
								}}
								onClick={ () => navigate(`/blogTemplate/${node.slug}`)} >
								<div style={{ 
									color: "var(--rlg-color-medium-tint3)",
									fontFamily: "var(--rlg-font-OpenSans)",
									fontSize: ".8rem",
									fontWeight: 500,
									textTransform: "uppercase",
									lineHeight: 1,
									margin: 0,
									padding: 10,
									// border: "1px solid white",
									}}>
									{node.title}
								</div>
							</div>
						)
					})}

				</div>

		</React.Fragment>
	)
}

const gridChildLargeHt = 250; //350

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
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
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

	// titleContainer: {
	// 	alignItems: "flex-end",
	// 	"&:h4": {
	// 		color: "white",
	// 		fontWeight: 600,
	// 		lineHeight:1, 
	// 		margin:0, 
	// 		border:"1px solid white",
	// 	},
	// 	"&:h5": {
	// 		color: "red",
	// 		fontWeight: 600,
	// 		lineHeight:1, 
	// 		margin:0, 
	// 		border:"1px solid white",
	// 	}
	// }
})