import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-dashboard-react/components/tasksStyle.js";

const useStyles = makeStyles(styles);

export default function Tasks(props) {
  const classes = useStyles();
  const tableCellClasses = classnames(classes.tableCell);
  const { prestations, prestationsSelected, addSelectedPrestation, removeSelectedPrestation } = props;
  const [checked, setChecked] = useState([]);


  const handleToggle = prestation => {
    const currentIndex = checked.indexOf(prestation);
    const newChecked = [...checked];
    if (!prestationsSelected.some(presta => presta.id === prestation.id)) {
      newChecked.push(prestation);
      addSelectedPrestation(prestation)
    } else {
      newChecked.splice(currentIndex, 1);
      removeSelectedPrestation(prestation)
    }
    setChecked(newChecked);
  };


  return (
    <Table className={classes.table}>
      <TableBody>
        {prestations.map(prestation => (
          <TableRow key={prestation.id} className={classes.tableRow}>
            <TableCell className={tableCellClasses}>
              <Checkbox
                checked={prestationsSelected.some(presta => presta.id === prestation.id)}
                tabIndex={-1}
                onClick={() => handleToggle(prestation)}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.root
                }}
              />
            </TableCell>
            <TableCell className={tableCellClasses}>{prestation.libelle} / {prestation.tarif}€ / {prestation.duree} minutes</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

Tasks.propTypes = {
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node),
  checkedIndexes: PropTypes.array
};
