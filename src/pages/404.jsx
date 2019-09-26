import React from 'react';
import { Link } from 'gatsby'
import LayoutPage from './../components/layout'

import HeadHelmet from './../components/head'


const NotFound = () => {

	return(

		<LayoutPage>
			<HeadHelmet title="404"/>

			<h1>Page Not Found!</h1>
			<p><Link to="home">HeadHelmet Home</Link></p>

		</LayoutPage>



	)


}

export default NotFound