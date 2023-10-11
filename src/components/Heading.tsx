import { IHeadingInterface } from "../interfaces/interfaces";
import "./Heading.css";

export default function Heading(props: IHeadingInterface) {
  return (
    <>
      <div className="heading-container">
        <span className="heading">{props.heading}</span>
      </div>
    </>
  );
}
