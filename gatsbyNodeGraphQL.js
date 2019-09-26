const gatsbyNodeGraphQL = `
  post: 
		allContentfulCatsby {
			edges {
				node {
					slug
				}
			}
		}
	home: 
		allContentfulHome {
			edges {
				node {
					slug
				}
			}
		}
`
console.log('************************************');
console.log('gatsbyNodeGraphQL:', JSON.stringify(gatsbyNodeGraphQL, null, 4))

module.exports = gatsbyNodeGraphQL