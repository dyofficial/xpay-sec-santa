import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import santa from "./Images/santa.svg";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import { makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Snowfall from "../MobileView/Snowfall";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
}));

const LoginForm = () => {
  const classes = useStyles();
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
          width: 512,
          height: 750,
        },
      }}
    >
      <Paper elevation={8}>
        <div className="header">
          <Snowfall />
          <img src={logo} alt="logo" className="ep-logo" />
          <img src={trees} alt="trees" className="header-trees" />
        </div>
        <h4 className="log-in">Log In</h4>
        <form
          noValidate
          autoComplete="on"
          onSubmit={submitHandler}
          className="form"
          margin="50px auto"
        >
          <TextField
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
            variant="outlined"
            label="Full Name"
            color="primary"
            fullWidth
            className={classes.field}

            // error={nameError}
          ></TextField>
          <TextField
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
            variant="outlined"
            label="Email"
            color="primary"
            fullWidth
            helperText={error}
            margin="dense"
            error={emailError}
            className={classes.field}

            // className={classes.field}
          ></TextField>
        </form>
        <div className="button-container">
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
            fullWidth
            sx={{
              width: "402px",
              height: "65px",
              backgroundColor: "#174876",
              borderRadius: "5px 5px 5px 5px",
              fontWeight: "bold",
              fontFamily: "Gotham",
              fontSize: "16px",
              //   marginTop: "20px",
              boxShadow: "0px 4px #10385D",
            }}
          >
            Log in
          </Button>
        </div>
      </Paper>
    </Box>
  );
};

export default LoginForm;
