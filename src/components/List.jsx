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
      <h2 className="list-title">Working.. 🔥</h2>
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
      <h2 className="list-title">Done..! 🎉</h2>
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
  display: flex; /*정렬된 요소들의 총 넓이가 부모 넓이보다 클때 이요소들을 다음줄에 정렬한다.*/ 
  flex-wrap: wrap; /* gap은 내부의 children 요소들이 일정한 간격으로 떨어져 위치할 수 있도록 사용하는 속성 */
  gap: 12px;
`;

export default List;