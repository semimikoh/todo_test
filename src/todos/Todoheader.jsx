import styled from "styled-components";

function TodoHeader({ onLeft }) {
  const onleft = onLeft;
  const date = new Date();
  console.log(date.toLocaleDateString());
  console.log(date.getDate());
  return (
    <Container>
      <DateText>{date.toLocaleDateString()}</DateText>
      <CountText>
        해야할 일 : {onleft[0]}/{onleft[1]}
      </CountText>
    </Container>
  );
}

const Container = styled.div`
  width: 200px;
  border-bottom: 2px solid;
  background-color: #f5e9cf;
  padding: 10px;
  /* display: flex; */
`;

const DateText = styled.p`
  font-size: 1.4rem;
  padding-right: 10px;
`;

const CountText = styled.p`
  font-size: 0.8rem;
  color: #888;
`;

export default TodoHeader;
