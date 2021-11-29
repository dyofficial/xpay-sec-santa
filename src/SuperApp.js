import React, { useState } from "react";

import Desktop from "./DesktopView/Desktop";
import Mobile from "./MobileView/Mobile";

function SuperApp() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 500;
  React.useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  return <div>{width > breakpoint ? <Desktop /> : <Mobile />}</div>;
}

export default SuperApp;
