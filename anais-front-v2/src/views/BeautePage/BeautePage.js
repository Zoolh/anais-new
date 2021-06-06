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

// Services 
import FormuleServices from "../../services/formule-services";

// Import Modal
import ModalDescription from "./modals/FormuleDescriptionModal";

// Import Sections
import SectionFormules from "./sections/SectionFormules";
import SectionALaCarte from "./sections/SectionALaCarte";

const useStyles = makeStyles(formulesStyle
);

export default function BeautePage() {

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
    <div className={classes.productPage}>
      <Header
        brand="Logo Anaïs"
        links={<HeaderLinks dropdownHoverColor="rose" />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "rosePoudre"
        }}
      />

      <Parallax
        color="black"
        className={classes.pageHeader}>
        <div className={classes.container}>
          <GridContainer color="black">
            <GridItem xs={4} sm={6} md={6}>
              <br />
              <br />
              <h1 className={classes.title}>Beauté & Visagisme</h1>
              <p>
                Découvrez mes prestations dédiées à la Beauté et au Visagisme
              </p>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <SectionALaCarte/>
      <SectionFormules />

      <Footer />
    </div>
  );
}
