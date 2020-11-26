import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
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

import CustomInput from "components/CustomInput/CustomInput.js";




const useStyles = makeStyles(styles);

export default function CustomTable(props) {
  const classes = useStyles();
  const { tableHead, tableData, tableHeaderColor, deleteClient, detailClient } = props;

  const pointer = { cursor: 'pointer' };

  const [searchTerm, setSearchTerm] = useState("")


  const results = !searchTerm ?
    tableData
    : tableData.filter(client =>
      client.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.prenom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())
    );



  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className={classes.tableResponsive}>

      <div >
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Rerchercher",
            inputProps: {
              "aria-label": "Search"
            }
          }}
          value={searchTerm}
          onChange={handleChange}
        />
      </div>


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
          {results.map((prop, key) => {
            return (
              <TableRow key={prop.id} className={classes.tableBodyRow}>
                <TableCell className={classes.tableCell}>
                  {prop.nom}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.prenom}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.telephone}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.email}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {prop.notes}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  <DeleteIcon onClick={e => props.deleteClient(prop.id)} style={pointer}></DeleteIcon>
                  <VisibilityIcon onClick={e => props.detailClient(prop.id)} style={pointer}></VisibilityIcon>
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
