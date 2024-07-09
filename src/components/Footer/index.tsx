import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  return (
    <nav className="mt-20 flex flex-row justify-center bg-BlueCharcoal py-5">
      <Paragraph content="©2024 Jodie Addis" css="footer_item" />
      <Paragraph content="|" css="footer_item" />
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
    </nav>
  );
};
export default Component;
