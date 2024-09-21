import styled from "styled-components";

export const HeaderConatiner = styled.header`
  width: 100%;
  height: 200px;
  display: flex;

  justify-content: center;
`;
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  img {
    width: 16px;
    height: 16px;
  }

  h1 {
    font-size: 16px;
    font-weight: 700;
    color: var(--white-color);
  }
`;
export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  a {
    text-decoration: none;
  }
  p {
    color: var(--gray-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    color: var(--purple-color);
  }

  select {
    display: flex;
    background-color: transparent;
    justify-content: center;
    align-items: center;
    color: var(--gray-color);
    border: none;
    width: 50px;
    height: 21px;
    gap: 4px;
  }
`;

export const HeaderNav = styled.div`
  width: 1024px;
  height: 61px;
  display: flex;

  justify-content: space-between;
  align-items: flex-end;
`;

export const Aside = styled.aside`
  width: 32px;
  height: 311px;
  gap: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 0;
  left: 17px;

  div {
    width: 1px;
    height: 191px;
    background-color: var(--gray-color);
  }
`;
