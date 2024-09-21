import styled from "styled-components";

export const PortifolioContainer = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: var(--backgroud-color);
`;

export const MainHero = styled.main``;

export const DescriptionCotainer = styled.section`
  width: 1024px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 18px;
`;

export const SectionDescription = styled.section`

  h1 {
    font-size: 32px;
    color: var(--white-color);
    margin-bottom: 32px;
    font-family: "Fira Code", monospace;
  }

  p {
    font-size: 16px;
    color: var(--gray-color);
    margin-bottom: 24px;
    font-family: "Fira Code", monospace;
  }

  span {
    color: var(--purple-color);
  }

  button {
    border: 1px solid var(--purple-color);
    width: 148px;
    padding: 8px 16px;
    background-color: transparent;
    color: var(--white-color);
    font-family: "Fira Code", monospace;
  }
`;
export const SectionImage = styled.section``;

export const QuoteContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--white-color);
  }
`;

export const ContainerFrase = styled.section`
  padding: 32px;
  border: 1px solid var(--white-color);
`;
export const ConatinerName = styled.section`
  padding: 32px;
  border: 1px solid var(--white-color);
  align-self: flex-end;
`;
