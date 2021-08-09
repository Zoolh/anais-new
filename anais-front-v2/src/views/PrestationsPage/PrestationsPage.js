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
import Button from "components/CustomButtons/Button.js";

import formulesStyle from "assets/jss/material-kit-pro-react/views/formulesStyle.js";

// images
import cardProduct1 from "assets/img/examples/card-product1.jpg";

// Services 
import FormuleServices from "../../services/formule-services";

// Import Modal
import ModalDescription from "./modals/FormuleDescriptionModal";

// Import Sections
import SectionFormules from "./sections/SectionFormules";

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
          color: "roseCharte"
        }}/>

      <Parallax
        className={classes.pageHeader}>
        <div className={classes.container}>
          <br/>
          <GridContainer color="black">
            <GridItem xs={4} sm={8} md={8}>
              <h1 className={classes.title}>Prestations</h1>
              <h4 className={classes.subTitle}>
                Retrouvez différentes prestations pour un accompagnement sur mesure.<br/>
                Que vous souhaitiez simplement un tri de dressing à domicile ou un bilan d'image complet, mon accompagnement
                reposera toujours sur la bienveillance et l'écoute de vos besoins.<br/>
                Si vous souhaitez ajuster une formules, n'hésitez pas à me contacter.
              </h4>
            </GridItem>
          </GridContainer>            
        </div>
      </Parallax>

      <SectionFormules />

      <Footer />
    </div>
  );
}
