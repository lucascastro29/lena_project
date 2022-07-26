import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Icons from "../Comoponent/Icons";
import Images from "../Comoponent/images";
import Button from "../node_modules/react-bootstrap/esm/Button";
import styles from  "../styles/lindex.module.css";
import icon_lena from "../images/icon/icon_leneria1.png"

const Headers=()=> {
 
  const [height, setHeight] = useState(0);

     const styless = {
       display: "flex",
       justifyContent: "end",
       alignItems: "flex-end",
       position: "absolute",
       bottom: "40px",
       top: `${height}`,
       left: "0px",
       right: "0px",
       zIndex: "2",
     };

     
function updateheight(){
  setHeight(window.innerHeight)
  console.log(height)
   
}


useLayoutEffect(() => {
  updateheight();


   
}, []);
  
 



  
  
  return (
    <>
      <nav
        className={
          "col-12 d-flex  site-header  sticky-top align-items-center justify-content-center"
        }
        style={{ background: "linear-gradient(to bottom, yellow, red)" }}
      >
        <div className="col-8 d-flex   align-items-center justify-content-center">
          <div className="col-2">
            <Images src={icon_lena} width={160} height={140} alt="" />
          </div>
          <div className="col-8 d-flex    align-items-center justify-content-end ">
              <a href="" className={styles.header_a}>
                Nosotros
              </a>
              <a href="" className={styles.header_a}>
                Productos
              </a>
              <a href="" className={styles.header_a}>
                Contactanos
                <div className={styles.border_header}></div>
              </a>
            <div>
              <Icons href={""} src={""} width={0} height={0} alt={""} />
            </div>
          </div>
        </div>
      </nav>
      <nav className=" col-12 fixed-bottom m-0">
        <div style={styless}>
          <div className={styles.buttonContactUs}>
            <Button variant="danger">Contactanos</Button>
          </div>
        </div>
      </nav>
    </>
  );

  
}
export default Headers
