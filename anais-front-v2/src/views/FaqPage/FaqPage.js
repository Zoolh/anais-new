/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import formulesStyle from "assets/jss/material-kit-pro-react/views/faqStyle";

import SectionQuestions from "./Sections/SectionQuestions.js"


const useStyles = makeStyles(formulesStyle
);

export default function FaqPage() {

  const classes = useStyles();


  return (
    <div className={classes.productPage}>
      <Header
        brand="Logo Anaïs"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "roseCharte"
        }}/>

      <Parallax
        className={classes.pageHeader}>
        <div className={classes.container}>
          <br/>
          <GridContainer color="black">
            <GridItem xs={12} sm={8} md={8}>
              <h1 className={classes.title}>F.A.Q</h1>
              <h4 className={classes.subTitle}>
                Retrouvez ici les réponses aux principales questions que vous pouvez vous poser ! <br/>
                Si vous ne trouvez pas votre bonheur, n'hésitez pas à me contacter directement via la rubrique Contact.
              </h4>
            </GridItem>
          </GridContainer>            
        </div>
      </Parallax>

      <SectionQuestions />

      <Footer />
    </div>
  );
}
