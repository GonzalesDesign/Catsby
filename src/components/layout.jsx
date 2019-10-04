/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Note: Main Layout Component. 
	Container for the background image, 
	Top nav component, children container background,
	and the shell container for all its children . 
**************************************************/
import React from "react"

import NavHeaderComponent from "./nav-header"
import FooterPage from "./../components/footer"

import "./../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const LayoutPage = props => {
   return (
      <div className={layoutStyles.layoutMainContainer}>
         <NavHeaderComponent />

         <div className={layoutStyles.hero} />
         <div className={layoutStyles.childrenMainShell}>
            <div className={layoutStyles.childrenShell}>
               <div className={layoutStyles.content}>{props.children}</div>

               {/* sticky footer at the bottom */}
               <FooterPage />
            </div>
         </div>
      </div>
   )
}

export default LayoutPage
