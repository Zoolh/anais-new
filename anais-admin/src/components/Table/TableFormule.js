import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

// Own Components
import TimeConverter from "../DateTime/TimeConverter"

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, deletePrestation, detailPrestation } = props;

  const pointer = { cursor: 'pointer' };

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData.map((prop, key) => {
            const prestations = prop.prestation
            return (
              <TableRow key={prop.id} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell}>
                  {prop.libelle}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.description}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.tarif} €
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <TimeConverter
                    key={prop.duree}
                    timeToConvert={prop.duree} >
                  </TimeConverter>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prestations.map((prop, key) => {
                    return <ul key={key}>
                      <li>{prop.libelle}</li>
                    </ul>
                  })}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <DeleteIcon onClick={e => props.deleteFormule(prop.id)} style={pointer}></DeleteIcon>
                  <VisibilityIcon onClick={e => props.detailFormule(prop.id)} style={pointer}></VisibilityIcon>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
};
