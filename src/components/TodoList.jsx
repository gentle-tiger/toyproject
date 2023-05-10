import { useState } from "react";
import "./TodeList.css";
import TodoItem from "./TodoItem";
import Button from "./Button";
import ItemAdder from "./ItemAdder";

const textArray = [
  { id: 1, text: "리액트 복습", done: "false" },
  { id: 2, text: "코드타카", done: "false" },
  { id: 3, text: "css 공부", done: "false" },
];

function TodoList() {
  // console.log(list); textArray의 배열이 list에 나타난다.
  const [list, setList] = useState(textArray);

  //textArray의 id 값을 가져와서 현재 state인 list에 filter를 걸어서 현재 순회하는 값의 id 가 id와 맞지 않는 것들만을 newList로 만들어서 setList로 업데이트 한다.
  // 즉 클릭된 버튼의 id값과 맞지 않는 것들만 새로운 배열에 넣어서 반환하는 것. 클릭된 id 값은 delete 하고 싶은 값이기 떄문에 제외해야한다.
  const handleClickDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // All Clear 버튼 생성
  // 이 함수를 가지고 있는 버튼이 클릭되면 setList에 저장되어 있는 배열을 빈 배열로 만들어 list를 초기화 시킨다.
  const handleClickClear = () => {
    setList([]);
  };

  return (
    <div className="TodoList">
      <div className="header">
        <h1 className="title">Todo List App</h1>
        {/* setList의 배열을 props 로 가져감 */}
        <ItemAdder setList={setList} />
      </div>
      <div className="body">
        {/* list에 map 함수를 사용하여 TodoItem 컴포넌트에 정보를 전달하려고 한다. list의 text 값을 text로 가져가고 handleClickDelete 함수도 가져간다.
            map을 통해서 배열의 정보를 가져갈 때는 이전의 값과 비교하기 위해서 필요한 고유한 key 값을 가져와야 한다. */}
        {list.map((item) => (
          // 중요 최대한 이해하기
          <TodoItem
            key={item.id}
            text={item.text}
            handleClickDelete={() => handleClickDelete(item.id)}
          />
        ))}
      </div>
      <div className="footer">
        {/* list의 length의 값으로 남았다는 표현을 사용한다. 중괄호{}와 백틱을 사용하여 javascript 문법과 템플릿 리터럴을 사용한다.*/}
        <p className="Counter">{`할 일이 ${list.length}개 남았습니다.`}</p>
        {/* 버튼이 클릭되면 handleClickClear가 실행되도록 한다. */}
        <Button onClick={handleClickClear}>Clear List</Button>
      </div>
    </div>
  );
}
export default TodoList;
