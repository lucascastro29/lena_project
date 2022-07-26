import style from"../styles/lindex.module.css";

const Envios=()=>{


    return (
      <div
        className="envios col-12 d-flex justify-content-center align-items-center"
        style={{ height: "150px", marginTop: "30px", backgroundColor: "red" }}
      >
        <div className={style.envios} >
          <div
            className="col-8 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "black",
              height: "100px",
              zIndex: "2",
              color: "white",
            }}
          >
            Envios a todo montevideo
          </div>
        </div>
      </div>
    );
}
export default Envios;