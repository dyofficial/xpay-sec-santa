import Container from "@mui/material/Container";
import { Button, CssBaseline } from "@mui/material";
import logo from "./images/introduction/logo.png";
import santa from "./images/introduction/santa.svg";
import trees from "./images/introduction/tree2.svg";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "100vh",
    backgroundColor: "#216098",
  },
  logo: {
    position: "absolute",
    marginTop: "5vh",
  },
  santa: {
    position: "absolute",
    marginTop: "15vh",
    marginLeft: "500px",
  },
  trees: {
    position: "absolute",
    marginTop: "30vh",
  },
}));

const Starter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.logo} align="center">
        <img src={logo} alt="logo" />
      </Container>
      <Container className={classes.trees} padding="0" sx={{ padding: "0" }}>
        <img src={trees} alt="trees" style={{ width: "100vw", margin: "0" }} />
      </Container>
      <Container className={classes.santa} align="center">
        <img src={santa} alt="santa" />
      </Container>
      /{" "}
      <Container
        sx={{
          bgcolor: "white",
          height: "60vh",
          marginTop: "42.5vh",
        }}
      >
        <div
          className="pick"
          style={{
            fontSize: "38pt",
            fontFamily: "Titania",
            fontWeight: "400",
            color: "#0F2F4D",
            width: "265pt",
          }}
        >
          Secret Santa
        </div>

        <div className="instru" style={{ margin: " auto auto" }}>
          <p>
            At expressPay, Secret Santa is all about giving gifts to our
            colleagues. We each get to pick out one person. The fun part is the
            secret, you don’t get to know who picked you, but only know who you
            picked.
          </p>
        </div>

        <div className="pick-btn">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#1A5286",
              height: "50pt",
              fontWeight: "bolder",
            }}
            size="large"
            fullWidth
            href="/loginform"
            sx={{ boxShadow: "0px 4px #10385D", borderRadius: "5px 5px" }}
          >
            Let's Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Starter;
