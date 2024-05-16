import { ReactNode } from "react";
import IconSkills from "../icons/IconSkills";
import IconWeb from "../icons/IconWeb";

export interface ProjectStackItem {
  type: "icon" | "urlHost";
  icon?: ReactNode;
  name?: string;
  url?: string;
  host?: ReactNode;
}

export const passwordGenerator: ProjectStackItem[] = [
  { type: "icon", icon: <IconSkills kind={"react"} />, name: "react" },
  {
    type: "icon",
    icon: <IconSkills kind={"typescript"} />,
    name: "typescript",
  },
  { type: "icon", icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  {
    type: "urlHost",
    url: "https://jodieaddis.github.io/Password-generator/",
    host: <IconWeb />,
  },
];

export const crowFunding: ProjectStackItem[] = [
  { type: "icon", icon: <IconSkills kind={"react"} />, name: "react" },
  {
    type: "icon",
    icon: <IconSkills kind={"typescript"} />,
    name: "typescript",
  },
  { type: "icon", icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  {
    type: "urlHost",
    url: "https://65fea56c32d3f4e6395747c9-lhosmnuvto.chromatic.com/",
    host: <IconSkills kind="storybook" />,
  },
  {
    type: "urlHost",
    url: "https://jodieaddis.github.io/crowdfunding_product_page/",
    host: <IconWeb />,
  },
];

export const onlineDictionary: ProjectStackItem[] = [
  { type: "icon", icon: <IconSkills kind={"react"} />, name: "react" },
  {
    type: "icon",
    icon: <IconSkills kind={"typescript"} />,
    name: "typescript",
  },
  { type: "icon", icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  {
    type: "urlHost",
    url: "https://66028c5f30a593dce34bd401-kelrxyxbxg.chromatic.com/",
    host: <IconSkills kind="storybook" />,
  },
  {
    type: "urlHost",
    url: "https://jodieaddis.github.io/online-dictionary/",
    host: <IconWeb />,
  },
];

export const eCommerceSnearkers: ProjectStackItem[] = [
  { type: "icon", icon: <IconSkills kind={"react"} />, name: "react" },
  {
    type: "icon",
    icon: <IconSkills kind={"typescript"} />,
    name: "typescript",
  },
  { type: "icon", icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  {
    type: "urlHost",
    url: "https://6644b697f6f99754887beb30-wfxbruhnsu.chromatic.com/?path=/docs/components-button--docs",
    host: <IconSkills kind="storybook" />,
  },
  {
    type: "urlHost",
    url: "https://jodieaddis.github.io/e-commerce-sneakers/",
    host: <IconWeb />,
  },
];

export const planetFactSite: ProjectStackItem[] = [
  { type: "icon", icon: <IconSkills kind={"react"} />, name: "react" },
  {
    type: "icon",
    icon: <IconSkills kind={"typescript"} />,
    name: "typescript",
  },
  { type: "icon", icon: <IconSkills kind={"tailwind"} />, name: "tailwind" },
  {
    type: "urlHost",
    url: "https://planets-fact-site-rosy-delta.vercel.app/",
    host: <IconWeb />,
  },
];
