import Form from "../Form";
import Heading from "../../typographies/Heading";
import IconNetwork from "../../icons/IconNetwork";
import Meteors from "../MagicUi/Meteors";
import Paragraph from "../../typographies/Paragraph";
import PresentationDesktop from "../Presentation/PresentationDesktop";
import PresentationMobile from "../Presentation/PresentationMobile";
import SectionProjects from "../Section/SectionProjects";
import Skills from "../Skills";

const Component = () => {
  const isMobile = useScreenSize();

  return (
    <>
      <section className="mt-20 lg:mt-40">
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
        <div className="section_design relative overflow-hidden border-Downriver">
          <div className="absolute left-0 top-0 -z-10 h-full">
            <Meteors />
          </div>
          <div className="absolute left-0 top-1/2 -z-10 h-full">
            <Meteors />
          </div>
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
        <div className="section_design  relative flex flex-col items-center overflow-hidden border-VinRouge lg:flex-row lg:flex-wrap lg:justify-center">
          <div className="absolute left-0 top-0 -z-10 h-full">
            <Meteors />
          </div>
          <div className="absolute left-0 top-1/2 -z-10 h-full">
            <Meteors />
          </div>
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
        <div
          id="contact-section"
          className="section_design relative flex flex-col border-Charm lg:flex-row lg:justify-around lg:py-10"
        >
          <div className="mt-8 flex flex-col items-center lg:w-1/2">
            <Paragraph
              content="If you would like to discuss my background and/or my work expectations in web development in more detail, you can contact me via LinkedIn, by email, or by filling out the form next to this."
              css="mb-8 text-white text-opacity-80 text-xl font-Kumbh mx-5 lg:ml-14 text-justify lg:tracking-widest"
            />
            <div className="mb-8 flex flex-row ">
              <a href="https://www.linkedin.com/in/jodieaddis/" target="blank_">
                <IconNetwork name="linkedin" />
              </a>
              <a href="mailto:jodie.addis.92@gmail.com" className="ml-6">
                <IconNetwork name="mail" />
              </a>
            </div>
            <Paragraph
              content="I am available to discuss online or in person during an interview."
              css="mb-6 text-white text-opacity-80 text-xl font-Kumbh lg:tracking-widest mx-5 lg:ml-14 text-justify"
            />
          </div>
          <div className="mb-8 lg:mb-0 lg:flex lg:w-1/2 lg:justify-center">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
