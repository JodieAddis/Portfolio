import { useState } from "react";
import ProjectCards from "../../ProjectCards";
import { projectData } from "../../../data/projectStack";
import useScreenSize from "../../../hook/useScreenSize";
import Button from "../../Button";
import Heading from "../../../typographies/Heading";

const Component = () => {
  const isMobile = useScreenSize();
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <>
      {isMobile ? (
        <>
          {projectData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCards
              key={index}
              name={project.name}
              url={project.url}
              imgPath={project.img}
              imgAlt={`Home page picture of the application "${project.name}"`}
              index={index}
            />
          ))}
          {visibleProjects < projectData.length && (
            <Button
              content="load more"
              css="my-10 capitalize font-Montserrat py-2 px-4 border-VinRouge border-solid border-2 rounded-lg hover:bg-VinRouge hover:text-white hover:font-extrabold"
              onClick={handleLoadMore}
            />
          )}
        </>
      ) : (
        <>
          {projectData.map((project, index) => (
            <div className="my-10 flex flex-col">
              <ProjectCards
                key={index}
                name={project.name}
                url={project.url}
                imgPath={project.img}
                imgAlt={`Home page picture of the application "${project.name}"`}
                index={index}
              />
              <Heading
                kind={"h3"}
                content={project.name}
                css={"uppercase text-center"}
              />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Component;
