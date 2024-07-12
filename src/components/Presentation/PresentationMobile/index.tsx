import Paragraph from "../../../typographies/Paragraph";
import profilePicture from "../../../../public/assets/images/profile-picture.webp";

const Component = () => {
  return (
    <div className="m-8 ">
      <div className="mt-8 flex flex-col items-center justify-center">
        <div>
          <div className="h-64 w-64 rounded-full border-[3px] border-solid border-Downriver">
            <img src={profilePicture} alt="Profile picture" />
          </div>
        </div>
        <Paragraph
          content="Hi, My name is Jodie. I'm a React Developer."
          css="text-2xl leading-relaxed text-center font-Kumbh mt-8"
        />
      </div>
      <Paragraph
        content="Curiosity has always been a part of me, ever since I was young. I've always been interested in my surroundings because I love to understand how things work and why. This curiosity led me to pursue a scientific education, and it's also what, a year ago, steered me toward a career change into web development."
        css="text-xl leading-relaxed text-justify leading-relaxed font-Kumbh mt-14"
      />
      <Paragraph
        content="I quickly became interested in coding and how websites are built. After a first professional experience, I continue today to code various projects to learn more about web technologies."
        css="mt-8 text-xl leading-relaxed text-justify leading-relaxed font-Kumbh"
      />
      <Paragraph
        content="My goal is to keep improving my web development skills by exploring new technologies and working on innovative projects. I am also motivated by continuous learning and collaborating with other developers to create effective and elegant web solutions."
        css="mt-8 text-xl leading-relaxed text-justify leading-relaxed font-Kumbh "
      />
    </div>
  );
};

export default Component;
