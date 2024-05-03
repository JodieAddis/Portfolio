import { useState } from "react";
import IconMenu from "../../../icons/IconMenu";
import Button from "../../Button";
import IconClose from "../../../icons/IconClose";
import Paragraph from "../../../typographies/Paragraph";

const Component = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-full bg-BlueCharcoal">
          <div className="flex justify-end">
            <Button
              content={<IconClose />}
              onClick={() => {
                setIsOpen(false);
              }}
              css="m-4"
            />
          </div>
          <nav className="mt-16 flex flex-col">
            <a
              className="ml-10 flex flex-row"
              href="#presentation"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="bg-Downriver flex h-6 w-6 items-center rounded-full"></div>
              <Paragraph content={"presentation"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#abilities"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="bg-Bossanova flex h-6 w-6 items-center rounded-full"></div>
              <Paragraph content={"skills"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#projets"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="bg-VinRouge flex h-6 w-6 items-center rounded-full"></div>
              <Paragraph content={"projects"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <div className="bg-Charm flex h-6 w-6 items-center rounded-full"></div>
              <Paragraph content={"contact"} css={"navbar_mobile"} />
            </a>
          </nav>
        </div>
      ) : (
        <div className="flex justify-between p-4">
          <p>LOGO</p>
          <Button
            content={<IconMenu />}
            onClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      )}
    </>
  );
};

export default Component;
