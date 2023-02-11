import styled from '@emotion/styled';

export const BtnContainer = styled.div``;
export const Btn = styled.div`
  display: inline-block;
  font-weight: 700;
  padding: 10px;
  background-color: #f0e8e8;
  border-radius: 0 0 10px 0;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) background-color
    cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    color: white;

    background-color: #be9f9f;
  }
`;
