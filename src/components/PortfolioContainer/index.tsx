import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";
import Presentation from "../Presentation";
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
        <div className="border-Downriver mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          <Presentation />
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
        <div className="border-Bossanova mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
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
        <div className=" border-VinRouge mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          TEST
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"cosmic contact hub"}
          css={"section_heading"}
          id={"contact"}
        />
        <div className="border-Charm mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          TEST
        </div>
      </section>
    </>
  );
};

export default Component;
