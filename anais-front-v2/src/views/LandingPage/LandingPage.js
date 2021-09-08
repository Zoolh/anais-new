/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";

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

import TemoignagesSection from "./Sections/TemoignagesSection.js";

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
        brand="Logo Anaïs"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300
        }}
        {...rest} />

      <Parallax className={classes.mainContainer}
        backgroundColor="blancCharte">

        <GridContainer color="black" className={classes.container}>
          <GridItem xs={12} sm={6} md={6}>
            <Hidden smDown>
              <Box xs={12} display={{ sm: "block" }}>
                <h1 className={classes.title}>Anaïs L</h1>
              </Box></Hidden>

            <h4 className={classes.intro}>
              Votre agence de conseil en image & communication <br />
              adopte une approche personnalisée et vous accompagne avec bienveillance dans la définition de votre image.
            </h4>
            <br />
            <h4 className={classes.slogan}>
              Look Good To Feel Good*
            </h4>
            <span className={classes.traduction}>*Ca fait du bien de se sentir bien</span>
            <br />
            <br />
            <br />

            <Link to="/prestations-page">
              <Button
                size="lg"
                color="roseCharte">
                Mes prestations
              </Button>
            </Link>


          </GridItem>

          <GridItem xs={12} sm={6} md={6} >
            <Box display={{ xs: "none", sm: "block" }}>
              <ProfilPicture />
            </Box>
          </GridItem>

        </GridContainer>
      </Parallax>
      {/* <div className={classNames(classes.main, classes.mainRaised, classes.mainSection)}>
        <div className={classes.container}>
          <TemoignagesSection />
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
