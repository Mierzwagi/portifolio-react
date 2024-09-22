import chertNode from "../../assets/image/chertNodes.jpg"
import { ArticleContainer, ButtonContainer, ButtonProjects, LanguagesTypes, ProjectDescriptions } from "./style";

export default function CardProjects() {
  return (
    <ArticleContainer>
      <img src={chertNode} alt="" />
      <LanguagesTypes>
        <p>HTML</p>
        <p>SCSS</p>
        <p>Python</p>
        <p>Flask</p>
      </LanguagesTypes>
      <ProjectDescriptions>

        <h2>ChertNodes</h2>
        <p>Minecraft servers hosting </p>
        <ButtonContainer>
          <ButtonProjects>Live</ButtonProjects>
          <ButtonProjects>Cached</ButtonProjects>
        </ButtonContainer>
      </ProjectDescriptions>
    </ArticleContainer>
  );
}
