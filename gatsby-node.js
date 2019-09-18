
const path = require('path')

// const { createPost, createHome } = require('./gatsby-createPage')
// const gatsbyNodeGraphQL = require('./gatsbyNodeGraphQL')

// /*--------------------=| createPages: all content types |=--------------------*/
// // https://github.com/LekoArts/portfolio/blob/master/gatsby-node.js
// // gatsby-createPage.js
// // gatsbyNodeGraphQ.js
// exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions

// 	const blogTemplate = path.resolve('./src/pages/blog/blogPost.jsx')
// 	const homeTemplate = path.resolve(`./src/pages/home/homePost.jsx`)

// 	const result = await wrapper(
// 		graphql(`
// 		 {
// 			${gatsbyNodeGraphQL}
// 		 }
// 	  `)
// 	)

// 	// Programmatically create pages with templates and helper functions
// 	createPost(result.data.post.edges, createPage, blogTemplate)
// 	createHome(result.data.home.edges, createPage, homeTemplate)
// 	// createCategories(result.data.categories.edges, createPage, categoryTemplate)
// 	// createTags(result.data.tags.edges, createPage, tagTemplate)
// }

// const wrapper = promise =>
// 	promise.then(result => {
// 		if (result.errors) {
// 			throw result.errors
// 		}
// 		// console.log('wrapper: ',JSON.stringify(result, null, 4))
// 		return result
// 	})


/*--------------------=| allContentfulBlogPost |=--------------------*/

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// const blogTemplate = path.resolve('./src/templates/blog.jsx')
	// const blogTemplate = path.resolve('./src/templates/blog-template.jsx')
	// const blogTemplate = path.resolve('./src/pages/blog/blogPost.jsx')
	const postTemplate = path.resolve('./src/templates/postTemplate.jsx')
	const res = await graphql(`
		query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	console.log('res.data: ',res.data);

	res.data.allContentfulBlogPost.edges.forEach((edge) => {
		createPage({
			component: postTemplate,
			path: `/postTemplate/${edge.node.slug}`,
			// path: `/blogPost/${edge.node.slug}`,
			// path: `/blog-template/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})
}





/*--------------------=| createPages: all content types |=--------------------*/
// module.exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions

// 	const result = await graphql(`
// 	  {
// 		 home: allContentfulHome {
// 			nodes {
// 				slug
// 			}
// 		 }
// 		 blog: allContentfulBlogPost {
// 			nodes {
// 				slug
// 			}
// 		 }
// 	  }
// 	`)

// 	const homeTemplate = require.resolve(`./src/pages/home/homePost.jsx`)
// 	const blogTemplate = require.resolve('./src/pages/blog/blogPost.jsx')

// 	// if (result.errors) {
// 	// 	return
// 	// }
// 	console.log('result.data.home: ',result.data.home);

// 	result.data.home.forEach((edge) => {
// 		createPage({
// 			component: homeTemplate,
// 			path: `/homePost/${edge.node.slug}`,
// 			context: {
// 				slug: edge.node.slug
// 			}
// 		})
// 	})

// 	result.data.blog.forEach((edge) => {
// 		createPage({
// 			component: blogTemplate,
// 			path: `/blogPost/${edge.node.slug}`,
// 			context: {
// 				slug: edge.node.slug
// 			}
// 		})
// 	})

// }