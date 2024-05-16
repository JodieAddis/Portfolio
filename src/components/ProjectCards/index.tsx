import { ReactNode } from "react";
import Paragraph from "../../typographies/Paragraph";

interface ProjectCardsProps {
  name: string | ReactNode;
  stack: string | ReactNode;
  hosting: string | ReactNode;
}

const Component = ({ name, stack, hosting }: ProjectCardsProps) => {
  return (
    <div className="flex justify-center">
      <div className="m-8 flex  w-[280px] flex-col items-center rounded-xl border-2 border-solid border-white">
        <div className="mt-2.5 flex h-[140px] w-[250px] items-center justify-center rounded-xl border-2 border-solid border-white bg-VinRouge bg-opacity-20 lg:flex-col">
          <Paragraph
            content={name}
            css={"uppercase font-Montserrat font-bold text-lg text-center mx-4"}
          />
        </div>
        <div className="mx-3 flex w-full flex-col items-center justify-center">
          <div className="my-6 flex flex-row">{stack}</div>
          <div className="h-[1px] w-1/2 bg-white"></div>
          <div className="my-6 flex flex-row">{hosting}</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
