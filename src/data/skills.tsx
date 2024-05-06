import { ReactNode } from "react";
import IconSkills from "../icons/IconSkills";

export interface StackItem {
  icon: ReactNode;
  name: string;
}

const stackData: StackItem[] = [
  { icon: <IconSkills kind={"react"} />, name: "react" },
  { icon: <IconSkills kind={"reactrouter"} />, name: "react router" },
  { icon: <IconSkills kind={"sass"} />, name: "sass" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  { icon: <IconSkills kind={"typescript"} />, name: "typescript" },
  { icon: <IconSkills kind={"javascript"} />, name: "javascript" },
  { icon: <IconSkills kind={"figma"} />, name: "figma" },
  { icon: <IconSkills kind={"git"} />, name: "git" },
  { icon: <IconSkills kind={"storybook"} />, name: "storybook" },
  { icon: <IconSkills kind={"photoshop"} />, name: "photoshop" },
];

export default stackData;
