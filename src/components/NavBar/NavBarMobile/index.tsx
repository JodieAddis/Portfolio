import { useState } from "react";
import Button from "../../Button";
import Paragraph from "../../../typographies/Paragraph";
import IconNavBar from "../../../icons/IconNavBar";

const Component = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <>
      {isOpen ? (
        <div className="absolute h-screen w-full bg-BlueCharcoal">
          <div className="flex justify-end">
            <Button
              content={<IconNavBar kind={"close"} />}
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
              <span className="navbar_mobile_circle bg-Downriver"></span>
              <Paragraph content={"presentation"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#abilities"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span className="navbar_mobile_circle bg-Bossanova"></span>
              <Paragraph content={"skills"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#projets"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span className="navbar_mobile_circle bg-VinRouge"></span>
              <Paragraph content={"projects"} css={"navbar_mobile"} />
            </a>
            <a
              className="ml-10 flex flex-row"
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <span className="navbar_mobile_circle bg-Charm"></span>
              <Paragraph content={"contact"} css={"navbar_mobile"} />
            </a>
          </nav>
        </div>
      ) : (
        <div className="flex justify-between p-4">
          <p>LOGO</p>
          <Button
            content={<IconNavBar kind={"open"} />}
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