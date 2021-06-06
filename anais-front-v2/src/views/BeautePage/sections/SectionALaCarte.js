import React, {useEffect} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Subject from "@material-ui/icons/Subject";
import Refresh from "@material-ui/icons/Refresh";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const [activeRotate1, setActiveRotate1] = React.useState("");
//   const [activeRotate2, setActiveRotate2] = React.useState("");
//   const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  useEffect(() => {
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
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer +" " +classes.manualRotate +" " +activeRotate1}>
                  <Card className={classes.cardRotate}>
                    <div className={classes.front}>
                      <CardBody className={classes.cardBodyRotate}>
                        {/* <Success>
                          <h5 className={classes.cardCategorySocial}>Auto Maquillage</h5>
                        </Success> */}
                        <h4 className={classes.cardTitle}>
                          <a href="#" onClick={e => e.preventDefault()}>
                            Auto Maquillage
                          </a>
                        </h4>
                        <p className={classes.cardDescription}>
                            Je vais vous apprendre à vous maquiller toute seule.
                        </p>
                        <div className={classes.textCenter}>
                          <Button
                            round
                            color="success"
                            onClick={() =>setActiveRotate1(classes.activateRotate)}
                          >
                            <Refresh /> 
                          </Button>
                        </div>
                      </CardBody>
                    </div>
                    <div className={classes.back}>
                      <CardBody className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitle}>Do more...</h5>
                        <p className={classes.cardDescription}>
                          You can read this article or share it with your
                          friends and family on different networks...
                        </p>
                        <div className={classes.textCenter}>
                          <Button round color="rose">
                            <Subject /> Read
                          </Button>
                          <Button round justIcon color="twitter">
                            <i className="fab fa-twitter" />
                          </Button>
                          <Button round justIcon color="dribbble">
                            <i className="fab fa-dribbble" />
                          </Button>
                          <Button round justIcon color="facebook">
                            <i className="fab fa-facebook" />
                          </Button>
                        </div>
                        <br />
                        <Button link onClick={() => setActiveRotate1("")}>
                          <Refresh /> Back...
                        </Button>
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
