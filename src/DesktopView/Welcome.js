import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import ava from "./Images/groupava.png";
import Snowfall from "../MobileView/Snowfall";

const Welcome = (user) => {
  // const [user, setUser] = useState({ name: "user", email: "" });
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
        <p className="hello">👋 Hello {user.name}</p>
        <h4 className="pac">Pick a colleague</h4>
        <p className="tap-text">
          Tap on the button below to find out who you’re spoiling this
          Christmas!
        </p>
        <div className="button-container">
          <Button
            variant="contained"
            size="large"
            fullWidth
            href="/loading"
            sx={{
              height: "65px",
              backgroundColor: "#174876",
              borderRadius: "5px 5px 5px 5px",
              fontWeight: "bold",
              fontFamily: "Gotham",
              fontSize: "16px",
              marginTop: "70px",
              boxShadow: "0px 4px #10385D",
            }}
          >
            Pick
          </Button>
        </div>
        <div className="ava">
          <img src={ava} alt="avatar" />
        </div>
      </Paper>
    </Box>
  );
};

export default Welcome;
