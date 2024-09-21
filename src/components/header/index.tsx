import logo from "../../assets/image/logo-default.svg";
import arrowdown from "../../assets/image/arrow-down.svg";
import GitHub from "../../assets/image/gitHub.svg";
import Dribble from "../../assets/image/drible.svg";
import Figma from "../../assets/image/figma.svg";
import {
  Aside,
  HeaderConatiner,
  HeaderNav,
  LogoContainer,
  NavContainer,
} from "./style";

export function Header() {
  return (
    <HeaderConatiner>
      <Aside>
        <div></div>
        <a href=""><img src={GitHub} alt="" /></a>
        <a href=""><img src={Dribble} alt="" /></a>
        <a href=""><img src={Figma} alt="" /></a>
        
      </Aside>
      <HeaderNav>
        <LogoContainer>
          <img src={logo} alt="" />
          <h1>Giovanna M Santos</h1>
        </LogoContainer>
        <NavContainer>
          <a href="">
            <p>
              <span>#</span>home
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span>works
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span>about-me
            </p>
          </a>
          <a href="">
            <p>
              <span>#</span>contacts
            </p>
          </a>
          <select name="" id="">
            <option value="">EN</option>
            <option value="">PT</option>
            <img src={arrowdown} alt="" />
          </select>
        </NavContainer>


      </HeaderNav>
    </HeaderConatiner>
  );
}
