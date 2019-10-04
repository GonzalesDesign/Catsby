import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import BigKitty from "./../../assets/media/BigKitty.jpg"

/*--------=| Create Component |=--------*/
export default function IntroImage() {

   const classes = useStyles()

   const imgOrigWidth = 1342
   const imgOrigHeight = 1000
   const imgOrigRatio = imgOrigWidth / imgOrigHeight
   // console.log("imgOrigRatio: ", imgOrigRatio)
   // const orientation = "landscape" //portrait
   // let scrnWidth = window.innerWidth
   // let scrnHeight = window.innerHeight
   let dynamicImageHeight = 0

   /*--------=| Set Hooks |=--------*/
   const [imgHeight, setImgHeight] = useState(imgOrigHeight)

   // const fOrientation = () => {
   //    let orientation = scrnWidth * scrnHeight
   //    console.log("orientation: ", orientation)
   // }
   // fOrientation()

   /*---=| Challenge: Keep the intro image mostly visible whatever the screen size.
      if ratio = portrait, get the screen width * .70 and assign as intro image width
      if ratio = landscape, scrnWidth*.70 = introImg.width, get the original image width / orig img height to get a ratio
      use that ratio naumber and divide with the current introImg.width to get the height 
      PSEUDO CODE:
      imgRatio = 1.6
      scrnWidth = 300
      imgHeight = scrnWidth / imgRatio |=---*/

   const optionalWidthPadding = -20
   /*--------=| Use Hooks: Screen resize event listener |=--------*/
   useEffect(() => {  /*---= effect =---*/
      fResizeIntroImage()
      window.addEventListener('resize', fResizeIntroImage)
      return () => {  /*---= cleanup =---*/
         window.removeEventListener('resize', fResizeIntroImage)
      }
   }, [dynamicImageHeight]) /*---= option? =---*/
   
   const fResizeIntroImage = () => {
      // let scrnWidth = window.innerWidth * .70 // this.screenWidth; var(--rlg-pads-container-width)
      let scrnWidth = window.innerWidth * .70 // "(var(--rlg-pads-container-width))"
      // let scrnWidth = "var(--rlg-window-innerWidth)"
      dynamicImageHeight = (scrnWidth/imgOrigRatio) + optionalWidthPadding
      setImgHeight(dynamicImageHeight)
      // console.log("orientation: ", orientation)
      // console.log("scrnWidth: ", scrnWidth)
      // console.log("imgHeight: ", imgHeight)
      // console.log("dynamicImageHeight: ", dynamicImageHeight)
   }

   /*--------=| Render |=--------*/
   return (
      <React.Fragment>
         {/* <Link to={"postTemplate/whiteTiger"}> */}
            <div style={{ backgroundImage: `url(${BigKitty})`, height: imgHeight }} 
               className={classes.imageContainer} 
               onClick={ () => navigate("postTemplate/whiteTiger")}>
            </div>
         {/* </Link> */}
      </React.Fragment>
   )
}


/*--------=| CSS: MaterialUI |=--------*/
const useStyles = makeStyles({
   imageContainer: {
      // backgroundImage: `url(${BigKitty})`,
      // height: 600, //imgHeight,
      backgroundColor: "#243f13", //dark green
      backgroundPosition: "bottom center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      border: "1px solid grey",
   },
})
