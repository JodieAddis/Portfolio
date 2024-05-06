import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import PresentationDesktop from "../Presentation/PresentationDesktop";
import PresentationMobile from "../Presentation/PresentationMobile";
import ProjectCards from "../ProjectCards";
import Skills from "../Skills";

const Component = () => {
  return (
    <>
      <section className="mt-40">
        <Heading
          kind={"h2"}
          content={"about"}
          css={"section_heading"}
          id={"presentation"}
        />
        <Paragraph
          content={"Within the space, a new React developer is born:"}
          css={"section_paragraph"}
        />
        <div className="section_design border-Downriver">
          {/* <PresentationDesktop /> */}
          <PresentationMobile />
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"my stellar abilities"}
          css={"section_heading"}
          id={"abilities"}
        />
        <Paragraph
          content={
            "Discover the skills, tools, and technologies I utilize to launch your projects into orbit:"
          }
          css={"section_paragraph"}
        />
        <div className="section_design border-Bossanova">
          <Skills />
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"my projects"}
          css={"section_heading"}
          id={"projets"}
        />
        <Paragraph
          content={"Exploring my web universe:"}
          css={"section_paragraph"}
        />
        <div className=" section_design border-VinRouge">
          <ProjectCards
            name={"online dictionnary"}
            description={"description en une ligne du présent projet"}
            url={"https://jodieaddis.github.io/online-dictionary/"}
          />
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"cosmic contact hub"}
          css={"section_heading"}
          id={"contact"}
        />
        <div className="section_design border-Charm">TEST</div>
      </section>
    </>
  );
};

export default Component;
