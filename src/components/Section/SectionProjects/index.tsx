import { useState } from "react";
import ProjectCards from "../../ProjectCards";
import { projectData } from "../../../data/projectStack";
import Button from "../../Button";

const Component = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <>
      <>
        <div className="grid w-full justify-items-center self-center lg:mt-5 lg:grid-cols-3">
          {projectData.slice(0, visibleProjects).map((project, index) => (
            <ProjectCards
              key={index}
              name={project.name}
              url={project.url}
              github={project.github}
              imgPath={project.img}
              imgAlt={`Home page picture of the application "${project.name}"`}
              index={index}
              stack={project.stacks}
            />
          ))}
        </div>
        {visibleProjects < projectData.length && (
          <Button
            content="load more"
            css="my-10 capitalize font-Montserrat py-2 px-4 border-VinRouge border-solid border-2 rounded-lg hover:bg-VinRouge hover:text-white hover:font-extrabold"
            onClick={handleLoadMore}
          />
        )}
      </>
    </>
  );
};

export default Component;
