import React from "react"
import HeadHelmet from '../../../components/head';
import LayoutPage from '../../../components/layout';
import ContinentMenu from '../continentMenu';
import AsiaMainGridComponent from './asiaGrid';

export default function IndexAsia() {
   return (
      <React.Fragment>
         <HeadHelmet title="Blog Continent Asia" />
         <LayoutPage>

            <ContinentMenu />

            <AsiaMainGridComponent />
				
				{/* <BlogGridComponent /> */}
				
         </LayoutPage>
      </React.Fragment>
   )
}
