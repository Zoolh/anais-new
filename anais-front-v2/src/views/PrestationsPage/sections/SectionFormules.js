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
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import formulesStyle from "assets/jss/material-kit-pro-react/views/formulesStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";
import imageTest from "assets/img/landing-page/anais-portrait.jpg";

// Services 
import FormuleServices from "../../../services/formule-services";

// Import Modal
import ModalDescription from "../modals/FormuleDescriptionModal";

const useStyles = makeStyles(formulesStyle
);

export default function SectionFormules() {

  const [listeForumles, setListeFormules] = useState([]);
  const [openFormuleModal, setOpenFormuleModal] = useState(false);

  const classes = useStyles();


  useEffect(() => {
    getAllFormules();
  }, [])

  const getAllFormules = () => {
    FormuleServices.getAll()
      .then(response => {
        setListeFormules(response.data);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div >

      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <div className={classes.relatedProducts}>
            <GridContainer>
              {listeForumles.map((formule, index) => {
                return (
                  <GridItem sm={6} md={3} key={index} onClick={() => setOpenFormuleModal(true)}>
                    <Card product>
                      <CardHeader image>
                          {/* <img src={cardProduct1} alt="cardProduct" /> */}
                          <img src={imageTest} alt="cardProduct" />
                      </CardHeader>
                      <CardBody>
                        <h6
                          className={classNames(
                            classes.cardCategory,
                            classes.textRose
                          )}>
                          Formule {formule.id}
                        </h6>
                        <h4 className={classes.cardTitle}>{formule.libelle}</h4>
                        <div className={classes.cardDescription}>{formule.description}</div>
                      </CardBody>
                      <CardFooter className={classes.justifyContentBetween}>
                        <div className={classes.price}>
                          <h4>Tarif : {formule.tarif}€</h4>
                        </div>
                      </CardFooter>
                      <ModalDescription formule={formule} />
                    </Card>
                  </GridItem>
                )
              })}
            </GridContainer>
          </div>
        </div>
      </div>
    
    </div>
  );
}
