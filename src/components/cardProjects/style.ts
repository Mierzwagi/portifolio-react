import styled from "styled-components";

export const ArticleContainer = styled.article`
  background-color: var(--backgroud-color);
  border: 1px solid var(--gray-color);
  width: 330px;

  img {
    width: 328px;
  }
`;

export const LanguagesTypes = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;

  p {
    color: var(--gray-color);
    font-family: "Fira Code", monospace;
    font-size: 16px;
    margin-left: 8px;
  }
`;
export const ProjectDescriptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  border-top: 1px solid var(--gray-color);
  padding: 16px;

  h2 {
    font-size: 24px;
    color: var(--white-color);
    font-family: "Fira Code", monospace;
  }

  p {
    color: var(--gray-color);
    font-family: "Fira Code", monospace;
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ButtonProjects = styled.button`
  width: 109px;
  border: 1px solid var(--gray-color);
  padding: 8px 16px;
  background-color: transparent;
  color: var(--gray-color);
`;
