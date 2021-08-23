/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import formulesStyle from "assets/jss/material-kit-pro-react/views/formulesStyle.js";

// Services 
import FormuleServices from "../../../services/formule-services";


// Import Modal
import ModalDescription from "../modals/FormuleDescriptionModal";

const useStyles = makeStyles(formulesStyle
);

export default function SectionFormules() {

  const [listeFormules, setListeFormules] = useState([]);
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


  const getImage = (nomSection, nomImage) => {
    try {
      return (
        <img src={require("assets/img/assets-anais/formules/".concat(nomSection)
          .concat("/")
          .concat(nomImage)
          .concat(".jpg"))}
          alt="rien" />
      )
    } catch (error) {
      return (
        <img src="" alt="ATTENTE D'UNE IMAGE" />
      )
    }
  }


  return (
    <div >
      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <div className={classes.relatedProducts}>
            <GridContainer className={classes.formulesContainer}>
              {listeFormules.map((formule, index) => {
                return (
                  <GridItem sm={6} md={3} lg={6} key={index} onClick={() => setOpenFormuleModal(true)} >
                    <Card product className={classes.formuleCard}>
                      <CardHeader image>
                        {getImage(formule.sectionAsset, formule.imagePrincipale)}
                      </CardHeader>
                      <CardBody>
                        <h6
                          className={classNames(
                            classes.cardCategory,
                            classes.textRose
                          )}>
                        </h6>
                        <h4 className={classes.cardTitle}>{formule.libelle}</h4>
                        <div className={classes.cardDescription}>{formule.description}</div>
                      </CardBody>
                      <CardFooter className={classes.justifyContentBetween}>
                        <div className={classes.price}>
                          <h4 className={classes.tarif}>Durée : {formule.duree}</h4>
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
