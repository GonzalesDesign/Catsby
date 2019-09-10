import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
// import { Link, graphql, useStaticQuery, StaticQuery } from 'gatsby';

// import './header.scss' //still global
import headerStyles from './header.module.scss'

// function getNavbarLabels(data) {
// 	const navbarItemsArray = []
// 	data.allNavbarItemsJson.edges.forEach(item => 
// 		navbarItemsArray.push(<li key={item.node.label}>
// 			{item.node.label}
// 		</li>))
// 		console.log('navbarItemsArray: ', navbarItemsArray)
// 		return navbarItemsArray
// }

// const HeaderPage = ({ children }) => {
const HeaderPage = () => {

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
					description
				}
			}
		}
	`)

	// json menu data
	// const menuData = StaticQuery(graphql`
	// 	query NavbarItemsQuery {
	// 		# query {
	// 			allNavbarItemsJson {
	// 				edges {
	// 					node {
	// 					label
	// 					link
	// 					}
	// 				}
	// 			}
	// 		}
	// `)
	// console.log('menuData: ', menuData);
	// console.log('NavbarItemsQuery: ', NavbarItemsQuery);
	// console.log('menuData.allNavbarItemsJson: ', menuData.allNavbarItemsJson.edges);
	// function getNavbarLabels(data) {
	// 	const navbarItemsArray = []
	// 	data.allNavbarItemsJson.edges.forEach(item => 
	// 		navbarItemsArray.push(
	// 			<li key={item.node.label}>
	// 				{item.node.label}
	// 			</li>
	// 		)
	// 	)
	// 	console.log('navbarItemsArray: ', navbarItemsArray)
	// 	return navbarItemsArray
	// }
	

	return(
		<header className={headerStyles.header}>
			<h1><Link to="/" className={headerStyles.title}>
				{/* Catsby d' Great */}
				{data.site.siteMetadata.title}
				</Link>
			</h1>
			
			<p className={headerStyles.description}>
				{data.site.siteMetadata.description}
			</p>
			
			<p className={headerStyles.author}>
				~ {data.site.siteMetadata.author}
			</p>

			{/* x */}
			{/* <ul>{getNavbarLabels(data)}</ul> */}

			{/* <ul> */}
				
				{/* {menuData.allNavbarItemsJson.edges.forEach((data) => {
					return (
						<li className={headerStyles.navItem} key={data.node.id}>
							<Link to={data.node.link}>
								<h2>{data.node.label}</h2>
							</Link>
						</li>
					)
				})}	 */}
				{/* {menuData.allNavbarItemsJson.edges.map((data) => {
					return (
						<li className={headerStyles.navItem} key={data.node.id}>
							<Link to={data.node.link}>
								<h2>{data.node.label}</h2>
							</Link>
						</li>
					)
				})}	 */}
			{/* </ul> */}

			<nav>
				<ul className={headerStyles.navList}>
					
					<li><Link to={"/"} 
						className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						>
						Home
						</Link>
					</li>
					<li><Link to={"/about"} className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						>
						About
						</Link>
					</li>
					<li><Link to={"/blog-contentful"} className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						>	
						Blog
						</Link>
					</li>
					<li><Link to={"/contact"} className={headerStyles.navItem}
						activeClassName={headerStyles.activeNavItem}
						>
						Contact
						</Link>
					</li>

				</ul>
			</nav>
		</header>
	)
}

export default HeaderPage