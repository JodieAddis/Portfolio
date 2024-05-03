import Heading from "../../typographies/Heading";
import Paragraph from "../../typographies/Paragraph";

interface ProjectCardsProps {
  name: string;
  description: string;
  url: string;
}

const Component = ({ name, description, url }: ProjectCardsProps) => {
  return (
    <a href={url} target="_blank">
      <div
        className="border-VinRouge mx-8 my-6 rounded-lg
    border-2 border-solid bg-BlueCharcoal lg:m-10 lg:h-[300px] lg:w-[300px]"
      >
        <div className="w-content h-[200px] rounded-t-lg bg-white">IMAGE</div>
        <div className="m-4">
          <Heading
            kind={"h3"}
            content={name}
            css={"uppercase font-Montserrat text-base text-center"}
          />
          <Paragraph
            content={description}
            css={
              "font-Kumbh tracking-widest mt-5 text-sm capitalize text-center"
            }
          />
        </div>
      </div>
    </a>
  );
};

export default Component;
