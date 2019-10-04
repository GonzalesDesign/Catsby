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
// import HeadHelmet from '../../components/head';
// import LayoutPage from '../../components/layout';

export default function WhiteTigerOptionGridComponent() {
		
	const classes = useStyles()

	const queryBlog = useStaticQuery(graphql`
		query WhiteTigerOptionQuery {
			allContentfulCatsby (
				limit: 8,
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
						manyImages {
							title
							id
							file {
								url
							}
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

const aImages = []
const aImagesTitle = []
const aImagesUrl = []
const aManyImages = []
// {console.log('node.manyImages: ', queryBlog.allContentfulCatsby.edges.length)}
// {console.log('node.imagesTitle: ', queryBlog.allContentfulCatsby)}
// {console.log(
// 	'queryBlog.allContentfulCatsby.edges[1].node.manyImages[1].file.url: ', 
// 	queryBlog.allContentfulCatsby.edges[1].node.manyImages[1].file.url)
// }
aImages.push(queryBlog.allContentfulCatsby.edges[1].node.manyImages)
const destructAImages = [...aImages]
// console.log('destructAImages: ', destructAImages); //BETTER! Expand console results.
destructAImages.map( (img) => {
	// console.log('img.length: ', img.length);
	// console.log('img: ', img);
	// console.log('img[0].title: ', img[0].title);
	
	// aManyImages.push(img)
	// console.log('aManyImages: ', aManyImages);

	img.map( t => {
		aManyImages.push(t)
		// console.log('aManyImages: ', aManyImages);

		// console.log('t: ', t);
		// console.log('t.title: ', t.title);
		aImagesTitle.push(t.title)
		// console.log('t.file.url: ', t.file.url);
		aImagesUrl.push(t.file.url)
		// console.log('aImagesUrl: ', aImagesUrl[0]);
		const destructAImageUrl = [...aImagesUrl]
		// console.log('destructAImageUrl: ', destructAImageUrl);

	});
})
// console.log('destructAImages: ', destructAImages.map((img) => {
// 	img.file.url
// })); //BETTER! Expand console results.


// const edgesLength = queryBlog.allContentfulCatsby.edges.length
// // aImages.push(queryBlog.allContentfulCatsby.edges[1].node.manyImages[1].file.url)

// for (let i = 0; i< edgesLength; i++ ){
// 	console.log('i: ', i);
// 	aImages.push(queryBlog.allContentfulCatsby.edges[1].node.manyImages)
// 	// this.aImages.push(queryBlog.allContentfulCatsby.edges[1].node.manyImages[i].file.url)
// 	// aImages.push("testing push")
// 	// console.log('aImages: ', aImages);
	
// 	const destructAImages = [...aImages]
// 	console.log('destructAImages: ', destructAImages); //BETTER! Expand console results.
	
// }

	return (
		<React.Fragment>
			{/* <HeadHelmet title="Blog Posts" /> */}
			{/* <LayoutPage> */}

				<div className={classes.blogWrapper}>
					{queryBlog.allContentfulCatsby.edges.map(({node}) => {
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
								// url(${node.manyImages.file.url})`,
								// url(${node.media.fluid.src})`,
								onClick={ () => navigate(`/blogTemplate/${node.slug}`)} >
								{/* {console.log('/archiveTemplate/${node.slug}): ', `/archiveTemplate/${node.slug}`)} */}
								
								<div className={classes.titleContainer}>
									<h4>{node.title}</h4>
									
									
}
									{/* {node.manyImages.map(({img}) => {
									{console.log('img: ', img)}

										// <p>{img.title}</p>
									})} */}
									{/* <h5>{node.category.title}</h5>
									{console.log('node.category.title: ', node.category.title)} */}
									{/* <p>{node.slug}</p> */}
								</div>
							</div>
						)
					})}


				</div>

					{/* {aImagesUrl.map( titolo => { */}
				<div>
					{aManyImages.map( img => {
						// <p>{titolo}</p>
						// { console.log('titolo X: ', titolo) }
						return (
							<div key={img.id}>
								<div style={{
									backgroundImage: `linear-gradient(
										to bottom,
										rgba(10,10,10,0) 0%,
										rgba(10,10,10,0) 50%,
										rgba(10,10,10,.9) 100%),
										url(${img.file.url})`,
										width: 250, height: 250,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center",
										display: "flex",
										flexDirection: "column",
										justifyContent: "flex-end",
									}}>
								</div>
									{img.title}
								

							</div>
						)
					})}
					{ console.log('aImagesTitle X: ', aImagesTitle) }
					{ console.log('aImagesUrl X: ', aImagesUrl) }
				</div>
				
				{/* <button onClick={changeCategory("Websites")}>WEBSITES</button>
				<button onClick={changeCategory("Animations")}>ANIMATIONS</button>
				<button onClick={changeCategory("Illustrations")}>ILLUSTRATIONS</button> */}

			{/* </LayoutPage> */}

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
      background: "var(--rlg-color-warning)",
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
         gridColumnStart: "span 6",
         height: {gridChildLargeHt},
			// overflow: "hidden",
		},
		"&:nth-child(2)": {
         gridColumnStart: "span 6",
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
      // "&:nth-child(7), &:nth-child(8), &:nth-child(9)": {
      //    gridColumnStart: "span 4",
      //    position: "relative",
      //    // top: -gridChildSmallHt,
      //    height: gridChildLargeHt,
      // },
      // "&:nth-child(10)": {
      //    gridColumnStart: "span 6",
      //    position: "relative",
      //    // top: -gridChildSmallHt,
      //    height: gridChildLargeHt,
      // },
      // "&:nth-child(11)": {
      //    gridColumnStart: "span 6",
      //    position: "relative",
      //    // top: -gridChildSmallHt,
		// 	height: gridChildLargeHt,
		// 	// background: "var(--rlg-color-primary)"
		// },
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
		"&:h5": {
			color: "red",
			fontWeight: 600,
			lineHeight:1, 
			margin:0, 
			border:"1px solid white",
		}
	}
})