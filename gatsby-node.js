const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
// 	const { createNodeField } = actions

// 	if(node.internal.type === 'MarkdownRemark') {
// 		const slug = path.basename(node.fileAbsolutePath, '.md')
// 		console.log('****************************: ', slug)
// 		// console.log(JSON.stringify('node: ', node, undefined, 4))

// 		createNodeField({
// 			node,
// 			name: 'slug',
// 			value: slug
// 		})
// 	}
// }

// module.exports.createPages = async ({ graphql, actions }) => {
// 	const { createPage } = actions
// 	const blogTemplate = path.resolve('./src/templates/blog.jsx')
// 	const res = await graphql(`
// 		query {
// 			allMarkdownRemark {
// 				edges {
// 					node {
// 						fields {
// 							slug
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`)

// 	res.data.allMarkdownRemark.edges.forEach((edge) => {
// 		createPage({
// 			component: blogTemplate,
// 			path: `/blog/${edge.node.fields.slug}`,
// 			context: {
// 				slug: edge.node.fields.slug
// 			}
// 		})
// 	})
// }

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	// const blogTemplate = path.resolve('./src/templates/blog.jsx')
	const blogTemplate = path.resolve('./src/templates/blog-template.jsx')
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

	res.data.allContentfulBlogPost.edges.forEach((edge) => {
		createPage({
			component: blogTemplate,
			path: `/blog-template/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})
}

