import Image from "next/image";
import { imageModel } from "../models/imagemodels";

const Images = (props: imageModel) => {



return (
    <Image
      src={props.src}
      height={props.height}
      width={props.width}
      alt={props.alt}
    />
);}

export default Images;