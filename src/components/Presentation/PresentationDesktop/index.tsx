import WordRotate from "../../MagicUi/WordRotate/index";
import Paragraph from "../../../typographies/Paragraph";
import profilePicture from "../../../../public/assets/images/profile-picture.webp";

const Component = () => {
  return (
    <div className="m-16">
      <div className="flex flex-col items-center justify-center lg:flex-row">
        <div>
          <div className="mr-6 h-80 w-80 rounded-full border-[3px] border-solid border-Downriver">
            <img src={profilePicture} alt="Profile picture" />
          </div>
        </div>
        <Paragraph
          content={
            <div className="relative flex flex-col overflow-hidden">
              <span>
                <p className="text-center">
                  Hi, My name is Jodie. I'm a React Developer and I'm
                </p>
                <div className="flex justify-center self-center capitalize">
                  <WordRotate
                    words={[
                      "Sci-Fi film aficionado",
                      "fantasy story devotee",
                      "nature lover",
                      "photography enthusiast",
                      "aspiring artist",
                    ]}
                  />
                </div>
              </span>
            </div>
          }
          css="text-4xl ml-16 leading-relaxed text-justify font-Kumbh flex flex-row"
        />
      </div>
      <div className="mt-16 flex flex-col items-center justify-center lg:flex-row">
        <div>
          <Paragraph
            content="Curiosity has always been a part of me, ever since I was young. I've always been interested in my surroundings because I love to understand how things work and why. This curiosity led me to pursue a scientific education, and it's also what, a year ago, steered me toward a career change into web development."
            css="text-xl leading-relaxed text-justify leading-relaxed font-Kumbh tracking-widest"
          />
          <Paragraph
            content="I quickly became interested in coding and how websites are built. After a first professional experience, I continue today to code various projects to learn more about web technologies."
            css="mt-8 text-xl leading-relaxed text-justify leading-relaxed font-Kumbh tracking-widest"
          />
          <Paragraph
            content="My goal is to keep improving my web development skills by exploring new technologies and working on innovative projects. I am also motivated by continuous learning and collaborating with other developers to create effective and elegant web solutions."
            css="mt-8 text-xl leading-relaxed text-justify leading-relaxed font-Kumbh tracking-widest"
          />
        </div>
      </div>
    </div>
  );
};

export default Component;
