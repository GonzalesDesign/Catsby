/*---=| Static title divider that goes underneath the grid layed out images in the home page |=---*/

import React from "react"
import Tiger from "./../../assets/media/tiger.png"

export default function AllAboutTitleComponent() {

   const aboutTitleContainerStyle = {
      display: "flex",
      // flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-end",
      alignContent: "center",
      margin: "40px 0 0 0",
      // padding: "1rem",
      borderRadius: 10,
      overflow: "hidden",
      border: "4px solid rgba(var(--rlg-color-danger-rgb), .5)",
   }
   const bgImgStyle = {
      // backgroundImage: `url(${Tiger})`,
      backgroundImage: `linear-gradient(
         to bottom,
         rgba(10,10,10,0) 0%,
         rgba(10,10,10,.25) 50%,
         rgba(10,10,10,1) 100%),
         url(${Tiger})`,

      height: 200,
      width: "calc(70vw - 10px)",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center left",
      padding: "1rem",
      margin: '40px 0 0 0',
      // border: "1px solid grey",
   }
   const textStyle = {
      fontFamily: "var(--rlg-font-OpenSans)",
      fontSize: "2.2rem",
      fontWeight: 400,
      textTransform: "uppercase",
      // textShadow: "2px 2px 2px rgba(rgb(104, 104, 104), 0.5)",
      textShadow: "2px 2px rgba(0, 0, 0, .25)",
      color: "var(--rlg-color-medium-tint2)",
      textAlign: "center",
      position: "absolute",
      // left: -100,
      // top: 60,
      width: "50vw",
      padding: "0 0 20px 0",
      // padding: 0,
      // zIndex: 102,
      // border: "1px solid red",
   }
   // const imgStyled2 = {backgroundImage: `url(${images[randImgNum]})`}

   return (
      <div>
         <div style={aboutTitleContainerStyle}>
            
            <div style={bgImgStyle} />

            <h1 style={textStyle} > All About The Big Cats </h1>

         </div>
      </div>
   )
}
