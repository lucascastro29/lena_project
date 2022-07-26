import { useEffect, useState } from "react";
import Product from "../Comoponent/Product";
import madera from "../images/madera.jpg"

const Products=()=>{

const [ProductsArray, setProductsArray] = useState<any>([
  {
    product_id: "product1",
    src: madera,
    height: 100,
    width: 100,
    alt: "string",
    title: "string",
    text: "string",
  },
  {
    product_id: "product2",
    src: madera,
    height: 100,
    width: 100,
    alt: "string",
    title: "string",
    text: "string",
  },
]);

              
       

    return (
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div>
          <div
            className="col-12 d-flex"
            style={{ textAlign: "center", fontSize: "40px" }}
          >
            Nuestros productos
          </div>
          <div className="col-12 d-flex" style={{ marginBottom: "40px" }}>
            <div className="col-12 d-flex "
              style={{
                backgroundColor: "red",
                height: "4px",
                width: "100%",
              }}
            ></div>
            </div>
            <div className="col-12 d-flex justify-content-center align-items-center">
              {ProductsArray.map((element, index) => {
                return (
                  <div className="col-5 productstyle" key={index}>
                    <Product
                      product_id={element.product_id}
                      src={element.src}
                      height={element.height}
                      width={element.width}
                      alt={element.alt}
                      title={element.title}
                      text={element.text}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      
    );
}
export default Products;