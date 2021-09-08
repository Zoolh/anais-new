/*eslint-disable*/
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component used to create nice image meadia player
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Accordion from "components/Accordion/Accordion.js";

import formulesStyle from "assets/jss/material-kit-pro-react/views/faqStyle.js";


const useStyles = makeStyles(formulesStyle
);

export default function SectionFormules() {


  const classes = useStyles();


  return (
    <div >
      <div className={classNames(classes.section)}>
        <div className={classes.container}>
          <div className={classes.relatedProducts}>
            <GridContainer className={classes.formulesContainer}>

              <GridItem sm={12} md={12} lg={12} >
                <Card product className={classes.formuleCard}>
                  <CardBody>
                    <h6
                      className={classNames(
                        classes.cardCategory,
                        classes.textRose
                      )}>
                    </h6>
                    <h4 className={classes.cardTitle}>Questions Générales</h4>

                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <Accordion
                        active={0}
                        activeColor="rose"
                        collapses={[
                          {
                            title: <h4 className={classes.texteQuestions}>Pourquoi faire appel à une conseillère en image ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                A la différence du relooking qui désigne le changement ponctuel d’une personne en fonction
                                d’une tendance ou d’un évènement, le Conseil en Image représente l'évolution de l'image personnelle
                                et/ou professionnelle d'une personne avec un processus de formation adapté.
                                Le conseil en image consiste à valoriser le capital image d’une personne en tenant compte
                                de sa personnalité et de son environnement. Grâce à des techniques fondées sur la colorimétrie,
                                la morphologie, le style vestimentaire, la coiffure, la communication verbale et non verbale,
                                vous devenez autonome dans la gestion de l’image que vous souhaitez véhiculer.

                              </p>

                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Quand faire appel à une conseillère en image ? </h4>,
                            content:
                              <p className={classes.texteReponses}>
                                L’envie de changement et d’évolution peut survenir après une évolution professionnelle, une maternité,
                                une rupture, un accident de la vie ou tout simplement une envie de renouveau.<br /><br />
                                RESULTATS : cette expérience donne un nouveau regard sur soi-même, permet de gagner en assurance et
                                en confiance en soi, afin de révéler son potentiel tant sur le plan personnel que professionnel.
                              </p>

                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Qu’est ce que la colorimétrie ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                Pour connaitre la colorimétrie d’une personne, on étudie la palette de couleurs qui lui va en fonction
                                de son harmonie dite “naturelle”, autrement dit : sa carnation naturelle de peau.
                                L’intérêt d’étudier votre colorimétrie est de vous aider à vous mettre en valeur et à avoir toujours
                                bonne mine en choisissant les bonnes couleurs pour vos vêtements, accessoires, et votre maquillage.
                                <br /><br />
                                J’utilise la méthode du Drapping qui est la plus aboutie et la plus appliquée aujourd’hui dans le métier
                                du conseil en image.
                                <br /><br />
                                Elle fonctionne selon le même principe d’un bon ou d’un mauvais éclairage en photographie.
                                Quand certaines couleurs creusent le visage, d’autres au contraire le mettent en valeur.
                                <br /><br />
                                Ainsi, selon la pigmentation de votre peau, la couleur de vos yeux et celle
                                de vos cheveux, vous réagissez à une gamme spécifique de couleurs qui vous mettent en valeur.
                              </p>
                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Peut-on régler une prestation en plusieurs fois ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                Vous pouvez régler une prestation en trois fois si besoin. 
                                Il suffit de me l’indiquer lors de la prise de contact ou directement sur le formulaire.
                                <br/><br/>
                                Je vous expliquerai en détail comment procéder.
                              </p>
                          }
                        ]}
                      />
                    </GridItem>

                    <h4 className={classes.cardTitle}>50 minutes de Mode via Zoom</h4>

                    <GridItem xs={12} sm={12} md={12} lg={12}>
                      <Accordion
                        active={0}
                        activeColor="rose"
                        collapses={[
                          {
                            title: <h4 className={classes.texteQuestions}>Comment faire pour réserver ? </h4>,
                            content:
                              <p className={classes.texteReponses}>Pour réserver la formule 50 minutes de Mode, il vous suffit de vous rendre dans la rubrique contact et de sélectionner
                                dans la liste déroulante, « réservation 50 minutes de mode » sans oublier de renseigner vos coordonnées et la date
                                et l’heure souhaitées.<br />
                                Je vous contacterai directement pour vous confirmer le rendez-vous.
                              </p>
                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Que dois-je préparer ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                Vous n’avez rien de spécial à préparer.
                                Il faut que vous ayez en tête ou sur un carnet (pour être certaine de ne rien oublier)
                                toutes vos questions et vos objectifs pour ces 50 minutes.<br />
                                Idéalement, que vous soyez habillée de la façon la plus représentative de votre style vestimentaire de tous les jours afin que je puisse me faire une idée.
                              </p>
                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Comment se déroule une session ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                1.	Vous me faites une visite rapide de votre garde-robe pour que je me familiarise avec votre style.
                                (Vous n’avez pas besoin de la ranger ou d’acheter un portant).<br /><br />
                                2. Vous me montrez des articles que vous n’arrivez pas à associer.
                                Je vous aiderai à les réintégrer dans votre garde-robe.
                                Vous pouvez également venir avec une liste de questions, ou me poser des questions pour un événement particulier.
                                Je peux également vous proposer des tenues pour le travail, de week-end, de sorties afin de vous
                                faire gagner du temps.<br /><br />
                                3. Je vous propose également des techniques pour la réalisation d’un maquillage naturel de jour
                              </p>

                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Comment faire si je veux réserver plus de 50 minutes ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                Il suffit simplement de le notifier dans les commentaires, quand vous remplirez la rubrique contact
                                avec vos coordonnées et le créneau horaire désiré.
                              </p>


                          },
                          {
                            title: <h4 className={classes.texteQuestions}>Comment s’effectue le paiement ?</h4>,
                            content:
                              <p className={classes.texteReponses}>
                                Le paiement s’effectue par virement ou par chèque. Il vient confirmer le rendez-vous.
                              </p>
                          },
                        ]}
                      />
                    </GridItem>

                  </CardBody>
                </Card>
              </GridItem>



            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
