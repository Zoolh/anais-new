/*eslint-disable*/
import React, { useState, useEffect } from "react";
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
// import Button from "components/CustomButtons/Button.js";
import Button from "@material-ui/core/Button";
import Footer from "components/Footer/Footer.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ContactPicture from "components/Pictures/ContactPicture";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.js";

const useStyles = makeStyles(contactUsStyle);

import http from "../../http-common";
import { red } from "@material-ui/core/colors";
import { element } from "prop-types";


export default React.memo(function ContactUsPage({ ...rest }) {

  const [open, setOpen] = React.useState(false);

  const [erreurNom, setErreurNom] = useState("hidden");
  const [erreurMail, setErreurMail] = useState("hidden");
  const [erreurSujet, setErreurSujet] = useState("hidden");
  const [erreurMessage, setErreurMessage] = useState("hidden");

  const [isEnvoyable, setIsEnvoyable] = useState();

  const emailRegex = /\S+@\S+\.\S+/;

  // Implémentation du mail
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [subject, setSubject] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    if (isEnvoyable) {
      http.post("/send", JSON.stringify({ name, email, subject, message, phone }))
        .then(data => {
          setMessage('')
          setName('')
          setSubject('')
          setEmail('')
          setPhone('')
          setErreurMessage("hidden")
          setErreurSujet("hidden")
          setErreurMail("hidden")
          setErreurNom("hidden")
        })
        .then(() => handleClickOpen())
        .catch(err => { console.log(err) })
    }
  }, [isEnvoyable]);

  const PostData = () => {
    // Reset des champs à la validation
    setErreurMessage("hidden")
    setErreurSujet("hidden")
    setErreurMail("hidden")
    setErreurNom("hidden")
    // Tester si les champs obligatoires ne sont pas vides
    if (name == null || name == "") {
      setErreurNom("visible")
    }
    if (email == null || email == "" || !emailRegex.test(email)) {
      setErreurMail("visible")
    }
    if (subject == null || subject == "") {
      setErreurSujet("visible")
    }
    if (message == null || message == "") {
      setErreurMessage("visible")
    }
    if (message != "" && subject != "" && email != "" && emailRegex.test(email) && name != "") {
      setIsEnvoyable(true)
    }
  }
  // Fin implémentation du mail

  // Validator validator
  const [errors, setErrors] = useState({});

  // Gestion pop-up confirmation
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // Fin gestion pop-up confirmation

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

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
            <h2 className={classNames(classes.title, classes.titleCustom)}>Formulaire de contact</h2>
            <GridContainer>
              <GridItem md={6} sm={6}>
                <p className={classes.subTitbleCustom}>
                  Vous pouvez me contacter pour toute question ou demande de réservation, je me ferai un plaisir
                  de vous répondre dans les plus brefs délais !
                  <br />
                  Vous pouvez également me contacter par téléphone au<br /> <strong>06 95 19 99 84</strong>
                  <br />
                </p>
                <form>

                  <CustomInput
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    labelText="Nom Prénom *"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <p style={{ visibility: erreurNom, color: 'red' }}>Veuillez renseigner votre nom ou prénom</p>

                  <CustomInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelText="Adresse Mail *"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <p style={{ visibility: erreurMail, color: 'red' }}>Veuillez renseigner un email valide</p>

                  <CustomInput
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    labelText="Téléphone"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />

                  <CustomInput
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    labelText="Sujet*"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  <p style={{ visibility: erreurSujet, color: 'red' }}>Veuillez renseigner un sujet</p>

                  <CustomInput
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    labelText="Votre message*"
                    id="float"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6
                    }}
                  />
                  <p style={{ visibility: erreurMessage, color: 'red' }}>Le corps du message est vide</p>
                  <div className={classes.textCenter}>

                    <Button
                      onClick={() => PostData()}
                      color="roseCharte"
                      round >
                      Envoyer
                    </Button>

                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description">
                      <DialogTitle id="alert-dialog-title">Merci !</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Votre message a bien été envoyé !
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose} color="primary" autoFocus>
                          Fermer
                        </Button>
                      </DialogActions>
                    </Dialog>


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
})
