import { ReactNode } from "react";
import Heading from "../../typographies/Heading";

interface StackCardsProps {
  iconLogo: ReactNode;
  stackName: string;
}

const Component = ({ iconLogo, stackName }: StackCardsProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <div className="icon_design">{iconLogo}</div>
      <Heading kind={"h3"} content={stackName} css={"stack_heading"} />
    </div>
  );
};

export default Component;
