import IconWeb from "../../icons/IconWeb";

interface ProjectCardsProps {
  name: string;
  url: string;
  github: string;
  imgPath: string;
  imgAlt: string;
  index: number;
  stack: string[];
}

const Component = ({
  name,
  url,
  github,
  imgPath,
  imgAlt,
  index,
  stack,
}: ProjectCardsProps) => {
  return (
    <>
      <div className="mb-4 mt-8 w-[260px] rounded-lg border-[1px] border-solid border-white bg-VinRouge bg-opacity-30 p-4 lg:mx-6 lg:mt-0 lg:w-[370px]">
        <div className="h-[130px] w-full overflow-hidden rounded-lg border-[1px] border-solid border-white lg:h-[180px]">
          <img
            loading="lazy"
            src={imgPath}
            alt={imgAlt}
            className="rounded-lg object-cover"
          />
        </div>
        <div>
          <div className="mt-4 flex flex-row justify-between">
            <div className="w-32 font-Kumbh text-lg font-bold uppercase lg:w-full">
              {name}
            </div>
            <div className="flex flex-row">
              <a href={url} target="_blank" key={index} className="mr-3">
                <IconWeb icon="web" />
              </a>
              <a href={github} target="_blank" key={index}>
                <IconWeb icon="github" />
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-row flex-wrap items-center justify-around overflow-hidden lg:justify-evenly">
            {stack.map((tech, idx) => (
              <span key={idx} className="project-stack">
                #{tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
