import React from "react"
import HeadHelmet from '../../../components/head';
import LayoutPage from '../../../components/layout';
import ContinentMenu from '../continentMenu';
import AfricaMainGridComponent from './africaGrid';
import ArticleComponent from '../../home/article';

export default function IndexAsia() {
   return (
      <React.Fragment>
         <HeadHelmet title="Blog Continent Africa" />
         <LayoutPage>

            <ContinentMenu />

            <AfricaMainGridComponent />

				{/*---=| Single page article |=---*/}
            <div
               style={{ marginTop: 20, borderRadius: 10, overflow: "hidden" }}
            >
               <ArticleComponent />
            </div>

				{/* <BlogGridComponent /> */}
				
         </LayoutPage>
      </React.Fragment>
   )
}
