import "./styles/reset.css";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import TodoItem from "./components/TodoItem";

function App() {
  const handleClickBtn = () => {
    console.log("click");
  };
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <TodoList /> */}
      <div>
        <TodoList />
        {/* <TodoItem /> */}
        {/* <Button className="icon" type="button" onClick={handleClickBtn}>
          <AiOutlinePlus size={20} />
        </Button>
        <Button className="icon delete" type="button" onClick={handleClickBtn}>
          <AiFillDelete size={20} />
        </Button> */}
      </div>
    </div>
  );
}

export default App;
