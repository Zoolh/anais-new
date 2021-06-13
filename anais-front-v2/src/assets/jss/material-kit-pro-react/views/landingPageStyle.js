import {
  container,
  title,
  main,
  whiteColor,
  mainRaised
} from "assets/jss/material-kit-pro-react.js";

import FontCharte from "assets/css/font-charte.css";

const landingPageStyle = {
  imgFleur:{
    width: "30%",
    textAlign: "left"
  },
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2"
  },
  blocGauche: {
    // "@media (min-width: 991px)": {
    //   marginTop: "50%"
    // },
    marginTop: "-15%"
  },
  title: {
    ...title,
    fontFamily: "Quentin",
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "black",
    textDecoration: "none",
    font: "arial"
  },
  intro: {
    fontFamily: "CaviarItalic",
    zIndex:"-1",
    marginTop: "-20%"
  },
  slogan : {
    fontFamily:"CaviarBoldItalic"
  },
  traduction: {
    fontFamily:"CaviarItalic",
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
