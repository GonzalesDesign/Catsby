import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import LayoutPage from "../components/layout"
import HeadHelmet from "../components/head"
import CatsbyPostsComponent from "./home/catsbyPosts"
// import HomeArticlePostsComponent from "./home/home-article-posts"
// import HomeGridComponent from "./home/index"
import ArticleComponent from "./home/article"
// import ContactFeatureComponent from '../misc/homeX/profileX/contact-feature';
import AllAboutTitleComponent from "./home/allAbout-Title"
import IntroImage from "./home/introImage"
import HomeGridComponent from "./home/homeGrid"

const IndexPage = () => {
   const classes = useStyles()

   return (
      <React.Fragment>
         <HeadHelmet title="Home" />

         <LayoutPage>
            {/*---=| BigKitty Image Intro |=---*/}
            <div style={{ marginBottom: 30 }}>
               <IntroImage />
            </div>

            {/*---=| Grid layed out images: posts |=---*/}
            <HomeGridComponent />

            {/*---=| All about title divider |=---*/}
            <AllAboutTitleComponent />

            {/*---=| Card based images: posts |=---*/}
            <div className={classes.catsbyArticles}>
               {/* <CatsbyPostsComponent /> */}
            </div>

            {/*---=| Single page article |=---*/}
            <div
               style={{ marginTop: 20, borderRadius: 10, overflow: "hidden" }}
            >
               <ArticleComponent />
            </div>
         </LayoutPage>
      </React.Fragment>
   )
}

export default IndexPage

const useStyles = makeStyles({
   homeArticles: {
      padding: "1rem",
      marginTop: "1rem",
      border: "1px solid grey",
   },
   catsbyArticles: {
      marginTop: 10,
   },
})
