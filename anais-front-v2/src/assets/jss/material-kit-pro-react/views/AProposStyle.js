import { dark } from "@material-ui/core/styles/createPalette";
import {
  container,
  title,
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  blancCharte
} from "assets/jss/material-kit-pro-react.js";

const aboutUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1
  },
  pageHeader: {
    height: "auto",
    backgroundPosition: "top center",
    backgroundColor: blancCharte +"!important"
  },
  title: {
    ...title,
    "@media (max-width:815px)": { marginTop:"25%" },
    "@media (min-width:815px)": { marginTop:"10%" },
    "&, & + h1": {
      color: dark,
      fontFamily: "Quentin",
    }
  },
  subTitle:{
    fontFamily: "CaviarItalic !important",
    "@media (max-width:815px)": { marginBottom:"35%" },
    "@media (min-width:815px)": { marginBottom:"15%" },
  },
  textCenter: {
    textAlign: "center"
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

export default aboutUsStyle;
