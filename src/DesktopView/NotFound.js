import React from "react";
import Lottie from "lottie-web";
import { Link } from "react-router-dom";
import error from "../MobileView/images/Lottie/404.json";

const NotFound = () => {
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#not-found"),
      animationData: error,
    });
  }, []);
  return (
    <div id="not-found">
      <Link to="/" className="error-txt">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
