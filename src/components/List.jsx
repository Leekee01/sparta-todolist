import styled from "styled-components";
import React from "react";
import Todo from "../todo/Todo";


function List({ todos, setTodos }) {
  const onDeleteHandler = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(newTodos);
  };

  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      return (todo.id === todoId) ? { ...todo, isDone: !todo.isDone } : { ...todo };
    });

    setTodos(newTodos);
  };
  return (
    <AllListContainer>
      <h2 className="list-title">Working.. π₯</h2>
      <ListWrap>
        {todos.map((todo) => {
          return (!todo.isDone)   ?
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
            : null;
        })}
      </ListWrap>
      <h2 className="list-title">Done..! π</h2>
      <ListWrap>
        {todos.map((todo) => {
          return (todo.isDone) ?
            <Todo
              todo={todo}
              key={todo.id}
              setTodos={setTodos}
              onDeleteHandler={onDeleteHandler}
              onEditHandler={onEditHandler}
            />
            : null;
        })}
      </ListWrap>
    </AllListContainer>
  );
}


const AllListContainer = styled.div`
  padding: 0 24px;
`;

const ListWrap = styled.div`
  display: flex; /*μ λ ¬λ μμλ€μ μ΄ λμ΄κ° λΆλͺ¨ λμ΄λ³΄λ€ ν΄λ μ΄μμλ€μ λ€μμ€μ μ λ ¬νλ€.*/ 
  flex-wrap: wrap; /* gapμ λ΄λΆμ children μμλ€μ΄ μΌμ ν κ°κ²©μΌλ‘ λ¨μ΄μ Έ μμΉν  μ μλλ‘ μ¬μ©νλ μμ± */
  gap: 12px;
`;

export default List;