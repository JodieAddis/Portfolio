import useScreenSize from "../../hook/useScreenSize";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import Form from "../Form";
import PresentationDesktop from "../Presentation/PresentationDesktop";
import PresentationMobile from "../Presentation/PresentationMobile";
import ProjectCards from "../ProjectCards";
import {
  eCommerceSnearkers,
  planetFactSite,
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
        <div className=" section_design flex flex-col border-VinRouge lg:flex-row lg:flex-wrap lg:justify-between">
          <ProjectCards
            name={"planet fact site"}
            stack={planetFactSite.map((item, index) => (
              <div>
                {item.type === "icon" && (
                  <div className="project_stack" key={index}>
                    {item.icon}
                  </div>
                )}
              </div>
            ))}
            hosting={planetFactSite.map((item, index) => (
              <div className="flex flex-row" key={index}>
                {item.type === "urlHost" && (
                  <a href={item.url} className="project_stack" target="blank_">
                    {item.host}
                  </a>
                )}
              </div>
            ))}
          />

          <ProjectCards
            name={"e-commerce"}
            stack={eCommerceSnearkers.map((item, index) => (
              <div>
                {item.type === "icon" && (
                  <div className="project_stack" key={index}>
                    {item.icon}
                  </div>
                )}
              </div>
            ))}
            hosting={eCommerceSnearkers.map((item, index) => (
              <div className="flex flex-row" key={index}>
                {item.type === "urlHost" && (
                  <a href={item.url} className="project_stack" target="blank_">
                    {item.host}
                  </a>
                )}
              </div>
            ))}
          />
          <ProjectCards
            name={"online dictionary"}
            stack={onlineDictionary.map((item, index) => (
              <div>
                {item.type === "icon" && (
                  <div className="project_stack" key={index}>
                    {item.icon}
                  </div>
                )}
              </div>
            ))}
            hosting={onlineDictionary.map((item, index) => (
              <div className="flex flex-row" key={index}>
                {item.type === "urlHost" && (
                  <a href={item.url} className="project_stack" target="blank_">
                    {item.host}
                  </a>
                )}
              </div>
            ))}
          />
          <ProjectCards
            name={"crowdfunding product page"}
            stack={crowFunding.map((item, index) => (
              <div>
                {item.type === "icon" && (
                  <div className="project_stack" key={index}>
                    {item.icon}
                  </div>
                )}
              </div>
            ))}
            hosting={crowFunding.map((item, index) => (
              <div className="flex flex-row" key={index}>
                {item.type === "urlHost" && (
                  <a href={item.url} className="project_stack" target="blank_">
                    {item.host}
                  </a>
                )}
              </div>
            ))}
          />
          <ProjectCards
            name={"password generator"}
            stack={passwordGenerator.map((item, index) => (
              <div>
                {item.type === "icon" && (
                  <div className="project_stack" key={index}>
                    {item.icon}
                  </div>
                )}
              </div>
            ))}
            hosting={passwordGenerator.map((item, index) => (
              <div className="flex flex-row" key={index}>
                {item.type === "urlHost" && (
                  <a href={item.url} className="project_stack" target="blank_">
                    {item.host}
                  </a>
                )}
              </div>
            ))}
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
