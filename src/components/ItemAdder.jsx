import { AiOutlinePlus } from "react-icons/ai";
import Button from "./Button";
import "./ItemAdder.css";
import { useState } from "react";

// TodoList 컴포넌트에서 props로 가져온 setList을 통해서 handleClickAdd 함수를 만든다.
function ItemAdder({ setList }) {
  const [userInput, setuserInput] = useState("");

  /* 만약 userInput이 값이 없다면 함수를 종료한다. 
  prev는 이전 배열을 의미한다. prev의 length가 0이라면 1이고, 0이 아니라면 prev에 마지막 배열의 id에 +1을 해준 newId를 생성한다. 
  newItem의 구조를 작성해주고, newList의 배열에 이전의 배열에 새로운 배열을 더하여 새로운 newList를 생성하고 그것을 return 해준다. 
  그리고 Input값을 초기화 시켜준다. 
  
  */
  const handleClickAdd = () => {
    // 값이 없으면  함수를 종료한다.
    if (!userInput) return;
    console.log("click");
    setList((prev) => {
      // -1 이면 실행이 안 됨.
      //   console.log("prev", prev);
      const newId = prev.length === 0 ? 1 : prev[prev.length - 1].id + 1;
      const newItem = {
        id: newId,
        text: userInput,
        done: false,
      };
      const newList = [...prev, newItem];
      return newList;
    });
    setuserInput("");
  };

  // text 생성 ( event.target.valus와 비슷함 )
  //event 객체의 속성(?)의 value의 값을 setuserInput로 업데이트 해준다. 여기서 value는 input의 value 값으로 가져온 userInput값이다.
  const handleChangeInput = (e) => {
    const { value } = e.target;
    console.log(e.target.value);
    setuserInput(() => value);
  };

  // Enter클릭시 Add 실행
  const handlKeyDownEnter = (e) => {
    // console.dir(e);
    //event 객체의 code 라는 속성(?)을 사용하여 그 값이 Enter 라면 Add가 되도록 한다.
    const { code } = e;
    if (code === "Enter") handleClickAdd();
  };

  return (
    <div className="ItemAdder">
      <input
        type="text"
        className="input"
        name="userInput"
        value={userInput} // input에 작성되는 현재 상태를 value로 반환한다.
        onChange={handleChangeInput} // text에 작성되는 event.target.value의 값을 setuserInput로 업데이트 해준다.
        onKeyDown={handlKeyDownEnter} // Enter 버튼으로 Add하기
      />
      <Button className="icon" type="button" onClick={handleClickAdd}>
        <AiOutlinePlus size={20} />
      </Button>
    </div>
  );
}
export default ItemAdder;
