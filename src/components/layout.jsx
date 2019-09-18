import React from "react"

import NavHeaderComponent from "./nav-header"
import FooterPage from "./../components/footer"

import "./../styles/index.scss"
import layoutStyles from "./layout.module.scss"

const LayoutPage = props => {
  // console.clear();

  return (
    <div className={layoutStyles.wrapper}>
      {/* <div className={layoutStyles.hero} /> */}
      <NavHeaderComponent />

      <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
          {props.children}
        </div>

        {/* sticky footer at the bottom */}
        <FooterPage />
      </div>
    </div>
  )
}

export default LayoutPage
