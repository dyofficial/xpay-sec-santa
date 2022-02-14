import React, { useState, useEffect } from 'react';

import Desktop from './DesktopView/Desktop';
import Mobile from './MobileView/Mobile';
import useWindowSize from './utils/useWindowSize';

function SuperApp() {
  const { width } = useWindowSize();

  return <div>{width > 500 ? <Desktop /> : <Mobile />}</div>;
}

export default SuperApp;
