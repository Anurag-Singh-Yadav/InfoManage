import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import P_FORM from "./P_FORM";

function AlertDialog({
  open,
  setOpen,
  setFormData,
  handleUpdatePerson,
  formData,
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
            <P_FORM
              setOpen={setOpen}
              formData={formData}
              isUpdate={true}
              id={formData.id}
              handleUpdatePerson={handleUpdatePerson}
              setFormData={setFormData}
            />
          </DialogContentText>
        </DialogContent>

        {/* <DialogActions>
          <div className="flex justify-between items-center w-[50%] mx-auto">
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={(e) => {
                handleUpdatePerson(formData.id, formData);
                handleClose();
              }}
              autoFocus
            >
              Update
            </Button>
          </div>
        </DialogActions> */}
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
}) {
  return (
    <AlertDialog
      open={open}
      handleUpdatePerson={handleUpdatePerson}
      setOpen={setOpen}
      formData={formData}
      setFormData={setFormData}
    />
  );
}

export default DialogBox;
