import styled from "styled-components";

export const CurrentlyContainerImg = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid var(--gray-color);
  width: 402px;
  gap: 10px;

  p{
    color: var(--gray-color);
    font-size: 16px;
    font-family: "Fira Code", monospace;
  }
  span{
    color: var(--white-color);
    font-weight: bold;
  }
`;
export const Square = styled.div`
  width: 16px;
  height: 16px;
  background-color: var(--purple-color);
`;
