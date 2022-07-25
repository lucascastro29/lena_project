import Carrousel from "../Comoponent/Carrousel";

const InfLeneria=()=>{

    return (
      <div className="d-flex col-12">
        <div className="col-6">
          <h1>Leñeria Malvin</h1>
          <p>Informacion de la empresa</p>
        </div>
        <div className="col-5">
          <Carrousel src1={""} src2={""}src3={""} caption1={""} caption2={""} caption3={""} sizewidth={100} sizeheight={100}/>
        </div>
      </div>
    );
}
export default InfLeneria;