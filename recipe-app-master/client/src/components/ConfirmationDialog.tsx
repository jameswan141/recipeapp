import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';
import useStyles from './styles/confirmationDialog';

const ConfirmationDialog: React.FC<ConfirmationDialogInterface> = (props) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleYes = () => {
    axios.delete(`${process.env.REACT_APP_ROOT_URL}recipes/${props.recipeId}`)
    .then((res) => {
      setOpen(false);
      props.getRecipes();
    })
    .catch((err) => {
      console.log("error - ", err)
    });
  };

  return (
    <div id="dialog-container">
    <Button className={classes.deleteButton} variant="contained" color="secondary" onClick={handleClickOpen}>
      DELETE
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
      <DialogActions>
        <Button onClick={handleYes} color="primary">
            YES
        </Button>
        <Button onClick={handleClose} color="secondary" autoFocus>
            NO
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}

export default ConfirmationDialog;