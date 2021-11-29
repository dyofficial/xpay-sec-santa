import React from "react";
import lottie from "lottie-web";
import doneLogo from "./images/Lottie/checkmark.json";

export default function Done() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#done-logo"),
      animationData: doneLogo,
    });
  }, []);
  return (
    <div>
      <div id="done-logo" style={{ width: 200, height: 200 }} />
    </div>
  );
}
