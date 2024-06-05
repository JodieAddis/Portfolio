import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="m-6 ">
      <div className="mt-8 flex flex-col items-center justify-center">
        <div>
          <div className="h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div>
        <Paragraph
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          css={"text-xl leading-relaxed text-justify font-Kumbh mt-8"}
        />
      </div>
      <div className="mt-8 flex flex-col items-center justify-center lg:flex-row">
        <div>
          <div className="h-64 w-64 rounded-full border-[3px] border-solid border-Downriver"></div>
        </div>
      </div>
      <Paragraph
        content={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        css={
          "text-sm leading-relaxed text-justify leading-relaxed font-Kumbh tracking-widest mt-8"
        }
      />
    </div>
  );
};

export default Component;
