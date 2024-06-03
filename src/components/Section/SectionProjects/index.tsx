// import ProjectCards from "../../ProjectCards";
// import { projectData } from "../../../data/projectStack";
// import useScreenSize from "../../../hook/useScreenSize";
// import Button from "../../Button";

// const Component = () => {
//   const isMobile = useScreenSize();

//   return (
//     <>
//       {isMobile ? (
//         <>
//           {projectData.slice(0, 4).map((project, index) => (
//             <ProjectCards
//               key={index}
//               name={project.name}
//               url={project.url}
//               imgPath={project.img}
//               imgAlt={`Home page picture of the application "${project.name}"`}
//               index={index}
//             />
//           ))}
//             <Button
//               content="load more"
//               css="my-10 capitalize font-Kumbh py-2 px-4 border-VinRouge border-solid border-2 rounded-lg hover:bg-white hover:text-VinRouge hover:font-extrabold"
//             />

//         </>
//       ) : (
//         <>
//           {projectData.map((project, index) => (
//             <ProjectCards
//               key={index}
//               name={project.name}
//               url={project.url}
//               imgPath={project.img}
//               imgAlt={`Home page picture of the application "${project.name}"`}
//               index={index}
//             />
//           ))}
//         </>
//       )}
//     </>
//   );
// };

// export default Component;

import React, { useState } from "react";
import ProjectCards from "../../ProjectCards";
import { projectData } from "../../../data/projectStack";
import useScreenSize from "../../../hook/useScreenSize";
import Button from "../../Button";

const Component = () => {
  const isMobile = useScreenSize();
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
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
              css="my-10 capitalize font-Kumbh py-2 px-4 border-VinRouge border-solid border-2 rounded-lg hover:bg-white hover:text-VinRouge hover:font-extrabold"
              onClick={handleLoadMore}
            />
          )}
        </>
      ) : (
        <>
          {projectData.map((project, index) => (
            <ProjectCards
              key={index}
              name={project.name}
              url={project.url}
              imgPath={project.img}
              imgAlt={`Home page picture of the application "${project.name}"`}
              index={index}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Component;
