import React from "react";
import lottie from "lottie-web";
import xmas from "./images/Lottie/xmas.json";

export default function LoadingOne() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#done-logo"),
      animationData: xmas,
    });
  }, []);
  return (
    <div>
      <div id="done-logo" style={{ width: 200, height: 200 }} />
    </div>
  );
}
