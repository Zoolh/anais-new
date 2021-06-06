/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import ProfilPicture from "components/Pictures/ProfilPicture.js";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page
import SectionProduct from "./Sections/SectionProduct.js";
import SectionTeam from "./Sections/SectionTeam.js";
import SectionWork from "./Sections/SectionWork.js";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        color="roseCharte"
        brand="Logo Anaïs"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "roseCharte"
        }}
        {...rest}/>

      <Parallax 
        image={require("assets/img/landing-page/anais-full.jpg")}
        backgroundColor="blancCharte">
      {/* <Parallax> */}
        <div className={classes.container}>
          <GridContainer color="black" className={classes.blocGauche}>
            <GridItem xs={4} sm={6} md={6}>
            <img className={classes.imgFleur} src={require("assets/img/landing-page/fleur-rose.png")}></img>
              <h1 className={classes.title}>Anaïs L.</h1>
              <h4 className={classes.intro}>
                {/* Chaque femme est différente et a sa propre singularité...
                Mon objectif est de vous aider à trouver votre équilibre...
                La mode peut aussi être un outil de bienêtre. */}
                L'agence de conseil en image & communication Anaïs.L <br/>
                Adopte une approche personnalisée et vous accompagne dans la définition de votre image.
              </h4>
              <h4 className={classes.slogan}>
                LOOK GOOD TO FEEL GOOD*
              </h4>
              <span className={classes.traduction}>*Ca fait du bien de se sentier bien</span>
            </GridItem>
            <GridItem xs={4} sm={6} md={6}>
              {/* <ProfilPicture /> */}
            </GridItem>
          </GridContainer>
        </div>        
      </Parallax>

      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <SectionProduct />
          <SectionTeam />
          <SectionWork /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
