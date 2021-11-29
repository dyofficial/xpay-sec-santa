import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import santa from "./Images/santa.svg";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import Snowfall from "../MobileView/Snowfall";

const Starter = () => {
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
          <img src={santa} alt="santa" className="header-santa" />
          <img src={trees} alt="trees" className="header-trees" />
        </div>
        <h4 className="sec-santa">Secret Santa</h4>
        <p className="at-text">
          At expressPay, Secret Santa is all about giving gifts to our
          colleagues. We each get to pick out one person.{" "}
          <span>
            The fun part is the secret, you don’t get to know who picked you,
            but only know who you picked.
          </span>
        </p>
        <Link to="/loginform" className="button-container">
          <Button
            variant="contained"
            size="large"
            fullWidth
            sx={{
              height: "65px",
              backgroundColor: "#174876",
              borderRadius: "5px 5px 5px 5px",
              fontWeight: "bold",
              fontFamily: "Gotham",
              fontSize: "16px",
              marginTop: "50px",
              boxShadow: "0px 4px #10385D",
            }}
          >
            Let’s Get Started!
          </Button>
        </Link>
      </Paper>
    </Box>
  );
};

export default Starter;
