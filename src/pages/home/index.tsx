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
  SectionSkills,
  SkillsArticles,
  SkillsContainer,
  Title,
} from "./styled";
import Man from "../../assets/image/man.png";
import aspas from "../../assets/image/Frame 49.svg";
import imgSkills from "../../assets/image/imageSkills.png";
import { CurrentlyPortifolio } from "../../components/currently";
import CardProjects from "../../components/cardProjects";

/* const projetos: CardProjects[] =[ {

}] */

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
        <SectionSkills>
          <ContainerTitle>
            <Title>
              <h3>
                <span>#</span>skills
              </h3>
              <div></div>
            </Title>
            <button>
              View all
              <span>~~</span>
            </button>
          </ContainerTitle>
          <SkillsContainer>
            <img src={imgSkills} alt="" />
            <SkillsContainer>
              <SkillsArticles>
                <h4>Languages</h4>
                <p>TypeScript Lua Python JavaScript</p>
              </SkillsArticles>
              <div>
                <SkillsArticles>
                  <h4>Databases</h4>
                  <p>SQLite PostgreSQL Mongo</p>
                </SkillsArticles>
                <SkillsArticles>
                  <h4>Outher</h4>
                  <p>HTML CSS EJS SCSS REST Jinja</p>
                </SkillsArticles>
              </div>
              <div>
                <SkillsArticles>
                  <h4>Tools</h4>
                  <p>VSCode Neovim Linux Figma XFCE Arch Git Font Awesome</p>
                </SkillsArticles>
                <SkillsArticles>
                  <h4>Frameworks</h4>
                  <p>React Vue Disnake Discord.js Flask Express.js</p>
                </SkillsArticles>
              </div>
            </SkillsContainer>
          </SkillsContainer>
        </SectionSkills>
      </MainHero>
    </PortifolioContainer>
  );
}
