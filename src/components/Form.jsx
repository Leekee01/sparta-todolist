import React, { useState } from "react";
import styled from "styled-components";

function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  const [count, setCount] = useState(2)
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value, id: count });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setCount(count+1);
    setTodo(initialState);
  };

  return (
    <FormBox onSubmit={onSubmitHandler}>
      <InputBoxes>
        <FormLabel>제목</FormLabel>
        <InputTitle
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <FormLabel>내용</FormLabel>
        <InputBody
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </InputBoxes>
      <AddButton>추가하기</AddButton>
    </FormBox>
  );
}





const FormBox = styled.form`
  background-color: #dce4f0;
  margin: 0 auto;
  display: flex;
  align-items: center;    
  padding: 30px;
  gap: 20px;
`;

const InputBoxes = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const FormLabel = styled.label`
  font-size: 18px;
  font-weight: 700;
`;

const InputTitle = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const InputBody = styled.input`
  height: 40px;
  width: 340px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const AddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: #0080ff;
  width: 140px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export default Form;

