import IconSkills from "../../icons/IconSkills";
import StackCards from "../StackCards";

const Component = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-around">
      <StackCards
        iconLogo={<IconSkills kind={"react"} />}
        stackName={"react"}
      />
      <StackCards
        iconLogo={<IconSkills kind={"reactrouter"} />}
        stackName={"react router"}
      />
      <StackCards iconLogo={<IconSkills kind={"sass"} />} stackName={"sass"} />
      <StackCards
        iconLogo={<IconSkills kind={"tailwind"} />}
        stackName={"tailwind"}
      />
      <StackCards
        iconLogo={<IconSkills kind={"typescript"} />}
        stackName={"typescript"}
      />
      <StackCards
        iconLogo={<IconSkills kind={"javascript"} />}
        stackName={"javascript"}
      />
      <StackCards
        iconLogo={<IconSkills kind={"figma"} />}
        stackName={"figma"}
      />
      <StackCards iconLogo={<IconSkills kind={"git"} />} stackName={"git"} />
      <StackCards
        iconLogo={<IconSkills kind={"storybook"} />}
        stackName={"storybook"}
      />
      <StackCards
        iconLogo={<IconSkills kind={"photoshop"} />}
        stackName={"photoshop"}
      />
    </div>
  );
};

export default Component;
