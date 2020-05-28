import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class TaskForm extends Component {
  render() {
    let { open, onClose, classes } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
        <DialogContent>
          <TextField
            id="standard-secondary"
            label="Standard secondary"
            color="secondary"
            className={classes.textField}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
