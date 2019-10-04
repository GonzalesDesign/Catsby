import React from "react"

import LayoutPage from './../../components/layout';
import HeadHelmet from './../../components/head'
import { graphql, useStaticQuery, Link } from 'gatsby';
import { makeStyles } from '@material-ui/core';

const ContactPage = () => {

	return(
		<LayoutPage>
			<HeadHelmet title="Contact"/>
			
			<div  style={{ color: "white", textAlign: "center", margin: 100,}}>
				<h1 style={{ color: "white" }}>Contact</h1>
				<p style={{ color: "white" }}>In Progress...</p>
			</div>

		</LayoutPage>
	)
}

export default ContactPage