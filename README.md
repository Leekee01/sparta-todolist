## 컨포넌트 별 기능 구현 내용 및 이유

- Form 컴포넌트에서 input에 들어오는 title, body 값은 useRef를 활요하여 입력값을 가져옵니다.
- 가져온 입력값을 onSubmitHandler함수 안에 넣고 id, isDone 값과 같이 useDispatch를 이용해서 디스패치합니다. 
- List컴포넌트에서 useSelector를 이용해서 전역으로 저장된 데이터값을 불러오고 불러온 데이터값을 map으로 돌려 isDone값에 따라 Todo 컴포넌트가 위아래로 분류됩니다.
- Detail컴포넌트도 useSelector를 이용해서 값을 가져오고 useParams로 id값을 가져와서 find메소드로 id값이 일치하는 todo내용만 불러오게 했습니다.
- Todo컴포넌트에서 완료하기, 삭제하기, 상세보기 버튼이벤트 실행, useDispatch를 이용해서 디스패치합니다.
- 덕스 패턴으로 구현해서 redux/modules/todos.js파일에 액션, 액션 생성함수, 리듀서 모두 들어갔습니다.  
- App.js에서 라우터를 이용해서 메인페이지인 TodoList컴포넌트와 세부페이지인 Detail컴포넌트를 불러오게 했습니다.
- index.js에서 Provider를 활용해서 store를 구독했습니다.
