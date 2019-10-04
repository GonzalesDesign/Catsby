import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from "./footer.module.scss"
import Logo from "./../assets/media/GD-Logo.png"
// import { mergeClasses } from "@material-ui/styles"
import { makeStyles } from '@material-ui/core';
import { SocialIcon } from 'react-social-icons';

const FooterPage = () => {
	const classes = useStyles()

   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               author
            }
         }
      }
   `)
   return (
      <footer>
         
			<div className={classes.container}>
            
				<div className={classes.iconsContainer}>
					
					<SocialIcon url="https://linkedin.com/in/rlgonzales"  target="_blank" 
						style={{ height: 20, width: 20, marginRight: 12,}} 
						fgColor="var(--rlg-color-danger-tint3)" 
						bgColor="var(--rlg-color-primary-shade2)" 
						alt="LinkedIn"
						label="LinkedIn"
						/>

					<SocialIcon url="https://www.facebook.com/RLloydGonzalesDesign/"  target="_blank" 
						style={{ height: 28, width: 28, }} 
						fgColor="var(--rlg-color-danger-tint3)" 
						bgColor="var(--rlg-color-primary-shade2)" 
						alt="Facebook"
						label="Facebook"
						/>

					<a href="https://pwa.rlloydgonzales.com"  target="_blank">
						<img src={Logo} 
						className={classes.logo}  
						alt="RLG Portfolio Site"
						label="RLG Portfolio Site"
						/>
					</a>

					<SocialIcon network="twitter"  target="_blank" 
						style={{ height: 28, width: 28 }} 
						fgColor="var(--rlg-color-danger-tint3)" 
						bgColor="var(--rlg-color-primary-shade2)" 
						alt="Twitter"
						label="Twitter"
						/>

					<SocialIcon url="https://github.com/GonzalesDesign"  target="_blank" 
						style={{ height: 20, width: 20, marginLeft: 12, }} 
						fgColor="var(--rlg-color-danger-tint3)"  
						bgColor="var(--rlg-color-primary-shade2"  
						alt="Github"
						label="Github"
						/>

				</div>
            
				<p className={classes.jammy}>JAMstack: ReactJS, GatsbyJS, GraphQL, Contentful & Netlify</p>
				<p className={classes.content}>
               Created by {data.site.siteMetadata.author} © 2019
            </p>
				<p  className={classes.gmail}>rolandolloyd@gmail.com</p>
				<p  className={classes.phone}>(856)383•7203</p>

				{/* <p className={classes.socialIcons}>
					qwertyuiop[]\asdfghjkl;'zxcvbnm,./'
				</p> */}
				{/* <SocialIcon url="http://linkedin.com/in/rlgonzales" className={classes.socialIcons}/> */}
				

         </div>

      </footer>
   )
}

export default FooterPage

const useStyles = makeStyles({
		iconsContainer: {
			display: "flex",
			justifyContent: "flex-end",
			alignItems: "center",
			padding: 10,
		},
		container: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			padding: "1rem",
			marginTop: "1rem",
			// border: "1px solid grey",
		},
		logo: {
			width: 60,
			marginBottom: 0,
			// border: "1px solid grey",
		},
		content: {
			// "&:@include fontFamilyWeightSizeColor( var(--rlg-font-OpenSans), 400, 8px, var(--rlg-color-danger-tint3) )",
			fontFamily: "var(--rlg-font-OpenSans)",
			fontSize: ".6rem",
			fontWeight: 600,
			letterSpacing: 1.2,
			textTransform: "uppercase",
			color: "var(--rlg-color-light)",
			// padding: "12px 0",
			textAlign: "center",
			marginBottom: 0,
			background: "(rgba(var(--rlg-color-danger-rgb), 0.45) 100%)",
			// borderTop: "10px solid rgba(black, 0.5)",
			// border: "1px solid grey",
		},
		gmail: {
			fontFamily: "var(--rlg-font-OpenSans)",
			fontSize: ".4rem",
			fontWeight: 600,
			letterSpacing: 1.2,
			textTransform: "uppercase",
			marginBottom: 0,
			color: "var(--rlg-color-medium-tint3)",
			textAlign: "center",
		},
		phone: {
			fontFamily: "var(--rlg-font-OpenSans)",
			fontSize: ".4rem",
			fontWeight: 600,
			letterSpacing: 1.2,
			textTransform: "uppercase",
			marginBottom: 0,
			color: "var(--rlg-color-medium-tint3)",
			textAlign: "center",
		},
		jammy: {
			fontFamily: "var(--rlg-font-OpenSans)",
			fontSize: ".4rem",
			fontWeight: 600,
			letterSpacing: 1.2,
			textTransform: "uppercase",
			marginBottom: 0,
			color: "var(--rlg-color-medium-tint2)",
			textAlign: "center",
		},
		socialIcons: {
			color: "white",
			width: 40,
		},
})
