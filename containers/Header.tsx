import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Icons from "../Comoponent/Icons";
import Images from "../Comoponent/images";
import Button from "../node_modules/react-bootstrap/esm/Button";
import styles from  "../styles/lindex.module.css";


const Headers=()=> {
  const [height, setHeight] = useState(0);

  let newheight=height+50;



     const styless = {
       display: "flex",
       justifyContent: "end",
       alignItems: "flex-end",
       position: "absolute",
       bottom: "40px",
       top: `${newheight}`,
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
      >
        <div className="col-9 d-flex   align-items-center justify-content-center">
          <div className="col-3">
            <Images src={""} width={0} height={0} alt="" />
          </div>
          <div className="col-8 d-flex   align-items-center justify-content-end ">
           <div className="col-1">

           </div>
         
            <div className="col-1">
              <a href="">Nosotros</a>
            </div>
            <div className="col-1">
              <a href="">Productos</a>
            </div>
            <div className="col-1">
              <a href="">Contactanos</a>
            </div>
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
