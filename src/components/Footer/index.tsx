import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <nav className="mt-20 flex flex-col justify-center bg-BlueCharcoal py-5 lg:flex-row">
      <div className="mb-3 text-sm lg:mb-0">
        <a href="#presentation" className="footer_item">
          Home
        </a>
        <a
          href="https://www.linkedin.com/in/jodieaddis/"
          target="blank_"
          className="footer_item"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/JodieAddis"
          target="blank_"
          className="footer_item"
        >
          Github
        </a>
      </div>
      <Paragraph
        content="•"
        css="text-xl flex justify-center item-center text-center mb-3 lg:mb-0"
      />
      <Paragraph
        content="©2024 Jodie Addis"
        css="footer_item text-xs lg:text-sm"
      />
    </nav>
  );
};
export default Component;
