import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function SignUp() {
  const [values, setValues] = React.useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = (prop) => {
    setValues({
      ...values,
      [prop]: !values[prop],
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
      >
        <Typography variant="h5">SignUp</Typography>
        <TextField
          required
          label="Name"
          variant="outlined"
          inputProps={{ type: "text" }}
        />
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
                  onClick={() => handleClickShowPassword("showPassword")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          required={true}
        >
          <InputLabel htmlFor="outlined-adornment-password1">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password1"
            type={values.showConfirmPassword ? "text" : "password"}
            value={values.confirmPassword}
            onChange={handleChange("confirmPassword")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => handleClickShowPassword("showConfirmPassword")}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showConfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>

        <Button variant="contained">Submit</Button>
        <Typography variant="caption" display="block">
          <Link to="/">forgot password</Link>
        </Typography>
      </Box>
      <Typography style={{ padding: ".2rem" }} variant="caption">
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </div>
  );
}

export default SignUp;
