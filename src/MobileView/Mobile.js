import Starter from "./Starter";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Welcome from "./Welcome";
import FirstLoading from "./FirstLoading";
import SecondLoading from "./SecondLoading";
import DisplayPick from "./DisplayPick";
import LoginForm from "./LoginForm";
import "./index.css";

const Mobile = () => {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Starter />
          </Route>
          <Route path="/loginform" component={withRouter(LoginForm)}>
            <LoginForm />
          </Route>
          <Route path="/welcome" component={withRouter(Welcome)}>
            <Welcome />
          </Route>
          <Route path="/loading" component={withRouter(FirstLoading)}>
            <FirstLoading />
          </Route>
          <Route path="/secondloading" component={withRouter(SecondLoading)}>
            <SecondLoading />
          </Route>
          <Route path="/displaypick" component={withRouter(DisplayPick)}>
            <DisplayPick />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Mobile;
