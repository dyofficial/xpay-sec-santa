import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Starter from "./Starter";
import "./desktop.css";
import LoginForm from "./LoginForm";
import Welcome from "./Welcome";
import FirstLoading from "./FirstLoading";
import SecondLoading from "./SecondLoading";
import DisplayPick from "./DisplayPick";
import NotFound from "./NotFound";
import Snowfalls from "./Snowfalls";

const Desktop = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Starter />
        </Route>
        <Route exact path="/loginform">
          <LoginForm />
        </Route>
        <Route exact path="/welcome">
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
        <Route path="/snowfall" component={withRouter(Snowfalls)}>
          <Snowfalls />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Desktop;
