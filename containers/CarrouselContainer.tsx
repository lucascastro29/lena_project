import Carrousel from "../Comoponent/Carrousel";
import lena1 from "../images/madera.jpg"
import lena2 from "../images/madera2.jpg";
import fuego from "../images/fuego.jpg";
import style from "../styles/lindex.module.css";

import { useEffect, useState } from "react";

const CarrouselContainer =()=>{
  
  const [widthsizes, setwidthsizes] = useState(0);

  function updatesize() {
    setwidthsizes(window.innerWidth);
    console.log(widthsizes);
  }

  useEffect(() => {
    updatesize();
  }, []);




    return (
      <Carrousel
        src1={lena1}
        sizewidth={widthsizes}
        sizeheight={750}
        src2={fuego}
        src3={lena2}
        caption1=""
        caption2=""
        caption3=""
      />
    );

}
export default CarrouselContainer;