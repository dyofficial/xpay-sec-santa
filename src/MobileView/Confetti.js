import React from "react";
import lottie from "lottie-web";
import confetti from "./images/Lottie/confetti.json";

export default function Confetti() {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#done-logo"),
      animationData: confetti,
    });
  }, []);
  return (
    <div>
      <div id="done-logo" style={{ width: 1200, height: 1200 }} />
    </div>
  );
}
