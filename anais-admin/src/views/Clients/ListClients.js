import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import TableClient from "components/Table/TableClient";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import AlertDialogue from "components/Dialog/AlertDialog"
import Dialog from '@material-ui/core/Dialog';

import ClientsDataService from "../../services/client-services";


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
}));

export default function TableList() {

  const [clients, setClients] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const history = useHistory();

  const [openConfirmation, setOpenConfirmation] = useState(false);


  useEffect(() => {
    retrieveClients();
  }, []);

  const retrieveClients = () => {
    ClientsDataService.getAll()
      .then(response => {
        setClients(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  // Confirmation modal - delete Client
  const handleClickOpenConfirmation = (id) => {
    setOpenConfirmation(true);
    setSelectedId(id)
  };

  const handleCloseYes = () => {
    deleteClient();
    setOpenConfirmation(false);
  };

  const handleCloseNo = () => {
    setOpenConfirmation(false);
  };

  const deleteClient = () => {
    ClientsDataService.remove(selectedId)
      .then(response => {
        console.log(response.data);
        retrieveClients();
      })
      .catch(e => {
        console.log(e);
      });
  }
  // End Confirmation modal - delete Client

  const goToCreateClient = (idClient) => {
    setSelectedId(idClient)
    let path = "/admin/creer-client"
    history.push({
      pathname: path,
      state: { idClient: idClient }
    })
  };


  const classes = useStyles();


  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Clients</h4>
            <p className={classes.cardCategoryWhite}>
              Ici tu peux gérer tous les Clients
            </p>

          </CardHeader>
          <CardBody>
           
            <TableClient
              tableHeaderColor="primary"
              tableHead={["Nom", "Prenom", "Telephone", "email", "Notes", "Actions"]}
              tableData={clients}
              deleteClient={handleClickOpenConfirmation}
              detailClient={goToCreateClient}
            />
          </CardBody>

          <CardFooter>
            <Button color="primary" onClick={e => goToCreateClient(null)}>Nouveau client</Button>
          </CardFooter>
        </Card>
      </GridItem>


      <Dialog
        open={openConfirmation}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AlertDialogue
          handleCloseYes={handleCloseYes}
          handleCloseNo={handleCloseNo}
          title="ATTENTION"
          text="Es-tu sûre de vouloir supprimer ce client ?"
        />
      </Dialog>

    </GridContainer>
  );
}
