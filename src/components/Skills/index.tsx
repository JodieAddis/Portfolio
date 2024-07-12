import Button from "../Button";
import StackCards from "../StackCards";
import skills from "../../data/skills";
import { useState } from "react";
import useScreenSize from "../../hook/useScreenSize";

const Component = () => {
  const [showSkills, setShowSkills] = useState(false);

  const visibleSkills = showSkills ? skills : skills.slice(0, 6);

  const isMobile = useScreenSize();
  return (
    <div className=" lg:grid lg:grid-cols-7">
      {isMobile ? (
        <>
          <div className="grid grid-cols-2">
            {visibleSkills.map((skill, index) => (
              <StackCards
                key={index}
                iconLogo={skill.icon}
                stackName={skill.name}
              />
            ))}
          </div>
          <div className="flex justify-center">
            {!showSkills && (
              <Button
                content={"see more"}
                onClick={() => {
                  setShowSkills(true);
                }}
                css="my-10 capitalize font-Montserrat py-2 px-4 border-Bossanova border-solid border-2 rounded-lg hover:bg-Bossanova hover:text-white hover:font-extrabold"
              />
            )}
          </div>
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
