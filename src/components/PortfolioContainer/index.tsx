import useScreenSize from "../../hook/useScreenSize";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import Form from "../Form";
import PresentationDesktop from "../Presentation/PresentationDesktop";
import PresentationMobile from "../Presentation/PresentationMobile";
import ProjectCards from "../ProjectCards";
import {
  eCommerceSnearkers,
  onlineDictionary,
  crowFunding,
  passwordGenerator,
} from "../../data/projectStack";
import Skills from "../Skills";

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
        <div className=" section_design flex flex-col border-VinRouge lg:flex-row lg:flex-wrap lg:justify-between">
          <ProjectCards
            name={
              <>
                e-commerce sneakers
                <div className=" mt-4 flex flex-row">
                  {eCommerceSnearkers.map((item, index) => (
                    <div key={index} className="project_stack">
                      {item.icon}
                    </div>
                  ))}
                </div>
              </>
            }
            url={"#"}
          />
          <ProjectCards
            name={
              <>
                online dictionary
                <div className=" mt-4 flex flex-row">
                  {onlineDictionary.map((item, index) => (
                    <div key={index} className="project_stack">
                      {item.icon}
                    </div>
                  ))}
                </div>
              </>
            }
            url={"https://jodieaddis.github.io/online-dictionary/"}
          />
          <ProjectCards
            name={
              <>
                crowdfunding product page
                <div className=" mt-4 flex flex-row">
                  {crowFunding.map((item, index) => (
                    <div key={index} className="project_stack">
                      {item.icon}
                    </div>
                  ))}
                </div>
              </>
            }
            url={"https://jodieaddis.github.io/crowdfunding_product_page/"}
          />
          <ProjectCards
            name={
              <>
                password generator
                <div className=" mt-4 flex flex-row justify-center">
                  {passwordGenerator.map((item, index) => (
                    <div key={index} className="project_stack">
                      {item.icon}
                    </div>
                  ))}
                </div>
              </>
            }
            url={"https://jodieaddis.github.io/Password-generator/"}
          />
        </div>
      </section>
      <section className="mb-10 mt-28">
        <Heading
          kind={"h2"}
          content={"cosmic contact hub"}
          css={"section_heading"}
          id={"contact"}
        />
        <div className="section_design border-Charm">
          <Form />
        </div>
      </section>
    </>
  );
};

export default Component;
