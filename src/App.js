import React from "react";
import styled from "styled-components";
import TodoList from "./pages/TodoList";


const App = () => {
  return (
  <Background className="App">
    <TodoList />
  </Background>)
}


const Background = styled.div`
background-color: #0080ff;
`;

export default App;



