import React from "react"
import { Link } from "gatsby"
import headerStyles from "./nav-header.module.scss"
import ContinentMenu from "../pages/blog/continentMenu"

const NavHeaderComponent = () => {
   return (
      <React.Fragment>
         <header className={headerStyles.container}>
            <div className={headerStyles.logoContainer}>
               <div className={headerStyles.logo}></div>
            </div>
            {/* <nav className={headerStyles.nav}> */}
            <ul className={headerStyles.navList}>
               <li>
                  <Link to={"/"}
                     className={headerStyles.navItem}
                     activeClassName={headerStyles.activeNavItem} >
                     Home
                  </Link>
               </li>
               <li>
                  <Link to={"/about/about"}
                     className={headerStyles.navItem}
                     activeClassName={headerStyles.activeNavItem} >
                     About
                  </Link>
               </li>
               <li>
                  <Link to={"/blog/"}
                     className={headerStyles.navItem}
                     activeClassName={headerStyles.activeNavItem} >
                     Blog
                  </Link>
               </li>
               <li>
                  <Link to={"/contact/contact"}
                     className={headerStyles.navItem}
                     activeClassName={headerStyles.activeNavItem} >
                     Contact
                  </Link>
               </li>
            </ul>
            {/* </nav> */}
         </header>
      </React.Fragment>
   )
}

export default NavHeaderComponent
