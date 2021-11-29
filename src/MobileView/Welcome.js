import { Button } from "@material-ui/core";
import trees from "./images/introduction/tree2.svg";
import logo from "./images/introduction/logo.png";
import x from "./images/introduction/x.png";
import w from "./images/introduction/w.png";
import v from "./images/introduction/v.png";
import u from "./images/introduction/u2.png";
import y from "./images/introduction/y.png";
import { CssBaseline } from "@mui/material";

export default function LoginApp() {
  return (
    <div>
      <div className="welcome">
        <CssBaseline />
        <div className="login-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="login-tree">
          <img src={trees} alt="tree" />
        </div>
        <h3 className="greetings">
          <span> 👋 Hello </span>
        </h3>
        <h3 className="titania-welcome">Pick a colleague</h3>
        <div className="instru-container">
          <p className="instru" style={{ margin: "50px 10px" }}>
            Tap on the button below to find out who you’re spoiling this
            Christmas!
          </p>
        </div>

        <div className="pick-btn">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#1A5286",
              height: "50pt",
              fontWeight: "bolder",
              color: "white",
            }}
            size="large"
            fullWidth
            href="/loading"
            sx={{ boxShadow: "0px 4px #10385D", borderRadius: "5px 5px" }}
          >
            Pick
          </Button>
        </div>

        <div className="pic-art">
          <img src={x} alt="x" className="first" />
          <img src={w} alt="w" className="second" />
          <img src={v} alt="v" className="third" />
          <img src={u} alt="u" className="fourth" />
          <img src={y} alt="y" className="fifth" />
        </div>
      </div>
    </div>
  );
}
