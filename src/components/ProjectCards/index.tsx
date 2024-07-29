interface ProjectCardsProps {
  name: string;
  url: string;
  imgPath: string;
  imgAlt: string;
  index: number;
}

const Component = ({ url, imgPath, imgAlt, index }: ProjectCardsProps) => {
  return (
    <a
      className=" mb-4 mt-8 w-[260px] lg:mx-6 lg:mt-0 lg:w-[330px] lg:transition lg:duration-100 lg:hover:rotate-6 lg:hover:scale-[115%]"
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
        <div className="h-[150px] w-full overflow-hidden rounded-b-lg lg:h-[180px]">
          <img
            loading="lazy"
            src={imgPath}
            alt={imgAlt}
            className="rounded-b-lg object-cover"
          />
        </div>
      </div>
    </a>
  );
};

export default Component;
