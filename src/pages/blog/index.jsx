/**************************************************
* Project: Catsby 
* URL: projectname.com
* Contact: rolandolloyd@gmail.com
* Copyright © 2019 GonzalesDesign
* Version: 19.09.07
* Note: Grid layout design 2. 
	Collection of cards for Blog section.
* To do: Add Categories menu and Pagination.
	Use a different template design.
**************************************************/

import React from 'react'
// import { graphql, useStaticQuery,navigate } from 'gatsby';
// import { makeStyles } from "@material-ui/core/styles"
import HeadHelmet from '../../components/head';
import LayoutPage from '../../components/layout';
import BlogGridComponent from './blogGrid';
import ContinentMenu from './continentMenu';
import AsiaMainGridComponent from './Continents/asiaGrid';


export default function BlogIndexComponent() {

	return (
		<React.Fragment>
			
			<HeadHelmet title="Blog Posts" />

			<LayoutPage>

				<ContinentMenu />

				{/* <AsiaMainGridComponent /> */}
				
				<BlogGridComponent />

			</LayoutPage>

		</React.Fragment>
	)
}

