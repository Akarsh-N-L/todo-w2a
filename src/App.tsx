import { useState } from "react";
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [itemList, setItemList] = useState([]);
  const [id, setId] = useState(1);
  const [tab, setTab] = useState("all");

  return (
    <>
      <div className="container">
        <Heading heading="#todo" />
        <Menu tab={tab} setTab={setTab} />
        <TodoForm
          itemList={itemList}
          setItemList={setItemList}
          id={id}
          setId={setId}
          tab={tab}
        />
        <TodoList itemList={itemList} setItemList={setItemList} tab={tab} />
      </div>
    </>
  );
}

export default App;
