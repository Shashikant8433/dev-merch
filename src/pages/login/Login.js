import React from "react";
import { Link } from "react-router-dom";

import {
  Box,
  TextField,
  Typography,
  OutlinedInput,
  InputLabel,
  IconButton,
  InputAdornment,
  FormControl,
  Button,
} from "@mui/material";

import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from "@mui/icons-material";

function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", margin: "8px auto" },
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.2)",
          margin: "1rem",
        }}
        noValidate
        autoComplete="off"
        onClick={() => alert("hello")}
      >
        <Typography variant="h5">Login</Typography>

        <TextField
          required
          label="Email"
          variant="outlined"
          inputProps={{ type: "email" }}
        />
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          required={true}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {/* <OutlinedInput color="primary" inputProps={{ type: "submit" }} /> */}
        <Button variant="contained">Submit</Button>
        <Typography variant="caption" display="block">
          <Link to="/">forgot password</Link>
        </Typography>
      </Box>
      <Typography style={{ padding: ".2rem" }} variant="caption">
        Need an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </div>
  );
}

export default Login;
