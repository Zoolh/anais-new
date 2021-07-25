import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import FormatQuote from "@material-ui/icons/FormatQuote";
import Star from "@material-ui/icons/Star";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Muted from "components/Typography/Muted.js";
import Warning from "components/Typography/Warning.js";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/temoignagesStyle";

import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";

const useStyles = makeStyles(testimonialsStyle);

export default function SectionTestimonials({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className="cd-section" {...rest}>

      <div
        className={
          classes.testimonials +
          " " +
          classes.testimonial2

        }>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        Merci beaucoup c'est fantastique !
                      </h5>
                      <h4 className={classes.cardTitle}>Annie</h4>
                      <Muted>
                        <h6>Formatrice réseaux & télécommuncation</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription}>
                        Je recommande à tous !
                      </h5>
                      <h4 className={classes.cardTitle}>Margaux</h4>
                      <Muted>
                        <h6>Pédiatre</h6>
                      </Muted>
                    </CardBody>
                    <div>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                      <Warning>
                        <Star className={classes.starIcons} />
                      </Warning>
                    </div>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
