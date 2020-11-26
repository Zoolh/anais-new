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

import ClientDataService from "../../services/client-services";


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

export default function CreateClient(props) {
  const classes = useStyles();
  const history = useHistory();

  const { idClient } = props;

  const selectedId = props.location.state.idClient;

  const initialClientState = {
    id: null,
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    notes: ""
  };

  const initialAdresseState = {
    id: null,
    num_rue: "",
    nom_rue: "",
    code_postal: "",
    ville: "",
    client_id: ""
  };

  const [client, setClient] = useState(initialClientState)
  const [adresse, setAdresse] = useState(initialAdresseState)
  const [isDisable, setIsDisable] = useState(true)


  useEffect(() => {
    if (selectedId !== null) getClient(selectedId);
    if (selectedId === null) setIsDisable(false);

  }, []);

  const getClient = (id) => {
    console.log(id)
    ClientDataService.get(id)
      .then(response => {
        console.log(response.data)
        setClient({
          id: response.data.id,
          nom: response.data.nom,
          prenom: response.data.prenom,
          telephone: response.data.telephone,
          email: response.data.email,
          notes: response.data.notes
        });
        setAdresse(response.data.client_adresse)

      })
      .catch(e => {
        console.log(e);
      });
  }

  const saveClient = () => {
    var data = {
      nom: client.nom,
      prenom: client.prenom,
      telephone: client.telephone,
      email: client.email,
      notes: client.notes,
      num_rue: adresse.num_rue,
      nom_rue: adresse.nom_rue,
      code_postal: adresse.code_postal,
      ville: adresse.ville,

    };

    ClientDataService.create(data)
      .then(response => {
        cleanInput();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setClient({ ...client, [id]: value });
    setAdresse({ ...adresse, [id]: value });
  };

  const cleanInput = () => {
    setClient(initialClientState)
    setAdresse(initialAdresseState)
  }

  const editClient = () => {
    setIsDisable(false)
  }

  const saveModification = () => {
    ClientDataService.update(client.id, client)
      .then(response => {
        setIsDisable(true)
      })
      .catch(e => {
        console.log(e);
      });
  }

  const backToList = () => {
    let path = "/admin/clients"
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
                (<h4 className={classes.cardTitleWhite}>Nouveau Client</h4>) :
                (<h4 className={classes.cardTitleWhite}>{client.prenom} {client.nom}</h4>)}

            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nom"
                    id="nom"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={client.nom}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Prenom"
                    id="prenom"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={client.prenom}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Telephone"
                    id="telephone"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={client.telephone}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={client.email}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

              </GridContainer>

              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="N° rue"
                    id="num_rue"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={adresse.num_rue}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Voie"
                    id="nom_rue"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={adresse.nom_rue}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={2}>
                  <CustomInput
                    labelText="Code Postal"
                    id="code_postal"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={adresse.code_postal}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Ville"
                    id="ville"
                    formControlProps={{ fullWidth: true }}
                    onChange={handleInputChange}
                    value={adresse.ville}
                    inputProps={{
                      disabled: isDisable
                    }}
                  />
                </GridItem>

              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Notes"
                    id="notes"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                    onChange={handleInputChange}
                    value={client.notes}
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
                  <Button color="primary" onClick={saveClient}>Créer</Button>
                  <Button color="primary" onClick={e => backToList()}>Retour</Button>
                </GridItem>
              </CardFooter>) :
              isDisable === true ? (
                <CardFooter>
                  <GridItem>
                    <Button color="primary" onClick={e => editClient()}>Modifier</Button>
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
