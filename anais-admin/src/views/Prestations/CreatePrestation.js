import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import PrestationDataService from "../../services/prestation-services";


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);

export default function CreatePrestation(props) {
  const classes = useStyles();
  const history = useHistory();

  const { idPresta } = props;

  const selectedId = props.location.state.idPresta;
  const initialPrestationState = {
    id: null,
    libelle: "",
    description: "",
    tarif: null,
    duree: null,
    ordreSortie: null
  };

  const [prestation, setPrestation] = useState(initialPrestationState);
  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    if (selectedId !== null) getPrestation(selectedId);
    if (selectedId === null) setIsDisable(false);
  }, []);


  const getPrestation = (id) => {
    PrestationDataService.get(id)
      .then(response => {
        setPrestation({
          id: response.data.id,
          libelle: response.data.libelle,
          description: response.data.description,
          tarif: response.data.tarif,
          duree: response.data.duree,
          ordreSortie: response.data.ordreSortie
        });
      })
      .catch(e => {
        console.log(e);
      });
  }



  const savePrestation = () => {
    var data = {
      libelle: prestation.libelle,
      description: prestation.description,
      tarif: prestation.tarif,
      duree: prestation.duree,
      ordreSortie: prestation.ordreSortie
    };

    PrestationDataService.create(data)
      .then(response => {
        setPrestation({
          id: response.data.id,
          libelle: response.data.libelle,
          description: response.data.description,
          tarif: response.data.tarif,
          duree: response.data.duree,
          ordreSortie: response.data.ordreSortie
        });
        cleanInput();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setPrestation({ ...prestation, [id]: value });
  };

  const cleanInput = () => {
    setPrestation(initialPrestationState)
  }

  const editPrestation = () => {
    setIsDisable(false)
  }

  const saveModification = () => {
    PrestationDataService.update(prestation.id, prestation)
      .then(response => {
        console.log(response.data);
        setIsDisable(true)
      })
      .catch(e => {
        console.log(e);
      });
  }

  const backToList = () => {
    let path = "/admin/prestations"
    history.push({
      pathname: path,
    })
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              {selectedId === null ?
                (<h4 className={classes.cardTitleWhite}>Nouvelle Prestation</h4>) :
                (<h4 className={classes.cardTitleWhite}>Fiche de la prestation {prestation.libelle}</h4>)}

            </CardHeader>
            <CardBody>
              <GridContainer>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Libelle"
                    id="libelle"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={prestation.libelle}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Ordre sortie"
                    id="ordreSortie"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={prestation.ordreSortie}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Tarif"
                    id="tarif"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={prestation.tarif}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Durée"
                    id="duree"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={prestation.duree}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    onChange={handleInputChange}
                    value={prestation.description}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>

            {selectedId === null ?
              (<CardFooter>
                <GridItem>
                  <Button color="primary" onClick={savePrestation}>Créer</Button>
                  <Button color="primary" onClick={e => backToList()}>Retour</Button>
                </GridItem>
              </CardFooter>) :
              isDisable === true ? (
                <CardFooter>
                  <GridItem>
                    <Button color="primary" onClick={e => editPrestation()}>Modifier</Button>
                    <Button color="primary" onClick={e => backToList()}>Retour</Button>
                  </GridItem>
                </CardFooter>) : (
                  <CardFooter>
                    <GridItem>
                      <Button color="primary" onClick={e => saveModification()}>Sauvegarder</Button>
                      <Button color="primary" onClick={e => backToList()}>Retour</Button>
                    </GridItem>
                  </CardFooter>
                )}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
