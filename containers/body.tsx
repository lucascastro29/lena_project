import styles from "../styles/lindex.module.css";
import CarrouselContainer from "./CarrouselContainer";
import Envios from "./Envios";
import InfLeneria from "./InfLeneria";
import Products from "./Products";

const Bodymain = () => {
  return (
    <div className={styles.body}>
       <div className="col-12 d-block justify-content-center align-items-center">
          <CarrouselContainer />
             <Envios />

          <Products />
          <InfLeneria />
        </div>
    </div>
  );
};
export default Bodymain;
