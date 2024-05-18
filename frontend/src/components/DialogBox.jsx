import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import PersonForm from "./PersonForm";

function AlertDialog({
  open,
  setOpen,
  setFormData,
  handleUpdatePerson,
  formData,
  error,
  setError
}) {
  const handleClose = () => {
    setOpen(false);
  };
  let maxWidth = "md";
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={maxWidth}
        fullWidth
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <PersonForm
              setOpen={setOpen}
              error={error}
              setError={setError}
              formData={formData}
              isUpdate={true}
              id={formData.id}
              handleUpdatePerson={handleUpdatePerson}
              setFormData={setFormData}
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

function DialogBox({
  open,
  setOpen,
  handleUpdatePerson,
  formData,
  setFormData,
  error,
  setError
}) {
  return (
    <AlertDialog
      open={open}
      error={error}
      setError={setError}
      handleUpdatePerson={handleUpdatePerson}
      setOpen={setOpen}
      formData={formData}
      setFormData={setFormData}
    />
  );
}

export default DialogBox;
