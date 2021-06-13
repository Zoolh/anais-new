/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Box from "@material-ui/core/Box";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";

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

      <Parallax className={classes.mainContainer}
        // image={require("assets/img/landing-page/anais-full.jpg")}
        backgroundColor="blancCharte">

          <GridContainer color="black" className={classes.container}>
            <GridItem xs={12} sm={6} md={6}>
            {/* <img className={classes.imgFleur} src={require("assets/img/landing-page/fleur-rose.png")}></img> */}

            <Box   display={{ xs: "none", sm: "block" }}>
              <h1 className={classes.title}>Anaïs L</h1>
            </Box>
              
              <h4 className={classes.intro}>
                Coco Chanelle disait : "Quand une femme est mal habillée on regarde sa robe, mais quand elle est parfaitement vétûe, c'est elle que l'on remarque".<br/>
                Je m'appelle Anaïs et mon métier est de vous aider à trouver votre style.
              </h4>
              <h4 className={classes.slogan}>
                LOOK GOOD TO FEEL GOOD*
              </h4>
              <span className={classes.traduction}>*Ca fait du bien de se sentier bien</span>
              <br/>
              <Button
                color="roseCharte"
                size="lg"
                href=""
                target="_blank">
               Mes prestations
              </Button>
            </GridItem>
          
            <GridItem xs={12} sm={6} md={6} >
              <Box   display={{ xs: "none", sm: "block" }}>
                <ProfilPicture />
            </Box>              
            </GridItem>
           
          </GridContainer>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
        </div>
      </div>
      <Footer />
    </div>
  );
}
