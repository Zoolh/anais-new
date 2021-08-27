import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// core components
import Button from "components/CustomButtons/Button.js";

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.js";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import formulesStyle from "assets/jss/material-kit-pro-react/views/formulesStyle.js";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";

const style = theme => ({
    ...modalStyle(theme),
    ...popoverStyles,
    ...tooltipsStyle,
    ...formulesStyle
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ExampleTooltipsPopovers(props) {

    const { formule } = props;

    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();

    const getImage = (formule) => {
        try {
            return (      
                    <img
                        src={require("assets/img/assets-anais/formules/".concat(formule.sectionAsset)
                            .concat("/")
                            .concat(formule.image2)
                            .concat(".jpg"))}
                        alt="..."
                        className={classes.imgRaised + " " + classes.imgFluid + " " + classes.imgDesc}
                    />
            )
        } catch (error) {
            return (
                <img src="" alt="" />
            )
        }
    }

    return (
        <div>
            <Grid container
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item>
                    <Button className={classes.detailsBtn}
                        style={{ backgroundColor: 'transparent', color: 'black' }}
                        onClick={() => setOpenModal(true)}>
                        Détails
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                className={classes.dialogMain}
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenModal(false)}
                classes={{ paper: classes.dialogPaper }}
            >

                <DialogContent xs={12} md={4} sm={4} className={classes.dialogueModal}>
                    <GridContainer>
                        <Hidden xsDown >
                            <GridItem md={4} sm={4} className={classes.imgContainer}>
                            {getImage(formule)}
                            </GridItem>
                        </Hidden>
                        <GridItem md={8} sm={8} className={classes.listePrestaContainer}>
                            <h4 className={classes.sectionTitle}>PRESTATIONS</h4>
                            <ul className={classes.listePresta}>
                                {formule.prestation.sort((a, b) => a.ordreSortie > b.ordreSortie ? 1 : -1)
                                .map((prestation, i) => {
                                    return (<li key={i} className={classes.bullet}>{prestation.libelle}</li>)
                                })}

                            </ul>
                            <h4 className={classes.sectionTitle}>DUREE & TARIF</h4>
                            <p className={classes.description}>
                                Durée : {formule.duree} <br />
                                Tarif : {formule.tarif}€
                            </p>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </div>
    );
}
