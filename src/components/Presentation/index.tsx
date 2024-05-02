import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <div className="mx-36">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div>
          <div className="h-64 w-64 rounded-full border-[1px] border-solid border-white"></div>
        </div>
        <Paragraph
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
          css={"text-2xl mx-10 leading-relaxed"}
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
        <Paragraph
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
          css={"text-2xl ml-16 leading-relaxed mx-10 text-justify"}
        />
        <div>
          <div className="h-64 w-64 rounded-full border-[1px] border-solid border-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Component;
