/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";

import ContactPicture from "components/Pictures/ContactPicture";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

export default function ContactUsPage({ ...rest }) {
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
        <div className={classes.contactContent }>
          <div className={classes.container}>
            <h2 className={classNames(classes.title, classes.titleCustom)}>Formulaire de contact</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p className={classes.subTitbleCustom}>
                  Vous pouvez me contacter pour toute question ou demande de réservation, je me ferai un plaisir
                  de vous répondre dans les plus brefs délais !
                  <br />
                  <div >
                    Vous pouvez également me contacter par téléphone au<br/> <strong>06 95 19 99 84</strong>
                  </div>
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Nom Prénom"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Adresse Mail"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Téléphone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <CustomInput
                    labelText="Votre message"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button color="roseCharte" round>
                      Envoyer
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={4} sm={4} className={classes.mlAuto}>    
                        <ContactPicture />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
