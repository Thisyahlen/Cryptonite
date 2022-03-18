//---------------------------------------------------------------------------
//imports
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { CryptoState } from "../CryptoContext";

//---------------------------------------------------------------------------
//Alert component structure
const Alert = () => {
  //Variable and states
  const { alert, setAlert } = CryptoState();

  //Close alert function
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

//---------------------------------------------------------------------------
//export
export default Alert;
