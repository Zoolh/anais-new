import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    const [open, setOpen] = React.useState(false);

    const { handleCloseYes, handleCloseNo, title, text } = props;


    return (
        <div>
            <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {props.text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleCloseNo} color="primary">
                    Non
          </Button>
                <Button onClick={props.handleCloseYes} color="primary" autoFocus>
                    Oui
          </Button>
            </DialogActions>
        </div>
    );
}