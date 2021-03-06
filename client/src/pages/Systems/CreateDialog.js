import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

class CreateDialog extends Component {
  render() {
    const { open, type, data, handleClose, submit, handleInputChange } = this.props;
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type === "create" ? "Add" : "Edit"} System</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="SystemName"
            name="systemName"
            value={data.systemName}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default CreateDialog;
