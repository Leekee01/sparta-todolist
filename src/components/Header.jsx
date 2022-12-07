import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <div>My Todo List</div>
      <div>React</div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
`;

export default Header;
