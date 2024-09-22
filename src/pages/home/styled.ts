import styled from "styled-components";
/* import backgroung from "../../assets/image/background.png" */

export const PortifolioContainer = styled.main`
  width: 100%;

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
export const SectionImage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* export const ContainerBackground = styled.div`
  background-image: url(${backgroung});
  background-size: cover;
  background-position: center;
` */

export const QuoteContainer = styled.section`
  width: 712px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin-top: 112px;

  p {
    color: var(--white-color);
    font-family: "Fira Code", monospace;
  }
`;

export const ContainerFrase = styled.section`
  padding: 32px;
  border: 1px solid var(--white-color);
  align-self: flex-end;

  img {
    position: absolute;
    bottom: -40px;
  }
`;
export const ConatinerName = styled.section`
  padding: 32px;
  border: 0.5px solid var(--gray-color);
  align-self: flex-end;
  border-top: none;
`;

export const SectionProjects = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin: 74px 0 48px 0 ;

  button {
    border: none;
    background-color: transparent;
    color: var(--white-color);
    font-family: "Fira Code", monospace;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  h3 {
    font-size: 32px;
    color: var(--white-color);
    font-family: "Fira Code", monospace;
  }

  span {
    color: var(--purple-color);
  }
  div {
    width: 511px;
    height: 1px;
    background-color: var(--purple-color);
  }
`;

export const ConatinerAticles = styled.div`
  display: flex;
  gap: 16px;
`;
