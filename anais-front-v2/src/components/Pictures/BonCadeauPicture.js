import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import typographyStyle from "assets/jss/material-kit-pro-react/views/componentsSections/typographyStyle.js";

// Images
// import portraitAnais from 'assets/img/landing-page/anais-portrait-resize.jpg';
// import portraitAnais from 'assets/img/landing-page/anais-full.jpg';
import portraitAnais from 'assets/img/landing-page/boncadeau.png';

const useStyles = makeStyles(typographyStyle);

export default function BonCadeauPicture() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="images">
              <img
                src={portraitAnais}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgFluid +
                  " " +
                  classes.imgRounded
                }
              />
        </div>
        <div className={classes.space50} />
      </div>
    </div>
  );
}
