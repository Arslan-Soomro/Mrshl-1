import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface props {
    opener : React.ReactElement,
    title: string,
    description?: string,
    label: string,
    btnText: string,
    btnAction: (input: string | undefined) => void,
}

const FormDialog = ({ opener, title, description, label, btnText, btnAction } : props) => {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    {React.cloneElement(opener, {onClick: handleClickOpen})}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
              {description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={label}
            fullWidth
            variant="standard"
            inputRef={inputRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => {btnAction(inputRef?.current?.value); handleClose()}}>{btnText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
