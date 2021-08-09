import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Refresh from "@material-ui/icons/Refresh";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCardFormule.js";

import cardBlog6 from 'assets/img/assets-anais/formules/background-carte-formule.jpg'

// import ListGroup from 'react-bootstrap/ListGroup'

const useStyles = makeStyles(styles);

export default function SectionCards(props) {
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const formule = props.formule;
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="cards">
      <div id="morphingCards" className="cd-section">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={12}>
              <div
                className={
                  classes.rotatingCardContainer +
                  " " +
                  classes.manualRotate +
                  " " +
                  activeRotate2
                }>
                <Card className={classes.cardRotate}>
                  <div
                    className={classes.front + " " + classes.wrapperBackground}
                    style={{ backgroundImage: `url(${cardBlog6})` }}>
                    <CardBody background className={classes.cardBodyRotate}>
                      <h3 className={classes.cardTitleWhite}>
                        {formule.libelle}
                      </h3>
                      <p className={classes.cardDescriptionWhite}>
                        {formule.description}
                      </p>
                      <div className={classes.textCenter}>
                        <Button
                          round
                          color="danger"
                          onClick={() =>
                            setActiveRotate2(classes.activateRotate)
                          }>
                          + d'infos
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                  <div
                    className={classes.back + " " + classes.wrapperBackground}
                    style={{ backgroundImage: `url(${cardBlog6})` }}>
                    <CardBody background className={classes.cardBodyRotate}>
                      <p className={classes.cardDescriptionVersoWhite}>
                      <GridContainer>
                      {formule.prestation.map((prestation, i) => {
                            return (<GridItem xs={12} sm={6} md={6} lg={6}>{prestation.libelle}</GridItem>)
                          })}
                      </GridContainer>
                          
                      
                      </p>
                      <div className={classes.textCenter}>
                        {formule.tarif} €
                        <br />
                        <Button
                          round
                          color="danger"
                          onClick={() => setActiveRotate2("")}>
                          <Refresh /> Retour
                        </Button>
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
