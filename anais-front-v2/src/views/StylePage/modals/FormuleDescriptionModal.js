import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
// core components
import Button from "components/CustomButtons/Button.js";

import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.js";
import popoverStyles from "assets/jss/material-kit-pro-react/popoverStyles.js";
import tooltipsStyle from "assets/jss/material-kit-pro-react/tooltipsStyle.js";
import productStyle from "assets/jss/material-kit-pro-react/views/productStyle.js";


// images
import product1 from "assets/img/examples/product1.jpg";
import product2 from "assets/img/examples/product2.jpg";
import product3 from "assets/img/examples/product3.jpg";
import product4 from "assets/img/examples/product4.jpg";

import ImageGallery from "react-image-gallery";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Accordion from "components/Accordion/Accordion.js";

import Grid from "@material-ui/core/Grid";

const style = theme => ({
    ...modalStyle(theme),
    ...popoverStyles,
    ...tooltipsStyle,
    ...productStyle
});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function ExampleTooltipsPopovers(props) {

    const images = [
        {
            original: product3,
            thumbnail: product3
        },
        {
            original: product4,
            thumbnail: product4
        },
        {
            original: product1,
            thumbnail: product1
        },
        {
            original: product2,
            thumbnail: product2
        }
    ];

    const { formule } = props;

    // const [anchorElLeft, setAnchorElLeft] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();
    return (
        <div>
            <Grid container
                direction="column"
                alignItems="center"
                justify="center">
                <Grid item>
                    <Button style={{ backgroundColor: 'transparent', color: 'black' }} onClick={() => setOpenModal(true)}>
                        Détails
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                open={openModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpenModal(false)}
                aria-labelledby="large-modal-slide-title"
                aria-describedby="large-modal-slide-description"
            >

                <DialogContent>
                    <GridContainer>
                        <GridItem md={6} sm={6}>
                            <ImageGallery
                                showFullscreenButton={false}
                                showPlayButton={false}
                                startIndex={3}
                                items={images}
                                showThumbnails={true}
                                renderLeftNav={(onClick, disabled) => {
                                    return (
                                        <button
                                            className='image-gallery-left-nav'
                                            disabled={disabled}
                                            onClick={onClick}
                                        />
                                    );
                                }}
                                renderRightNav={(onClick, disabled) => {
                                    return (
                                        <button
                                            className='image-gallery-right-nav'
                                            disabled={disabled}
                                            onClick={onClick}
                                        />
                                    );
                                }}
                            />
                        </GridItem>
                        <GridItem md={6} sm={6}>
                            <h2 className={classes.title}>{formule.libelle}</h2>
                            <h3 className={classes.mainPrice}>{formule.tarif}€</h3>
                            <Accordion
                                active={0}
                                activeColor="rose"
                                collapses={[
                                    {
                                        title: "Description",
                                        content: (
                                            <p>
                                                {formule.description}
                                            </p>
                                        )
                                    },
                                    {
                                        title: "Prestations comprises",
                                        content: (
                                            <ul>
                                                {formule.prestation.map((prestation, i) => {
                                                    return (<li key={i}>{prestation.libelle}</li>)
                                                })}

                                            </ul>
                                        )
                                    },
                                    {
                                        title: "Avis",
                                        content: (
                                            <div>
                                                <p>"Cette formules est incroyable !"</p>
                                                <p>"J'ai pris confiance en moi"</p>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                            <GridContainer className={classes.pullRight}>
                                <Button round color="rose">
                                    Ajouter au panier &nbsp; <ShoppingCart />
                                </Button>
                            </GridContainer>
                        </GridItem>
                    </GridContainer>
                </DialogContent>
            </Dialog>
        </div>
    );
}
