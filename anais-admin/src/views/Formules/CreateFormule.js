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
import InputLabel from "@material-ui/core/InputLabel";
import TimeConverter from "components/DateTime/TimeConverter"

import FormuleDataService from "../../services/formule-services";
import PrestationDataService from "../../services/prestation-services";

import Tasks from "components/Tasks/TasksPrestations";

const useStyles = makeStyles((theme) => ({
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
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function CreateFormule(props) {
  const classes = useStyles();
  const history = useHistory();

  const selectedId = props.location.state.idFormule;
  const initialFormuleState = {
    id: null,
    libelle: "",
    ordreSortie: null,
    description: "",
    tarif: null,
    duree: null,
    sectionAsset: null,
    imagePrincipale: null,
    image2: null,

  };

  const [formule, setFormule] = useState(initialFormuleState)
  const [isDisable, setIsDisable] = useState(true)
  const [prestations, setPrestations] = useState([])

  const [prestationsSelected, setPrestationsSelected] = useState([])

  const [suggestedPrice, setSuggestedPrice] = useState()
  const [totalDuration, setTotalDuration] = useState()


  useEffect(() => {
    if (selectedId !== null) getFormule(selectedId);
    if (selectedId === null) setIsDisable(false);
    getAllPrestations();
    getSuggestedPrice();
  }, []);

  useEffect(() => {
    getSuggestedPrice();
    getTotalDuration();
  }, [prestationsSelected])


  const addSelectedPrestation = (prestationToAdd) => {
    setPrestationsSelected([...prestationsSelected, prestationToAdd])
  }

  const removeSelectedPrestation = (prestationToRemove) => {
    setPrestationsSelected(prestationsSelected.filter(prestation => prestation.id !== prestationToRemove.id));
  }

  const getAllPrestations = () => {
    PrestationDataService.getAll()
      .then(response => {
        setPrestations(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getFormule = (id) => {
    FormuleDataService.get(id)
      .then(response => {
        setFormule({
          id: response.data.id,
          libelle: response.data.libelle,
          ordreSortie: response.data.ordreSortie,
          description: response.data.description,
          tarif: response.data.tarif,
          duree: response.data.duree,
          sectionAsset: response.data.sectionAsset,
          imagePrincipale: response.data.imagePrincipale,
          image2: response.data.image2,
        });
        setPrestationsSelected(response.data.prestation)
      })
      .catch(e => {
        console.log(e);
      });
  }

  const saveFormule = () => {
    var data = {
      libelle: formule.libelle,
      ordreSortie:formule.ordreSortie,
      description: formule.description,
      tarif: formule.tarif,
      duree: formule.duree,
      sectionAsset: formule.sectionAsset,
      imagePrincipale: formule.imagePrincipale,
      image2: formule.image2,
    };

    FormuleDataService.create(data)
      .then(response => {
        setFormule({
          id: response.data.id,
          libelle: response.data.libelle,
          ordreSortie:response.data.ordreSortie,
          description: response.data.description,
          tarif: response.data.tarif,
          duree: response.data.duree,
          sectionAsset: response.data.sectionAsset,
          imagePrincipale: response.data.imagePrincipale,
          image2: response.data.image2,
        });
        var idFormule = response.data.id
        prestationsSelected.map((prestation, key) => {
          var dataBis = {
            formule_id: idFormule,
            prestation_id: prestation.id
          }
          FormuleDataService.addPresta(dataBis)
        })

        cleanInput();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setFormule({ ...formule, [id]: value });
  };

  const cleanInput = () => {
    setFormule(initialFormuleState)
  }

  const editFormule = () => {
    setIsDisable(false)
  }

  const saveModification = () => {
    FormuleDataService.update(formule.id, formule)
      .then(response => {
        // Remove presta for Formule
        FormuleDataService.removePresta(formule.id)

        if (prestationsSelected.length > 0) {
          // Add new presta
          prestationsSelected.map((prestation, key) => {
            var data = {
              formule_id: formule.id,
              prestation_id: prestation.id
            }
            FormuleDataService.addPresta(data)
          })
        }
        setIsDisable(true)
      })
      .catch(e => {
        console.log(e);
      });
  }

  const backToList = () => {
    let path = "/admin/formules"
    history.push({
      pathname: path,
    })
  }

  const getSuggestedPrice = () => {
    setSuggestedPrice(0)
    var calcul = 0
    prestationsSelected.map((prestation, key) => {
      calcul += prestation.tarif
    })
    setSuggestedPrice(calcul)
  }

  const getTotalDuration = () => {
    setTotalDuration(0)
    var calcul = 0
    prestationsSelected.map((prestation, key) => {
      calcul += prestation.duree
    })
    setTotalDuration(calcul)
  }


  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              {selectedId === null ?
                (<h4 className={classes.cardTitleWhite}>Nouvelle Formule</h4>) :
                (<h4 className={classes.cardTitleWhite}>Fiche de la formule {formule.libelle}</h4>)}

            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Libelle"
                    id="libelle"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.libelle}
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
                    value={formule.tarif}
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
                    value={formule.duree}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Ordre Sortie"
                    id="ordreSortie"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.ordreSortie}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel style={{ color: "#AAAAAA" }}>Prestations ({prestationsSelected.length}) :
                    {prestationsSelected.map((prestation, key) => {
                      return " " + prestation.libelle + " / "
                    })}
                  </InputLabel>
                  <br />
                  <InputLabel style={{ color: "#AAAAAA" }}>Total prix suggéré : {suggestedPrice}€</InputLabel>
                </GridItem>
              </GridContainer>
              <GridContainer>
                
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Description"
                    id="description"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.description}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="sous dossier image"
                    id="sectionAsset"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.sectionAsset}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="image principale"
                    id="imagePrincipale"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.imagePrincipale}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="image 2"
                    id="image2"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={formule.image2}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
              </GridContainer>
              <br />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  {isDisable === false ? (<div>
                    <InputLabel style={{ color: "#AAAAAA" }}>Prestations :</InputLabel>
                    <Tasks
                      prestations={prestations}
                      prestationsSelected={prestationsSelected}
                      addSelectedPrestation={addSelectedPrestation}
                      removeSelectedPrestation={removeSelectedPrestation}
                    /> </div>) : <p></p>}
                </GridItem>
              </GridContainer>
            </CardBody>
            {selectedId === null ?
              (<CardFooter>
                <GridItem>
                  <Button color="primary" onClick={saveFormule}>Créer</Button>
                  <Button color="primary" onClick={e => backToList()}>Retour</Button>
                </GridItem>
              </CardFooter>) :
              isDisable === true ? (
                <CardFooter>
                  <GridItem>
                    <Button color="primary" onClick={e => editFormule()}>Modifier</Button>
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
