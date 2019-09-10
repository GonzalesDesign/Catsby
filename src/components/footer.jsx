import React from "react"

import {graphql, useStaticQuery} from 'gatsby'

import footerStyles from './footer.module.scss'

const FooterPage = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)
	return(
		<footer>
			<p className={footerStyles.content}>Created by {data.site.siteMetadata.author} © 2019</p>
		</footer>
	)
}

export default FooterPage