import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import logo from "./Images/expresspay_logo_large.png";
import trees from "./Images/trees.svg";
import Done from "../MobileView/Done";
import { useHistory } from "react-router-dom";

const SecondLoading = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/displaypick");
  }, 2000);
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
          <div className="header">
            {/* <Snowfall /> */}
            <img src={logo} alt="logo" className="ep-logo" />
            <img src={trees} alt="trees" className="header-trees" />
            <div className="loading-one">
              <Done />
              <h4 className="loading-msg">Match Found!</h4>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default SecondLoading;
