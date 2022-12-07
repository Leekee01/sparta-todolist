import React from "react";
import styled from "styled-components";


const Todo = ({ todo, onDeleteHandler, onEditHandler })=> {
  return (
    <TodoContainer>
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <ButtonSet>
        <DeleteButton
          onClick={() => onDeleteHandler(todo.id)}
        >
          삭제하기
        </DeleteButton>
        <CompleteButton
          onClick={() => onEditHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </CompleteButton>
      </ButtonSet>
    </TodoContainer>
  );
}

const TodoContainer= styled.div`
   width: 270px;
  /* height: 150px; */
  border: 4px solid #0080ff;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
  margin-bottom: 5px;
`;


const ButtonSet= styled.div`
   display: flex;
  gap: 10px;
  margin-top: 24px;
`;


const Button = styled.button`
  border:none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  color :#fff;
`;

const DeleteButton = styled(Button)`
  border: 2px solid red;
  background-color: red;
`;

const CompleteButton = styled(Button)`
  border: 2px solid #0080ff;
  background-color: #0080ff;
`;



export default Todo;
