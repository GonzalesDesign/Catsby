import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby"

import LayoutPage from './../components/layout'
import Head from './../components/head'
import IndexStyles from './index.module.scss'
import IndexHeroComponent from './indexHero';
import HomeArticlePostsComponent from './home/home-article-posts';


const IndexPage = () => {

	/*---=| Browser tab title |=---*/
	// const tabTitle = "Catsby d' Great";
	// useEffect(() => {
	// 	document.title = tabTitle;
	// 	console.log('tabTitle: ', tabTitle);
	// });

	// const datas = useStaticQuery(graphql`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					id
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `)
	// console.log('index datas: ', datas);


	return (

		<React.Fragment>

			{/* <div className={IndexStyles.hero} /> */}

			<LayoutPage>

				{/* <IndexHeroComponent /> */}

				<Head title="Home" />

				<HomeArticlePostsComponent />

				<div className={IndexStyles.bodyCopy}>

					<h1>Prrrrrr...</h1>
					<h2>"Cats are inquisitive, but hate to admit it."</h2>
					<p>Gatsby is a framework for creating blazing fast websites and web applications. Powered by React and GraphQL, Gatsby gives you everything you need to build and launch your next project.

					<br />Premium courses:
		
					<br />JavaScript: 
					<br />
					<br />Tables of contents:
					<br />1. Creating a Gatsby Site
						- Timestamp: 0:38
						- Code: https://s3-us-west-2.amazonaws.com/th...
					<br />2. Working with Gatsby Pages
						- Timestamp: 14:50
						- Code: https://s3-us-west-2.amazonaws.com/th...
					3. Linking Between Pages with Gatsby
						- Timestamp: 27:00
						- Code: https://s3-us-west-2.amazonaws.com/th...
					4. Creating Shared Page Components
						- Timestamp: 35:56
						- Code: https://s3-us-west-2.amazonaws.com/th...
					5. Creating Gatsby Page Layouts
						- Timestamp: 48:14
						- Code: https://s3-us-west-2.amazonaws.com/th...
					6. Styling Gatsby Projects
						- Timestamp: 56:13
						- Code: https://s3-us-west-2.amazonaws.com/th...
					7. Styling Gatsby with CSS Modules
						- Timestamp: 1:06:49
						- Code: https://s3-us-west-2.amazonaws.com/th...
					8. Gatsby Data with GraphQL
						- Timestamp: 1:28:23
						- Code: https://s3-us-west-2.amazonaws.com/th...
					9. GraphQL Playground
						- Timestamp: 1:47:12
						- Code: https://s3-us-west-2.amazonaws.com/th...
					10. Sourcing Content from the File System
						- Timestamp: 1:51:32
						- Code: https://s3-us-west-2.amazonaws.com/th...
					11. Working with Markdown Posts
						- Timestamp: 2:03:37
						- Code: https://s3-us-west-2.amazonaws.com/th...
					12. Generating Slugs for Posts
						- Timestamp: 2:19:00
						- Code: https://s3-us-west-2.amazonaws.com/th...
					13. Dynamically Generating Pages
						- Timestamp: 2:35:14
						- Code: https://s3-us-west-2.amazonaws.com/th...
					14. Rendering Post Data in Blog Template
						- Timestamp: 2:52:08
						- Code: https://s3-us-west-2.amazonaws.com/th...
					15. Adding Images to Posts
						- Timestamp: 3:03:28
						- Code: https://s3-us-west-2.amazonaws.com/th...
					16. Getting Started with Contentful
						- Timestamp: 3:21:19
						- Code: https://s3-us-west-2.amazonaws.com/th...
					17. Rendering Contentful Posts
						- Timestamp: 3:38:29
						- Code: https://s3-us-west-2.amazonaws.com/th...
					18. Dynamic Pages from Contentful
						- Timestamp: 3:49:24
						- Code: https://s3-us-west-2.amazonaws.com/th...
					19. 404 Pages and React Helmet
						- Timestamp: 4:10:18
						- Code: https://s3-us-west-2.amazonaws.com/th...
					20. Deploying Your Gatsby Site
						- Timestamp: 4:25:38
						- Code: https://s3-us-west-2.amazonaws.com/th...
					
					If you’re building websites or web applications, you need to check out Gatsby.
					
					Gatsby is a framework for creating blazing fast websites and web applications. Powered by React and GraphQL, Gatsby gives you everything you need to build and launch your next project.
					
					With Gatsby, you can create:
					
					1. A personal site with a blog powered by markdown.
					2. A complex company website powered by a CMS such as Contentful or WordPress.
					3. A cutting-edge web application with authentication, data storage, and more.
					
					In this 5-hour tutorial, I’ve put together everything you need to build and launch your first site with Gatsby. You’ll build a website from scratch and learn how to get it deployed to production.</p>
				</div>
				<p><Link to="/contact">Contact me</Link></p>

			</LayoutPage>

			<div className={IndexStyles.hero} />

		</React.Fragment>
	)

}

export default IndexPage