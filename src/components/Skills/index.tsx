import IconJavascript from "../../icons/IconJavascript";
import IconReact from "../../icons/IconReact";
import IconTailwind from "../../icons/IconTailwind";
import IconTypescript from "../../icons/IconTypescript";
import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="flex flex-row justify-around">
      <div className="flex flex-col items-center justify-center p-10">
        <Heading
          kind={"h3"}
          content={"react"}
          css={"uppercase text-lg font-Kumbh"}
        />
        <div className="mt-4 h-14 w-14">
          <IconReact />
        </div>
        <Paragraph content={"BLABLA"} css={"text-sm tracking-widest mt-4"} />
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <Heading
          kind={"h3"}
          content={"typescript"}
          css={"uppercase text-lg font-Kumbh"}
        />
        <div className="mt-4 h-14 w-14">
          <IconTypescript />
        </div>
        <Paragraph content={"BLABLA"} css={"text-sm tracking-widest mt-4"} />
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <Heading
          kind={"h3"}
          content={"tailwind"}
          css={"uppercase text-lg font-Kumbh"}
        />
        <div className="mt-4 h-14 w-14">
          <IconTailwind />
        </div>
        <Paragraph content={"BLABLA"} css={"text-sm tracking-widest mt-4"} />
      </div>
      <div className="flex flex-col items-center justify-center p-10">
        <Heading
          kind={"h3"}
          content={"javascript"}
          css={"uppercase text-lg font-Kumbh"}
        />
        <div className="mt-4 h-14 w-14">
          <IconJavascript />
        </div>
        <Paragraph content={"BLABLA"} css={"text-sm tracking-widest mt-4"} />
      </div>
    </div>
  );
};

export default Component;
