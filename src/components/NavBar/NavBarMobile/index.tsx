import { useState } from "react";
import Button from "../../Button";
import Paragraph from "../../../typographies/Paragraph";
import IconNavBar from "../../../icons/IconNavBar";

const Component = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const tabs = ["presentation", "skills", "projects", "contact"];
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
            {tabs.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                onClick={() => {
                  setIsOpen(false);
                }}
                className="ml-10 flex flex-row"
              >
                <span className={`navbar_mobile_circle ${item}`}></span>
                <Paragraph content={item} css={"navbar_mobile"} />
              </a>
            ))}
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
