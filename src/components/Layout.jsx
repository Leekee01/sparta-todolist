import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Container className="layout">{props.children}</Container>; //레이아웃에 둘러싸므로 children을 통해 가져와야 한다.
};

const Container =styled.div`
  background-color: #fff;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
`;
  

export default Layout;
