type Stack = "AstroJs" | "Javascript" | "React" | "Tailwind" | "Typescript";

export interface ProjectStackItem {
  name: string;
  url: string;
  github: string;
  img: string;
  stacks: Stack[];
}

export const projectData: ProjectStackItem[] = [
  {
    name: "space tourism",
    url: "https://jodieaddis.github.io/space-tourism/",
    github: "https://github.com/JodieAddis/space-tourism",
    img: "/assets/images/space-tourism.webp",
    stacks: ["AstroJs"],
  },
  {
    name: "planets fact site",
    url: "https://planets-fact-site-rosy-delta.vercel.app/",
    github: "https://github.com/JodieAddis/Planets-Fact-Site",
    img: "/assets/images/planets-fact-site.webp",
    stacks: ["React", "Typescript"],
  },
  {
    name: "e-commerce sneakers",
    url: "https://jodieaddis.github.io/e-commerce-sneakers/",
    github: "https://github.com/JodieAddis/e-commerce-sneakers",
    img: "/assets/images/e-commerce-sneakers.webp",
    stacks: ["React", "Typescript"],
  },
  {
    name: "online dictionnary",
    url: "https://jodieaddis.github.io/online-dictionary/",
    github: "https://github.com/JodieAddis/online-dictionary",
    img: "/assets/images/online-dictionary.webp",
    stacks: ["React", "Typescript"],
  },
  {
    name: "crowFunding product page",
    url: "https://jodieaddis.github.io/crowdfunding_product_page/",
    github: "https://github.com/JodieAddis/crowdfunding_product_page",
    img: "/assets/images/crowdfunding_product_page.webp",
    stacks: ["React", "Typescript"],
  },
];
