import styled from '@emotion/styled';

export const Section = styled.div`
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`;

export const ListMovie = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

export const Item = styled.li`
  max-width: 350px;
  border: 3px solid;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const MovieTitle = styled.p`
  font-size: 26px;
  color: black;
  text-align: center;
  padding: 10px;
`;
