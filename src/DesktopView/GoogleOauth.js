import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function GoogleOauth() {
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const history = useHistory();

  const clientId =
    "896508830695-dce8rfvi2htodikfc95a72pmem008hfn.apps.googleusercontent.com";
  const onLoginSuccess = (res) => {
    console.log("Login Success", res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
    history.push("/welcome");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed", res);
  };

  const OnLogoutSuccess = () => {
    console.log("You have logged out");
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  };

  //   React.useEffect(() => {
  //     lottie.loadAnimation({
  //       container: document.querySelector("#congrats"),
  //       animationData: congrats,
  //     });
  //   }, []);
  return (
    <div>
      {showLoginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      ) : null}
      {showLogoutButton ? (
        <div>
          <GoogleLogout
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={OnLogoutSuccess}
          ></GoogleLogout>
        </div>
      ) : null}
    </div>
  );
}
