



const createPost = (list, createPage, template) =>
  list.forEach(post => {
   //  const { left, right } = prevNext(list, post)

    const {
      // lang,
      fields: { slug },
    } = post.node
   console.log('post.node: ',JSON.stringify(post.node, null, 4))

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    })
  })
  console.log('************************************cp');
console.log('createPost: ',JSON.stringify(createPost, null, 4))

  const createHome = (list, createPage, template) =>
  list.forEach(post => {
   //  const { left, right } = prevNext(list, post)

    const {
      // lang,
      fields: { slug },
    } = post.node
	 console.log('post.node: ', post.node);

    createPage({
      path: slug,
      component: template,
      context: {
        slug,
      },
    })
  })


  ///////////////////
  /*
  result.data.home.forEach((edge) => {
	createPage({
		component: homeTemplate,
		path: `/homePost/${edge.node.slug}`,
		context: {
			slug: edge.node.slug
		}
	})
})
*/