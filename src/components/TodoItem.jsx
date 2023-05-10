import { useState } from "react";
import Button from "./Button";
import "./TodoItem.css";
import { AiFillDelete } from "react-icons/ai";

// TodoItem은 list 배열의 한 줄을 코드로 옮겨 놓은 Item이다.
/* TodoItem은 props로 TodoLIst에서 text, handleClickDelete의 정보를 가져와서 span 태그와 Button 태그를 이루는 TodoItem을 클릭했을 떄 
   handleClickDelete 함수가 실행되면서 삭제 버튼이 보이도록 활성화되도록 한다. {text}를 통해서 item이 가지고 있는 정보를 span 태그 안에서 보여준다. 
   
isClicked이라는 현재 상태가 true면 Button 컴포넌트에 휴지통 아이콘을 입힌 것들이 나타난다. 다시 한 번 더 누르면 false의 값으로 변경되면서 아이콘이 사라진다. 
*/

function TodoItem({ text, handleClickDelete }) {
  const [isClicked, setisClicked] = useState();
  console.log(isClicked);
  const handelClickText = () => {
    setisClicked((prev) => !prev);
  };

  return (
    <div className="TodoItem">
      <span className="text" onClick={handelClickText}>
        {text}
      </span>
      {isClicked ? (
        <Button
          className="icon delete"
          type="button"
          onClick={handleClickDelete}
        >
          <AiFillDelete size={20} />
        </Button>
      ) : null}
    </div>
  );
}
export default TodoItem;
