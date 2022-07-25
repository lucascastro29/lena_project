import React, { useEffect, useLayoutEffect, useRef } from "react";

import Headers from "../containers/Header";
import Footers from "../containers/Footers";
import Heads from "../containers/Head";
import Bodymain from "../containers/body";

export default function Index() {
  


  return (
    <div className="col-12 ">
      <Heads />

      <Headers />
  <Bodymain />
      <Footers />
    </div>
  );
}
