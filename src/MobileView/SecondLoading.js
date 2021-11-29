import { useHistory } from "react-router";
import trees from "./images/introduction/tree2.svg";
import logo from "./images/introduction/logo.png";
import { CssBaseline } from "@mui/material";
import Done from "./Done";

const SecondLoading = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/displaypick");
  }, 2000);

  return (
    <div>
      <CssBaseline />
      <div className="login-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-tree">
        <img src={trees} alt="tree" />
      </div>{" "}
      <Done />
      <h4 className="loading-msg">Match Found!</h4>
    </div>
  );
};

export default SecondLoading;
