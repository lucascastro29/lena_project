import { Iconmodel } from "../models/iconmodels";
import Images from "./images";

const Icons=(props:Iconmodel)=> {
  return (
    <div className="logosDiv">
      <a className="imgfather" href={props.href} >
        <Images src={props.src} width={props.width} height={props.height} alt={props.alt} />
      </a>
    </div>
  );
}
export default Icons;