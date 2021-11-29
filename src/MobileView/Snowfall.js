import React from "react";
import lottie from "lottie-web";
import snowfall from "./images/Lottie/s-snow-fall.json";

export default function Snowfall() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#done-logo"),
      animationData: snowfall,
    });
  }, []);
  return (
    <div>
      <div id="done-logo" style={{ width: 500, height: 500 }} />
    </div>
  );
}
