import React from "react"
import { Link } from "gatsby"
// import { Link, graphql, useStaticQuery, StaticQuery } from 'gatsby';

// import './header.scss' //still global
import headerStyles from "./nav-header.module.scss"

const NavHeaderComponent = () => {
  
  // const data = useStaticQuery(graphql`
  //   query {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //         description
  //       }
  //     }
  //   }
  // `)

  return (
    <React.Fragment>

      <header className={headerStyles.container}>

      {/* <div className={headerStyles.logo}></div> */}

      {/* <div className={headerStyles.hero} /> */}

        {/* <h1><Link to="/" className={headerStyles.title}>
				{data.site.siteMetadata.title}
				</Link>
			</h1>
			
			<p className={headerStyles.description}>
				{data.site.siteMetadata.description}
			</p>
			
			<p className={headerStyles.author}>
				~ {data.site.siteMetadata.author}
			</p> */}

        <div className={headerStyles.logo}></div>
        <nav className={headerStyles.header}>
          <ul className={headerStyles.navList}>

            <li>
              <Link
                to={"/"}
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about/about"}
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/blog/"}
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={"/contact/contact"}
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* <div className={headerStyles.hero} /> */}

    </React.Fragment>
  )
}

export default NavHeaderComponent
