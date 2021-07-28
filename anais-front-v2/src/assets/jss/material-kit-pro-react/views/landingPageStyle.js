import {
  container,
  title,
  main,
  whiteColor,
  blancCharte,
  mainRaised
} from "assets/jss/material-kit-pro-react.js";

import FontCharte from "assets/css/font-charte.css";

const landingPageStyle = {
  // imgFleur:{
  //   marginTop: "25%",
  //   width: "30%",
  //   textAlign: "left"
  // },
  // mainContainer:{
  //   marginTop:"20%",
  //   paddingTop: "80%"
  // },
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2"
  },
  title: {
    ...title,
    fontFamily: "Quentin",
    display: "inline-block",
    position: "relative",
    marginTop: "30%",
    minHeight: "32px",
    color: "black",
    textDecoration: "none",
    font: "arial"
  },
  intro: {
    fontFamily: "CaviarItalic",
    zIndex: "-1",
    // marginTop: "-20%"
  },
  slogan: {
    fontFamily: "CaviarBoldItalic"
  },
  traduction: {
    fontFamily: "CaviarItalic",
    fontSize: "12px"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main
  },
  mainRaised: {
    ...mainRaised
  },
  mainSection: {
    // width: "80% !important",
    // marginLeft: "12% !important",
    backgroundColor : blancCharte,
    // height: "20px !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  }
};

export default landingPageStyle;
