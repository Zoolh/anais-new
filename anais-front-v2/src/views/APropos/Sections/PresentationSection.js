import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";

import office1 from "assets/img/assets-anais/aPropos/femmeMature.jpg";
import office2 from "assets/img/assets-anais/aPropos/colo.jpg";
import office3 from "assets/img/assets-anais/aPropos/femme1.jpg";
import office4 from "assets/img/assets-anais/aPropos/accueil.jpg";
import office5 from "assets/img/assets-anais/aPropos/makeup1.jpg";
import office6 from "assets/img/assets-anais/aPropos/accueil2.jpg";
import office7 from "assets/img/assets-anais/aPropos/apropos-5.jpg"
import office8 from "assets/img/assets-anais/aPropos/apropos-4.jpg"
import office9 from "assets/img/assets-anais/aPropos/apropos-6.jpg"

const useStyles = makeStyles(officeStyle);

export default function SectionOffice() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office1}
            alt="office1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office2}
            alt="office2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office3}
            alt="office3"
          />
        </GridItem>
       

        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office6}
            alt="office6"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office4}
            alt="office4"
          />
        </GridItem>

        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office7}
            alt="office7"
          />
        </GridItem>

{/* TODO : à corriger rajouter car juste ajout d'une image vide pour centrer */}
        <GridItem md={3} sm={3}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            // src={}
            alt=""
          />
        </GridItem>


        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office5}
            alt="office5"
          />
        </GridItem>

        {/* <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={office9}
            alt="office9"
          />
        </GridItem>

      */}

      </GridContainer>
    </div>
  );
}
