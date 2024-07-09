import Heading from "../../typographies/Heading";

interface ProjectCardsProps {
  name: string;
  url: string;
  imgPath: string;
  imgAlt: string;
  index: number;
}

const Component = ({
  name,
  url,
  imgPath,
  imgAlt,
  index,
}: ProjectCardsProps) => {
  return (
    <a
      className="mb-4 w-[280px] lg:mx-6 lg:w-[330px] lg:transition lg:duration-100 lg:hover:rotate-6 lg:hover:scale-[115%]"
      href={url}
      target="_blank"
      key={index}
    >
      <div className=" w-full rounded-lg border-[1px] border-solid border-white ">
        <div className="flex w-full flex-row border-b-[1px] border-white bg-VinRouge bg-opacity-30">
          <span className="mx-2 my-2 h-3 w-3 rounded-full bg-white"></span>
          <span className="mx-2 my-2 h-3 w-3 rounded-full bg-white"></span>
          <span className="mx-2 my-2 h-3 w-3 rounded-full bg-white"></span>
        </div>
        <div className="h-[180px] w-full overflow-hidden rounded-b-lg">
          <img
            src={imgPath}
            alt={imgAlt}
            className="rounded-b-lg object-cover"
          />
        </div>
      </div>
      {/* <Heading kind={"h3"} content={name} css={"uppercase text-center mt-3"} /> */}
    </a>
  );
};

export default Component;
