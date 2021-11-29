import React, { useState, useEffect } from "react";

import Container from "@mui/material/Container";
import { Button, CssBaseline } from "@mui/material";
import logo from "./images/introduction/logo.png";
import trees from "./images/introduction/tree2.svg";

import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxHeight: "100vh",
    backgroundColor: "#216098",
    // height: "100vh",
    // backgroundColor: "white",

    // zIndex: "-1",
  },
  logo: {
    position: "absolute",
    marginTop: "50px",
    height: "23pt",
  },
  santa: {
    position: "absolute",
    marginTop: "15vh",
  },
  trees: {
    position: "absolute",
    marginTop: "30vh",
    zIndex: "0",
    // [theme.breakpoints.up("md")]: {
    //   marginTop: "10vh",
    // },
  },
}));

const DisplayPick = () => {
  const [staffList, setStaffList] = useState([]);
  const [pick, setPick] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const url = "https://dyofficial.github.io/Data/ep2.json";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const randomStaff = json[Math.floor(Math.random() * json.length)];
        const handleGenerate = () => {
          setPick(randomStaff.name);
          setDepartment(randomStaff.department);
          setImage(randomStaff.image);
        };
        handleGenerate();
        setStaffList(json);
        // console.log(staffList);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.trees} padding="0" sx={{ padding: "0" }}>
        <img src={trees} alt="trees" style={{ width: "100vw", margin: "0" }} />
      </Container>
      <Container className={classes.santa} align="center">
        <img src={image} alt="staff-image" className="staff-image" />
      </Container>
      /{" "}
      <Container
        sx={{
          bgcolor: "white",
          height: "60vh",
          marginTop: "42.5vh",
        }}
      >
        <div className="pick">
          <p>{pick}</p>
        </div>
        <div className="dept">
          <p>{department}</p>
        </div>
        <div className="underline"></div>
        <div className="w-n">What's Next?</div>
        <div className="instru">
          <p>
            Don't disclose your pick to anyone. Submit your gift to HR before
            7th of December and keep your fingers crossed for an amazing gift
            from someone else
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
            href="/"
            sx={{ boxShadow: "0px 4px #10385D", borderRadius: "5px 5px" }}
          >
            Done!
          </Button>
        </div>
      </Container>
    </div>
  );
};
export default DisplayPick;
