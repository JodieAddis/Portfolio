import Button from "../Button";
import StackCards from "../StackCards";
import skills from "../../data/skills";
import { useState } from "react";
import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const [showSkills, setShowSkills] = useState(false);

  const visibleSkills = showSkills ? skills : skills.slice(0, 5);

  const isMobile = useScreenSize();
  return (
    <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center">
      {isMobile ? (
        <>
          {visibleSkills.map((skill, index) => (
            <StackCards
              key={index}
              iconLogo={skill.icon}
              stackName={skill.name}
            />
          ))}

          {!showSkills && (
            <Button
              content={"see more"}
              onClick={() => {
                setShowSkills(true);
              }}
              css="my-10 capitalize font-Kumbh py-2 px-4 border-Bossanova border-solid border-2 rounded-lg hover:bg-white hover:text-Bossanova hover:font-extrabold"
            />
          )}
        </>
      ) : (
        <>
          {skills.map((skill, index) => (
            <StackCards
              key={index}
              iconLogo={skill.icon}
              stackName={skill.name}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Component;
