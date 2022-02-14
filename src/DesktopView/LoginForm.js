import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import { makeStyles } from "@material-ui/core";
import Snowfall from "../MobileView/Snowfall";
import GoogleOauth from "./GoogleOauth";

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
        <GoogleOauth />
      </Paper>
    </Box>
  );
};

export default LoginForm;
