import { carrouselmodel } from "../models/carrouselmodel";
import Images from "./images";
import Carousel from "react-bootstrap/Carousel";
import style from "../styles/lindex.module.css";

const Carrousel=(props:carrouselmodel)=>{


    return (
      <Carousel fade>
        <Carousel.Item>
          <Images
            src={props.src1}
            height={props.sizeheight}
            width={props.sizewidth}
            alt={""}
          />

          <Carousel.Caption>{props.caption1}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Images
            src={props.src2}
            height={props.sizeheight}
            width={props.sizewidth}
            alt={""}
          />

          <Carousel.Caption>{props.caption2}</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Images
            src={props.src3}
            height={props.sizeheight}
            width={props.sizewidth}
            alt={""}
          />

          <Carousel.Caption>{props.caption3}</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}
export default Carrousel;
