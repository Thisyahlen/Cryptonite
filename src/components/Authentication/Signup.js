//---------------------------------------------------------------------------
//imports
import { Box, Button, TextField } from "@material-ui/core";
import { useState } from "react";
import { CryptoState } from "../../CryptoContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

//---------------------------------------------------------------------------
//Sign up component structure
const Signup = ({ handleClose }) => {
  //Variables and States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAlert } = CryptoState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: "success",
      });

      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        fontFamily: "antonio",
      }}
    >
      <TextField
        variant="filled"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            padding: "0px 20px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px 2px #aaa",
          borderRadius: 40,
          padding: "0px 25px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
      />

      <TextField
        variant="filled"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            padding: "0px 20px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px 2px #aaa",
          borderRadius: 40,
          padding: "0px 25px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
      />

      <TextField
        variant="filled"
        label="Confirm Password"
        type="password"
        id="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
            padding: "0px 20px",
          },
        }}
        style={{
          fontFamily: "antonio",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 4px 2px #aaa",
          borderRadius: 40,
          padding: "0px 25px",
        }}
        InputProps={{
          style: {
            color: "black",
            fontFamily: "antonio",
          },
        }}
      />

      <Button
        variant="contained"
        size="large"
        style={{
          backgroundColor: "#174f1a",
          color: "white",
          fontSize: 20,
          fontWeight: 600,
          fontFamily: "antonio",
          borderRadius: 30,
        }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

//---------------------------------------------------------------------------
//export
export default Signup;
