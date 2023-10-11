import React from "react";
import { ITodoListPropInterface } from "../interfaces/interfaces";
import "./TodoList.css";

export default function TodoList(props: ITodoListPropInterface) {
  const itemList = props.itemList;
  const setItemList = props.setItemList;
  const tab = props.tab;

  const handleCheckboxClick = (itemId: number) => {
    const updatedItemList = itemList.map((itemObj) => {
      if (itemId === itemObj.id) {
        return { ...itemObj, isCompleted: !itemObj.isCompleted };
      }
      return itemObj;
    });
    setItemList(updatedItemList);
  };

  const handleBinClick = (id: number) => {
    const result = itemList.filter((item) => id !== item.id);
    setItemList(result);
  };

  const handleDeleteAll = () => {
    const completedItems = itemList.filter((item) => !item.isCompleted);
    setItemList(completedItems);
  };

  const styleObj = {
    display: "flex",
    justifyContent: "space-between",
  };

  const ulStyleObj = {
    marginTop: tab === "completed" ? "184px" : "0px",
  };

  return (
    <>
      <ul className="todo-item-list" style={ulStyleObj}>
        {itemList.map((itemObj) => (
          <React.Fragment key={itemObj.id}>
            {tab === "all" && (
              <li
                className={`todo-items ${
                  itemObj.isCompleted ? "completed" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="todo-item-checkbox"
                  checked={itemObj.isCompleted}
                  onChange={() => handleCheckboxClick(itemObj.id)}
                />
                <span>{itemObj.name}</span>
              </li>
            )}
            {tab === "active" && !itemObj.isCompleted && (
              <li
                className={`todo-items ${
                  itemObj.isCompleted ? "completed" : ""
                }`}
              >
                <input
                  type="checkbox"
                  className="todo-item-checkbox"
                  checked={itemObj.isCompleted}
                  onChange={() => handleCheckboxClick(itemObj.id)}
                />
                <span>{itemObj.name}</span>
              </li>
            )}
            {tab === "completed" && itemObj.isCompleted && (
              <li
                className={`todo-items ${
                  itemObj.isCompleted ? "completed" : ""
                }`}
                style={styleObj}
              >
                <span>{itemObj.name}</span>
                <i
                  className="ri-delete-bin-line"
                  onClick={() => handleBinClick(itemObj.id)}
                ></i>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      {tab === "completed" && itemList.length > 0 && (
        <div className="delete-all-super-container">
          <div className="delete-all-container">
            <button
              className="delete-all"
              id="delete-all"
              onClick={handleDeleteAll}
            >
              <i className="ri-delete-bin-6-line"></i> delete all
            </button>
          </div>
        </div>
      )}
    </>
  );
}
