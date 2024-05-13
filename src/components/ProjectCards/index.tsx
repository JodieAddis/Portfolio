import { ReactNode } from "react";
import Paragraph from "../../typographies/Paragraph";

interface ProjectCardsProps {
  name: string | ReactNode;
  url: string;
}

const Component = ({ name, url }: ProjectCardsProps) => {
  return (
    <a className="flex justify-center" href={url} target="_blank">
      <div className="m-8 flex h-[180px] w-[250px] flex-col items-center rounded-xl border-2 border-solid border-white">
        <div className="mt-2.5 flex h-[140px] w-[220px] items-center justify-center rounded-xl border-2 border-solid border-white bg-VinRouge bg-opacity-20 lg:flex-col">
          <Paragraph
            content={name}
            css={"uppercase font-Montserrat font-bold text-lg text-center mx-4"}
          />
        </div>
      </div>
    </a>
  );
};

export default Component;
