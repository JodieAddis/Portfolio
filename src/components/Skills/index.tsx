import IconJavascript from "../../icons/IconJavascript";
import IconReact from "../../icons/IconReact";
import IconTailwind from "../../icons/IconTailwind";
import IconTypescript from "../../icons/IconTypescript";
import StackCards from "../StackCards";

const Component = () => {
  return (
    <div className="flex flex-row justify-around">
      <StackCards iconLogo={<IconReact />} stackName={"react"} />
      <StackCards iconLogo={<IconTailwind />} stackName={"tailwind"} />
      <StackCards iconLogo={<IconTypescript />} stackName={"typescript"} />
      <StackCards iconLogo={<IconJavascript />} stackName={"javascript"} />
    </div>
  );
};

export default Component;
