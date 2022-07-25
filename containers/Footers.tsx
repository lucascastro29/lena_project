import React from "react";
import dynamic from "../node_modules/next/dynamic";
const Map = dynamic(() => import("../Comoponent/map"), { ssr: false });
import style from"../styles/lindex.module.css";

const Footers=()=>{
   
    return (
      <div className={style.footer}>
        <div className={style.filterc}>
          <div className="col-12  d-flex justify-content-center align-items-center">
            <div className="col-4" >
              <div className="col-12 " style={{ color: "white" }}>
                <h1>Contactanos</h1>

                <div>
                  <ul>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=598094394471&text=Buenas,+me+interesa+saber+el+precio+de+sus+productos."
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        +598 94 394 471
                      </a>
                    </li>
                    <li>Telefono Fijo</li>
                    <li>Email</li>
                    <li>Dirección</li>
                    <li>
                      <a
                        href="https://www.instagram.com/leneriamalvin/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Leñeria Malvin
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/leneria.malvin"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Leñeria Malvin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4">
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footers;