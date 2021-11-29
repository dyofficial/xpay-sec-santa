import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import Confetti from "../MobileView/Confetti";
import Snowfall from "../MobileView/Snowfall";

const DisplayPick = () => {
  const [staffList, setStaffList] = useState([]);
  const [pick, setPick] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  // const [confetti, setConfetti] = useState(false);

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
        <div className="confetti">
          <Confetti />
        </div>
        <div className="header">
          <img src={logo} alt="logo" className="ep-logo" />
          <img src={image} alt="staff-image" id="staff-img" />
          <img src={trees} alt="trees" className="header-trees" />
        </div>
        <div className="desk-pick">
          <p>{pick}</p>
        </div>
        <div className="desk-dept">
          <p>{department}</p>
        </div>
        <div className="what-next">What's Next?</div>
        <div className="instructions">
          <p>
            Don't disclose your pick to anyone. Submit your gift to HR before
            17th of December and keep your fingers crossed for an amazing gift
            from someone else
          </p>
        </div>
        <Link to="/" className="button-container">
          <Button
            variant="contained"
            size="large"
            fullWidth
            href="/"
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
            Done!
          </Button>
        </Link>
      </Paper>
    </Box>
  );
};

export default DisplayPick;
