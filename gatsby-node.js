

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


/*--------------------=| allContentfulCatsby using multiple templates: |=--------------------*/

// module.
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	console.log('/getPost: **********************************************/');
	const postTemplate = path.resolve('src/templates/postTemplate.jsx')

	const getPost = await graphql(`
		query {
			allContentfulCatsby  {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	const posts = getPost.data.allContentfulCatsby.edges;
	// console.log('********posts: ', posts);

	posts.forEach(({node}) => {
		createPage({
			path: `/postTemplate/${node.slug}`,
			component: postTemplate,
			// path: node.slug,
			context: {
				// id: node.id,
				slug: node.slug
			}
		})
	})

	console.log('/getBlog: **********************************************/');
	const blogTemplate = path.resolve('src/templates/blogTemplate.jsx')

	const getBlog = await graphql(`
		query {
			allContentfulBlogPost  {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	const blogs = getBlog.data.allContentfulBlogPost.edges;
	// console.log('********posts: ', posts);

	blogs.forEach(({node}) => {
		createPage({
			path: `/blogTemplate/${node.slug}`,
			component: blogTemplate,
			// path: node.slug,
			context: {
				// id: node.id,
				slug: node.slug
			}
		})
	})

	console.log('/getArchive: **********************************************/');
	const archiveTemplate = path.resolve('./src/templates/archiveTemplate.jsx')

	const getArchive = await graphql(`
		query {
			allContentfulCatsby  {
				edges {
					node {
						slug
					}
				}
			}
		}
	`)

	const archivePosts = getArchive.data.allContentfulCatsby.edges;
	const blogsPerPage = 4
	const numPages = Math.ceil(archivePosts.length / blogsPerPage)

	// console.log('********archivePosts: ', archivePosts);
	// console.log('********blogsPerPage: ', blogsPerPage);
	// console.log('********numPages: ', numPages);
	

	Array.from({ length: numPages }).forEach( (_, i) => {
		// archivePosts.forEach( (_, i) => {
			console.log('********_: ', _);
			console.log('********i: ', i);
		createPage({
			// // path: i === 0 ? `/postTemplate` : `/postTemplate/${i + 1}`,
			// path: i === 0 ? `/archiveTemplate` : `/archiveTemplate/${i + 1}`,
			path: i === 0 ? `/archiveTemplate` : `/archiveTemplate/${i.slug}`,
			component: archiveTemplate,
			context: {
				// slug: i.slug,
				limit: blogsPerPage,
				skip: i * blogsPerPage,
				numPages,
				currentPage: i + 1,
			}
		})
	} )
	
	// console.log('getPost:*******************: ', getPost);
	// console.log('getArchive:*******************: ', getArchive);
	// console.log('**********************************************');
	
	// console.log('Promise:*******************: ', Promise);
	return Promise.all(
		[ getPost, getBlog, getArchive ],
		// console.log('Promise.getPost:*******************: ', getPost),
		// console.log('Promise.archivePosts.node.title:*******************: ', archivePosts.node.slug),
	)
}










// /*--------------------=| allContentfulCatsby: works! |=--------------------*/

// module.exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const postTemplate = path.resolve('./src/templates/postTemplate.jsx')
// 	const res = await graphql(`
// 		query {
// 			allContentfulCatsby {
// 				edges {
// 					node {
// 						slug
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	console.log('res.data: ',res.data);

// 	res.data.allContentfulCatsby.edges.forEach((edge) => {
// 		createPage({
// 			component: postTemplate,
// 			path: `/postTemplate/${edge.node.slug}`,
// 			context: {
// 				slug: edge.node.slug
// 			}
// 		})
// 	})
// }

///////////////////////////////////////////////////////////

// exports.createPages = ({ actions, graphql }) => {	
// module.exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const postTemplate = path.resolve('./src/templates/postTemplate.jsx')
// 	const homeTemplate = path.resolve('./src/templates/postTemplateHome.jsx')
	
// 	// return graphql(`
// 	const result = await graphql(`
// 		{
// 			post: allContentfulCatsby {
// 				edges {
// 					node {
// 						slug
// 					}
// 				}
// 			}
// 			home: allContentfulHome {
// 				edges {
// 					node {
// 						slug
// 					}
// 				}
// 			}
// 		}
// 	`)
// 	// .then(result => {
// 	// 	if (result.errors) {
// 	// 		Promise.reject(result.errors);
// 	// 	}

// 	// console.log('result.data: ', result.data);

// 	result.data.post.edges.forEach((edge) => {
// 		createPage({
// 			component: postTemplate,
// 			// path: `${edge.node.slug}`
// 			path: `/postTemplate/${edge.node.slug}`
// 		})
// 	})
// 	result.data.home.edges.forEach((edge) => {
// 		createPage({
// 			component: homeTemplate,
// 			path: `${edge.node.slug}`
// 			// path: `/postTemplateHome/${edge.node.slug}`
// 		})
// 	})
// }

///////////////////////////////////////////////////////////






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
// 		 blog: allContentfulCatsby {
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