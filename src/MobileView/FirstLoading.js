import { useHistory } from "react-router";
import trees from "./images/introduction/tree2.svg";
import logo from "./images/introduction/logo.png";
import { CssBaseline } from "@mui/material";
import LoadingOne from "./LoadingOne";
// import Lottie from "./images/Lottie/";

const FirstLoading = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/secondloading");
  }, 4000);

  return (
    <div>
      <CssBaseline />
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-tree">
        <img src={trees} alt="tree" />
      </div>{" "}
      <LoadingOne />
      <h4 className="loading-msg">Matching you with someone...</h4>
    </div>
  );
};

export default FirstLoading;
