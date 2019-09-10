import React, {useEffect} from "react"
import { Link } from 'gatsby'

import LayoutPage from './../components/layout'
import Head from './../components/head'


const IndexPage = () => {

	/*---=| Browser tab title |=---*/
	// const tabTitle = "Catsby d' Great";
	// useEffect(() => {
	// 	document.title = tabTitle;
	// 	console.log('tabTitle: ', tabTitle);
	// });

	return (

		<LayoutPage>
			<Head title="Home"/>
			<h1>Prrrrrr...</h1>
			<h2>"Cats are inquisitive, but hate to admit it."</h2>

			<p><Link to="/contact">Contact me</Link></p>

		</LayoutPage>
	)

}

export default IndexPage