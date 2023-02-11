import styled from '@emotion/styled';

export const List = styled.ul`
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 10px;
  justify-content: space-around;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
export const Item = styled.li`
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
`;
export const Error = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: red;
`;
