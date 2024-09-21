import { Header } from "../../components/header";
import {
  ConatinerName,
  ContainerFrase,
  DescriptionCotainer,
  MainHero,
  PortifolioContainer,
  QuoteContainer,
  SectionDescription,
  SectionImage,
} from "./styled";
import Man from "../../assets/image/man.png";
import { CurrentlyPortifolio } from "../../components/currently";

export function Home() {
  return (
    <PortifolioContainer>
      <Header />
      <MainHero>
        <DescriptionCotainer>
          <SectionDescription>
            <h1>
              Elias is a <span>web designer</span> and{" "}
              <span>front-end developer</span>
            </h1>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <button>Contact me!!</button>
          </SectionDescription>
          <SectionImage>
            <img src={Man} alt="" />
            <CurrentlyPortifolio/>
          </SectionImage>
        </DescriptionCotainer>
        <QuoteContainer>
          <ContainerFrase><h1>With great power comes great electricity bill</h1></ContainerFrase>
          <ConatinerName><h1>- Dr. Who</h1></ConatinerName>
        </QuoteContainer>
      </MainHero>
    </PortifolioContainer>
  );
}
