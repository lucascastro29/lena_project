import { productmodel } from "../models/productmodel";
import Images from "./images";

const Product=( props:productmodel)=>{

return (
    <div className="card col-12" style={{ width: "18rem" }}>
      <div className="card-img-top">
        <Images
          src={props.src}
          height={props.height}
          width={props.width}
          alt={props.alt}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">
          Contactanos
        </a>
      </div>
    </div>
);

}
export default Product;