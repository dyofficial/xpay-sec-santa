import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import trees from "./images/introduction/tree2.svg";
import logo from "./images/introduction/logo.png";
import { CssBaseline, Typography } from "@mui/material";

const LoginForm = () => {
  const history = useHistory();
  const [adminUser, setAdminUser] = useState({
    email: "admin@admin.com",
    password: "admin123",
  });

  const [user, setUser] = useState({ name: "", email: "" });
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [error, setError] = useState("Please use your expressPay email");

  useEffect(() => {
    const url = "https://dyofficial.github.io/Data/ep.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        // console.log(json);
        setAdminUser(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const Login = (details) => {
    console.log(details);
    let emailArray = adminUser.map((staff) => staff.email);
    if (emailArray.includes(details.email)) {
      setUser({ name: details.name, email: details.email });
      history.push("/welcome");
    } else {
      setEmailError(true);
      setError("Input correct email");
      console.log("object");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("success");
    Login(details);
  };
  return (
    <div>
      <CssBaseline />
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-tree">
        <img src={trees} alt="tree" />
      </div>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Titania", color: "#0F2F4D" }}
        align="center"
        className="titania"
        marginBottom="1em"
      >
        Log in
      </Typography>
      <form
        noValidate
        autoComplete="on"
        onSubmit={submitHandler}
        className="form"
      >
        <TextField
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
          variant="outlined"
          label="Full Name"
          color="primary"
          fullWidth
          required
          // error={nameError}
        ></TextField>
        <TextField
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
          variant="outlined"
          label="Email"
          color="primary"
          fullWidth
          required
          helperText={error}
          margin="dense"
          error={emailError}
        ></TextField>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#1A5286",
            height: "50pt",
            fontWeight: "bolder",
          }}
          color="primary"
          size="large"
          fullWidth
          sx={{
            marginTop: "10vh",
            boxShadow: "0px 4px #10385D",
            borderRadius: "5px 5px",
          }}
          onClick={submitHandler}
          margin="dense"
        >
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
