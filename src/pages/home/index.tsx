import { Header } from "../../components/header";
import {
  ConatinerAticles,
  ConatinerName,
  ContainerFrase,
  ContainerTitle,
  DescriptionCotainer,
  MainHero,
  PortifolioContainer,
  QuoteContainer,
  SectionDescription,
  SectionImage,
  SectionProjects,
  Title,
} from "./styled";
import Man from "../../assets/image/man.png";
import aspas from "../../assets/image/Frame 49.svg";
import { CurrentlyPortifolio } from "../../components/currently";
import CardProjects from "../../components/cardProjects";

export function Home() {
  return (
    <PortifolioContainer>
      <Header />
      <MainHero>
        <DescriptionCotainer>
          <SectionDescription>
            <h1>
              Giovanna is a <span>web designer</span> and{" "}
              <span>front-end developer</span>
            </h1>
            <p>
              He crafts responsive websites where technologies meet creativity
            </p>
            <button>Contact me!!</button>
          </SectionDescription>
          <SectionImage>
            <img src={Man} alt="" />
            <CurrentlyPortifolio />
          </SectionImage>
        </DescriptionCotainer>
        <QuoteContainer>
          <ContainerFrase>
            <img src={aspas} alt="" />
            <p>With great power comes great electricity bill</p>
          </ContainerFrase>
          <ConatinerName>
            <img src={aspas} alt="" />
            <p>- Dr. Who</p>
          </ConatinerName>
        </QuoteContainer>
        <SectionProjects>
          <ContainerTitle>
            <Title>
              <h3>
                <span>#</span>projects
              </h3>
              <div></div>
            </Title>
            <button>
              View all
              <span>~~</span>
            </button>
          </ContainerTitle>
          <ConatinerAticles>
            <CardProjects />
            <CardProjects />
            <CardProjects />
          </ConatinerAticles>
        </SectionProjects>
      </MainHero>
    </PortifolioContainer>
  );
}
