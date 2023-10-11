import React from "react";
import "./Menu.css";
import { IMenuPropsInterface } from "../interfaces/interfaces";

export default function Menu(props: IMenuPropsInterface) {
  const setTab = props.setTab;

  return (
    <>
      <div className="menu-container">
        <div className="menu">
          <span
            className="menu-item"
            id="menu-item-all"
            onClick={() => setTab("all")}
          >
            All
          </span>
          <span
            className="menu-item"
            id="menu-item-active"
            onClick={() => setTab("active")}
          >
            Active
          </span>
          <span
            className="menu-item"
            id="menu-item-completed"
            onClick={() => setTab("completed")}
          >
            Completed
          </span>
        </div>
      </div>
      <div className="hr-container">
        <hr />
      </div>
    </>
  );
}
