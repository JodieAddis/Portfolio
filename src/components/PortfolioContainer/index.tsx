import useScreenSize from "../../hook/useScreenSize";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import Form from "../Form";
import PresentationDesktop from "../Presentation/PresentationDesktop";
import PresentationMobile from "../Presentation/PresentationMobile";
import ProjectCards from "../ProjectCards";
import { projectData } from "../../data/projectStack";
import Skills from "../Skills";
import IconNetwork from "../../icons/IconNetwork";
import SectionProjects from "../Section/SectionProjects";

const Component = () => {
  const isMobile = useScreenSize();

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
          {isMobile ? <PresentationMobile /> : <PresentationDesktop />}
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"my stellar abilities"}
          css={"section_heading"}
          id={"skills"}
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
          id={"projects"}
        />
        <Paragraph
          content={"Exploring my web universe:"}
          css={"section_paragraph"}
        />
        <div className=" section_design flex flex-col items-center border-VinRouge lg:flex-row lg:flex-wrap lg:justify-center">
          <SectionProjects />
        </div>
      </section>
      <section className="mb-10 mt-28">
        <Heading
          kind={"h2"}
          content={"cosmic contact hub"}
          css={"section_heading"}
          id={"contact"}
        />
        <div className="section_design flex flex-col border-Charm lg:flex-row">
          <div className="flex flex-col items-center justify-center">
            <Paragraph
              content="Si vous désirez en savoir plus sur mon parcours et mes projets, direction les réseaux sociaux"
              css="mb-6 text-white text-opacity-80 text-center mt-8 text-base font-Kumbh tracking-widest mx-5"
            />
            <div className="mb-8 flex flex-row ">
              <a
                href="https://github.com/JodieAddis"
                target="blank_"
                className="mr-4"
              >
                <IconNetwork name="github" />
              </a>
              <a href="https://www.linkedin.com/in/jodieaddis/" target="blank_">
                <IconNetwork name="linkedin" />
              </a>
            </div>
            <div>
              <Paragraph
                content="Vous pouvez également me contacter en complétant le formulaire ci-dessous"
                css="text-center mx-5 text-white text-opacity-80 text-base font-Kumbh tracking-widest"
              />
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
