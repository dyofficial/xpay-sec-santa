import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import LoadingOne from "../MobileView/LoadingOne";
import { useHistory } from "react-router-dom";
import Snowfall from "../MobileView/Snowfall";

const FirstLoading = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/secondloading");
  }, 4000);
  return (
    <div>
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
          {/* <Snowfall /> */}
          <div className="header">
            <img src={logo} alt="logo" className="ep-logo" />
            <img src={trees} alt="trees" className="header-trees" />
            <div className="loading-one">
              <LoadingOne />
              <h4 className="loading-msg">Matching you with someone...</h4>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default FirstLoading;
