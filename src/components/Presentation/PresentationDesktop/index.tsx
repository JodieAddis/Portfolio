import WordRotate from "../../MagicUi/WordRotate/index";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="m-16 ">
      <div className="flex flex-row items-center justify-center">
        <div>
          <div className="mr-16 h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div>
        <Paragraph
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          css={"text-3xl lg:ml-16 leading-relaxed text-justify font-Kumbh"}
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
        <Paragraph
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          css={
            "text-xl leading-relaxed mr-16 text-justify leading-relaxed font-Kumbh tracking-widest"
          }
        />
        <div>
          <div className="ml-16 h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div>
        <div>
          <WordRotate words={["jodie", "cass", "Loic"]} />
        </div>
      </div>
    </div>
  );
};

export default Component;
