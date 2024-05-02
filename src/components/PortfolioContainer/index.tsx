import Heading from "../../typographies/Heading";
import Presentation from "../Presentation";
import Skills from "../Skills";

const Component = () => {
  return (
    <>
      <section className="mt-40">
        <Heading
          kind={"h2"}
          content={"who am i?"}
          css={"heading"}
          id={"presentation"}
        />
        <div className="border-Pistachio mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          <Presentation />
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"my stellar abilities"}
          css={"heading"}
          id={"abilities"}
        />
        <div className="border-CaribbeanGreen mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          <Skills />
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"beyond the stars: my projects"}
          css={"heading"}
          id={"projets"}
        />
        <div className=" border-Purple mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          TEST
        </div>
      </section>
      <section className="mt-28">
        <Heading
          kind={"h2"}
          content={"cosmic contact hub"}
          css={"heading"}
          id={"contact"}
        />
        <div className="border-Pink mx-28 mt-4 rounded-xl border-[1px] border-solid bg-black bg-opacity-30">
          TEST
        </div>
      </section>
    </>
  );
};

export default Component;
