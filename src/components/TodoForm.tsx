import { useState } from "react";
import { ITodoFormPropInterface } from "../interfaces/interfaces";
import "./TodoForm.css";

export default function TodoForm(props: ITodoFormPropInterface) {
  let itemList = props.itemList;
  let setItemList = props.setItemList;
  let id = props.id;
  let setId = props.setId;
  let tab = props.tab;

  const [item, setItem] = useState("");

  const handleOnchange = (event: any) => {
    setItem(event.target.value);
  };

  const handleButtonClick = () => {
    const itemObj = {
      id: id,
      name: item,
      isCompleted: false,
    };
    setItemList([...itemList, itemObj]);
    console.log(`Added Item = ${itemObj.name}`);
    setId(id + 1);
    setItem("");
  };

  return (
    <>
      {tab !== "completed" && (
        <div className="todo-form">
          <div className="todo-form-container">
            <div className="todo-form-elements">
              <input
                type="text"
                className="todo-form-inp"
                placeholder="add details"
                onChange={handleOnchange}
                value={item}
              />
              <button
                type="submit"
                className="todo-form-btn"
                onClick={handleButtonClick}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
