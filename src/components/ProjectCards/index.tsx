import Paragraph from "../../typographies/Paragraph";

interface ProjectCardsProps {
  name: string;
  url: string;
}

const Component = ({ name, url }: ProjectCardsProps) => {
  return (
    <a className="flex justify-center" href={url} target="_blank">
      <div className="m-8 flex h-[180px] w-[250px] flex-col items-center justify-center rounded-xl border-2 border-solid border-white">
        <div className="mt-2.5 flex h-[140px] w-[220px] items-center justify-center rounded-xl border-2 border-solid border-white bg-VinRouge bg-opacity-20">
          <Paragraph
            content={name}
            css={"uppercase font-Montserrat font-bold text-lg text-center mx-4"}
          />
        </div>
        <div className="my-1 flex flex-row items-center">
          <span className="h-4 w-4 rounded-full bg-Bossanova"></span>
          <span className="mx-6 h-4 w-4 rounded-full bg-VinRouge"></span>
          <span className="h-4 w-4 rounded-full bg-Downriver"></span>
        </div>
      </div>
    </a>
  );
};

export default Component;
