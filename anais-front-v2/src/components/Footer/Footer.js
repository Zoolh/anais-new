/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-pro-react/components/footerStyle.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

const styles = theme => ({
  ...landingPageStyle,
  ...footerStyle
});

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const { children, content, theme, big, className } = props;
  const classes = useStyles();
  const themeType =
    theme === "transparent" || theme == undefined ? false : true;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes[theme]]: themeType,
    [classes.big]: big || children !== undefined,
    [className]: className !== undefined
  });
  const aClasses = classNames({
    [classes.a]: true
  });

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        {children !== undefined ? (
          <div>
            <div className={classes.content}>{children}</div>
            <hr />
          </div>
        ) : (
          " "
        )}
         <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#"
                    target="_blank"
                    className={classes.block}
                  >
                    A propos
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="#" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; Nicolas
            </div>
          </div>
        <div className={classes.clearFix} />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  theme: PropTypes.oneOf(["dark", "white", "transparent"]),
  big: PropTypes.bool,
  content: PropTypes.node
};
