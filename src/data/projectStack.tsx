import { ReactNode } from "react";
import IconSkills from "../icons/IconSkills";

export interface ProjectStackItem {
  icon: ReactNode;
  name: string;
}

export const passwordGenerator: ProjectStackItem[] = [
  { icon: <IconSkills kind={"javascript"} />, name: "react" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
];

export const crowFunding: ProjectStackItem[] = [
  { icon: <IconSkills kind={"react"} />, name: "react" },
  { icon: <IconSkills kind={"typescript"} />, name: "typescript" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
];

export const onlineDictionary: ProjectStackItem[] = [
  { icon: <IconSkills kind={"react"} />, name: "react" },
  { icon: <IconSkills kind={"typescript"} />, name: "typescript" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
];

export const eCommerceSnearkers: ProjectStackItem[] = [
  { icon: <IconSkills kind={"react"} />, name: "react" },
  { icon: <IconSkills kind={"typescript"} />, name: "typescript" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
];

export const planetFactSite: ProjectStackItem[] = [
  { icon: <IconSkills kind={"react"} />, name: "react" },
  { icon: <IconSkills kind={"typescript"} />, name: "typescript" },
  { icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
];
