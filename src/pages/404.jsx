import React from 'react';
import { Link } from 'gatsby'
import LayoutPage from './../components/layout'

import Head from './../components/head'


const NotFound = () => {

	return(

		<LayoutPage>
			<Head title="404"/>

			<h1>Page Not Found!</h1>
			<p><Link to="home">Head Home</Link></p>

		</LayoutPage>



	)


}

export default NotFound