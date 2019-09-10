import React from 'react'

import HeaderPage from './../components/header'
import FooterPage from './../components/footer'

import './../styles/index.scss'
import layoutStyles from './layout.module.scss'

const LayoutPage = (props) => {

	// console.clear();

	return(
		<div className={layoutStyles.container}>
			
			<div className={layoutStyles.content}>
				<HeaderPage/>
				{props.children}
			</div>

			{/* sticky footer at the bottom */}
			<FooterPage/>

		</div>
	)
}

export default LayoutPage
