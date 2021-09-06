/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import PresentationSection from "views/APropos/Sections/PresentationSection.js";


import aboutUsStyle from "assets/jss/material-kit-pro-react/views/AProposStyle";

const useStyles = makeStyles(aboutUsStyle);

export default function AProposPage({ ...rest }) {
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

      <Parallax className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer justify="center" >
            <GridItem
              xs={12}
              md={12}
              sm={12}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}>
              <h1 className={classes.title}>A Propos</h1>
              <h4 className={classes.subTitle}>
                Coco chanel disait que quand une femme est mal habillée, on  ne remarque que sa robe, mais quand elle est parfaitement vêtue,
                c’est elle que l’on remarque. Et elle avait raison.<br/><br/>
                Je m’appelle Anaïs, et mon métier est de vous aider à <strong>vous mettre en valeur</strong> et faire en sorte que, 
                <strong> quelque soit votre morphologie, vous vous sentiez bien dans votre corps.</strong><br /><br/>
                Mon objectif est de comprendre vos besoins, qu'ils soient personnels ou professionnels,
                découvrir votre personnalité, vos habitudes de vie, et surtout vos envies <strong>afin de valoriser votre image et pouvoir déterminer
                ensemble le style qui vous correspond le mieux.</strong><br /><br/>
                Passionnée par la mode et la beauté depuis toujours, j’ai obtenu un <strong>Master en Marketing spécialité Mode & Luxe</strong>,
                au terme duquel j’ai pu travailler auprès de grandes marques pendant plus de cinq ans. <br/>
                J’ai ensuite décidé de concrétiser ma passion en intégrant le centre de formation IDM pour aujourd’hui pouvoir la partager avec vous.
                <br/><br/>
                Je vous promets des séances à la fois agréables et efficaces au cours desquelles vous pourrez
                profiter de mon expertise tout en prenant soin de vous. <br/>
                <strong>Ensemble, nous trouverons un style authentique qui saura révéler votre personnalité.</strong><br/>
                Alors, si vous souhaitez reprendre le contrôle de votre image, lancez-vous !<br />

              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Hidden smDown>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <PresentationSection />
        </div>
      </div>
      </Hidden>
      <Footer />
    </div>
  );
}
