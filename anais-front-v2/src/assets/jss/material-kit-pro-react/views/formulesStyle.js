import {
  container,
  mlAuto,
  section,
  main,
  mainRaised,
  title,
  cardTitle,
  grayColor,
  roseColor,
  roseCharte,
  marronCharte,
  violetCharte,
  orangeCharte,
  blancCharte
} from "assets/jss/material-kit-pro-react.js";

import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";
import customSelectStyle from "assets/jss/material-kit-pro-react/customSelectStyle.js";
import { useMediaQuery } from "@material-ui/core";

const productStyle = {
  formulesContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  formuleCard: {
    minHeight: "48rem"
  },
  dialogueModal:{
    // display:"none !important",
    justifyContent: "left",

  },
  mlAuto,
  main,
  ...imagesStyles,
  ...customSelectStyle,
  ...tooltipsStyle,
  container: {
    ...container,
    zIndex: 2
  },
  mainRaised: {
    ...mainRaised
  },
  section: {
    ...section,
    padding: "70px 0px"
  },
  title: {
    ...title,
    marginTop:"15%",
    marginBottom: 0,
    fontFamily: "CaviarBoldItalic !important",
    textTransform: "uppercase"
  },
  subTitle:{
    fontFamily: "CaviarItalic !important",
  },
  sectionGray: {
    background: grayColor[14]
  },
  mainPrice: {
    margin: "10px 0px 25px",
    fontFamily: "CaviarBoldItalic !important"
  },
  tarif:{ 
    fontFamily: "CaviarBoldItalic !important"
  },
  textCenter: {
    textAlign: "center!important"
  },
  features: {
    paddingTop: "30px"
  },
  detailsBtn:{
    fontFamily: "CaviarBold !important"
  },
  productPage: {
    backgroundColor: grayColor[2],
    "& $mainRaised": {
      margin: "-40vh 0 0",
      padding: "40px"
    },
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto"
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center"
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container .image-gallery-thumbnail": {
      "&.active > .image-gallery-thumbnail-inner": {
        opacity: "1",
        borderColor: grayColor[6]
      },
      "& > .image-gallery-thumbnail-inner": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8"
      },
      "& > .image-gallery-thumbnail-inner img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center"
      }
    }
  },
  titleRow: {
    marginTop: "5vh"
  },
  floatRight: {
    float: "right!important"
  },
  pageHeader: {
    minHeight: "30vh",
    maxHeight: "600px",
    height: "auto",
    backgroundPosition: "top center",
    backgroundColor: blancCharte +"!important"
  },
  relatedProducts: {
    "& $title": {
      marginBottom: "80px"
    }
  },
  pickSize: {
    marginTop: "50px"
  },
  pullRight: {
    float: "right"
  },
  cardCategory: {
    textAlign: "center",
    marginTop: "10px"
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
    fontFamily: "CaviarBoldItalic !important",
    textTransform: "uppercase"
  },
  cardDescription: {
    textAlign: "center",
    color: marronCharte,
    fontFamily: "CaviarItalic !important",
  },
  textRose: {
    color: roseCharte
  },
  justifyContentBetween: {
    justifyContent: "space-between!important"
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px"
    }
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left"
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
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative"
  },
  listePresta:{
    fontFamily: "CaviarClassique!important"
  },
  description: {
    fontFamily: "CaviarClassique!important",
  },
  sectionTitle: {
    fontFamily: "CaviarBold !important",

  },
  dialogPaper: {
    display:"block !important",
    ["@media (max-height:400px)"]: { minWidth: "0rem" },
    ["@media (min-height:700px)"]: { minWidth: "80rem" }
  }
  ,
  imgDesc: {
    // maxHeight:"20em",
    marginTop:"10%"
  }
};

export default productStyle;
