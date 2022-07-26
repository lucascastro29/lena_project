import React from "react";
import Icons from "../Comoponent/Icons";
import dynamic from "../node_modules/next/dynamic";
const Map = dynamic(() => import("../Comoponent/map"), { ssr: false });
import style from"../styles/lindex.module.css";
import instagram from "../images/icon/icon_instagram.png"
import facebook from "../images/icon/icon_facebook.png";
import telefono from "../images/icon/icon_telefono.png";
import whatsapp from "../images/icon/icon_whatsapp.png";
import icon_lena from "../images/icon/icon_leneria1.png";

import gmail from "../images/icon/icon_gmail.png";
import direccion from "../images/icon/icon_direccion.png";
import Images from "../Comoponent/images";


const Footers=()=>{
   
    return (
      <div className={style.footer}>
        <div className={style.filterc}>
          <div className="col-12  d-flex justify-content-center align-items-center">
            <div className="col-4">
              <div className="col-12 " style={{ color: "white" }}>
                <h1>Contactanos</h1>

                <div>
                  <ul>
                    <li className="d-flex">
                      <Icons
                        href={
                          "https://api.whatsapp.com/send?phone=598094394471&text=Buenas,+me+interesa+saber+el+precio+de+sus+productos."
                        }
                        src={whatsapp}
                        width={25}
                        height={25}
                        alt={""}
                      />{" "}
                      <a
                        href="https://api.whatsapp.com/send?phone=598094394471&text=Buenas,+me+interesa+saber+el+precio+de+sus+productos."
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        +598 94 394 471
                      </a>
                    </li>
                    <li className="d-flex">
                      {" "}
                      <Icons
                        href={"https://www.facebook.com/leneria.malvin"}
                        src={telefono}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      Telefono Fijo
                    </li>
                    <li className="d-flex">
                      <Icons
                        href={"https://www.facebook.com/leneria.malvin"}
                        src={gmail}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      Email
                    </li>
                    <li className="d-flex">
                      <Icons
                        href={"https://www.facebook.com/leneria.malvin"}
                        src={direccion}
                        width={25}
                        height={25}
                        alt={""}
                      />
                      Dirección
                    </li>
                    <li className="d-flex">
                      <Icons
                        href={"https://www.instagram.com/leneriamalvin/"}
                        src={instagram}
                        width={25}
                        height={25}
                        alt={""}
                      />{" "}
                      <a
                        href="https://www.instagram.com/leneriamalvin/"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        Leñeria Malvin
                      </a>
                    </li>
                    <li className="d-flex">
                      <Icons
                        href={"https://www.facebook.com/leneria.malvin"}
                        src={facebook}
                        width={25}
                        height={25}
                        alt={""}
                      />
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
            <div className="col-4" style={{ marginTop: "80px" }}>
              <Map />
            </div>
          </div>
          <div
            className="col-12 d-flex justify-content-center align-items-center"
            style={{ height: "60px",padding:"1px" }}
          >
            <div
              className="col-12"
              style={{
                height: "5px",
                backgroundColor: "#414141",
                width: "80%",
              }}
            ></div>
          </div>
          <div
            className="col-12 d-flex justify-content-start align-items-center"
            style={{ height: "60px", color: "white", paddingLeft: "220px" }}
          >
            <div
              className="col-2"
              style={{ fontSize: "40px", marginTop: "50px" }}
            >
              {" "}
              <Images src={icon_lena} height={140} width={160} alt={""} />
            </div>
            <div className="col-10 d-flex justify-content-end  align-items-center ">
              <div
                className="d-column"
                style={{ marginRight: "200px", marginTop: "50px" }}
              >
                {" "}
                <Icons
                  href={"https://www.facebook.com/leneria.malvin"}
                  src={facebook}
                  width={50}
                  height={50}
                  alt={""}
                />
                <Icons
                  href={"https://www.instagram.com/leneriamalvin/"}
                  src={instagram}
                  width={50}
                  height={50}
                  alt={""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Footers;