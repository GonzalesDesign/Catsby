import React from 'react';
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const HeadHelmet = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)
	return (
		<Helmet title={`${title}: ${data.site.siteMetadata.title}`} />
		// <Helmet title={data.site.siteMetadata.title} />
	)
}

export default HeadHelmet