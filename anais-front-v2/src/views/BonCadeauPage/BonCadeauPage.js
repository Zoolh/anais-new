/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import BonCadeauPicture from "components/Pictures/BonCadeauPicture";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function BonCadeauPage({ ...rest }) {
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
        {...rest} />
      <div className={classNames(classes.main, classes.mainRaised, classes.customContent)}>
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classNames(classes.title, classes.titleCustom)}>Carte Cadeau</h2>
            <GridContainer>
              <GridItem md={12} sm={12} xs={12}  lg={12}>
                <p className={classes.subTitbleCustom}>
                  <strong>Vous souhaitez faire bénéficier vos proches d’une prestation de conseil en image ?<br />
                  Grâce à cette carte cadeau, vous pouvez choisir la prestation que vous souhaitez offrir.</strong><br />

                  Contactez-moi par mail pour que je vous explique la marche à suivre.<br />
                  Après validation et paiement de la prestation choisie, vous recevrez votre carte cadeau
                  avec la prestation détaillée par mail et en toute confidentialité.<br/>
                  La carte cadeau est valable 6 mois à compter de sa date d'édition.
                </p>
              
              </GridItem>
              <GridItem md={12} sm={12} xs={12}  lg={12}>
                <BonCadeauPicture />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
