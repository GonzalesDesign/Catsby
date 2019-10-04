import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

export default function ContinentMenu() {

   const [continentAsia, setContinentAsia] = useState('')
   const [continentAmerica, setContinentAmerica] = useState('')
   useEffect(() => { // effect
      fMobileScreen()
      window.addEventListener('resize', fMobileScreen)
      return () => { // cleanup
         window.removeEventListener('resize', fMobileScreen)
      };
   }, [continentAsia, continentAmerica]) //[input]

   const fMobileScreen = () => {
      let screenWidth = window.innerWidth;
      if(screenWidth < 700) {
         setContinentAsia('Asia')
         setContinentAmerica('Americas')
      } else if (screenWidth >= 701 && screenWidth < 1000){
         setContinentAsia('Asias')
         setContinentAmerica('The Americas')
      } else {
         setContinentAsia('Asia: India & Russia')
         setContinentAmerica('North & South America')
      }
   }

   const classes = useStyles()

   const queryMenu = useStaticQuery(graphql`
      query ContinentMenuQuery {
         allContentfulContinents {
            edges {
               node {
                  id
                  slug
                  title
               }
            }
         }
      }
   `)
    /*--------=| render |=--------*/
   return (
      <React.Fragment>
         <div className={classes.container} >
            
            <div>
               <h4 className={classes.headline} >The Continents</h4>
               <h6 className={classes.subHeadline} >Where the Big Cats Roam</h6>
            </div>

            <div className={classes.linksContainer} >
               <Link to={`/blog/Continents/indexAsia/`} 
                  className={classes.linkTo} 
                  activeClassName={classes.activeNavItem}>
                     {/* Asia */}
                     {continentAsia}
                  </Link>
               <Link to={`/blog/Continents/indexAfrica/`} 
                  className={classes.linkTo} 
                  activeClassName={classes.activeNavItem}>
                     Africa
                  </Link>
               <Link to={`/blog/Continents/indexAmericas/`} 
                  className={classes.linkTo} 
                  activeClassName={classes.activeNavItem}>
                     {continentAmerica}
                  </Link>
               <Link to={`/blog/Continents/indexEurope/`} 
                  className={classes.linkTo} 
                  activeClassName={classes.activeNavItem}>
                     Europe
                  </Link>
            </div>
         </div>
      </React.Fragment>
   )
}

const useStyles = makeStyles( {
	container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px 0",
      // border: "1px solid yellow",   
   },

   headline: {
      color: "orange",
      fontWeight: 500,
      marginBottom: "0px",
      // border: "1px solid yellow",
   },
   subHeadline: {
      color: "white",
      marginBottom: "10px",
      textAlign: "center",
      letterSpacing: 1.3,
      // border: "1px solid yellow",
   },

   linksContainer: {
      // display: "flex",
      padding: "10px 4px",
      background: "rgba(10,10,10,.25) 25%",
      boxShadow: "1px 1px 3px black",
      // border: "1px solid yellow",

   },

   linkTo: {
      textDecoration:"none", 
      color:"white",
      textTransform:"uppercase",
      fontSize: "15px",
      fontWeight: 600,
      letterSpacing: 1.2,
      padding:10, margin:5,
      width: 300,
      "&:hover": {
         color: "var(--rlg-color-warning)",
      }
      // hyphens: "none",
      // overflowWrap: "break-word",
      // whiteSpace: "normal",
      // whiteSpace: "nowrap",
      // border: "1px solid cyan",
   },
   activeNavItem: {
      color: "var(--rlg-color-warning)",
   },

})
