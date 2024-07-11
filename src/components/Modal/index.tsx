import { createPortal } from "react-dom";
import Paragraph from "../../typographies/Paragraph";
import Button from "../Button";
import { ReactNode } from "react";

interface ModalProps {
  text: string;
  btnContent: string | ReactNode;
  onclick: () => void;
}

const idElement = document.getElementById("contact-section");

const Component = ({ text, btnContent, onclick }: ModalProps) => {
  return (
    <>
      {idElement ? (
        createPortal(
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="flex w-[350px] flex-col justify-center rounded-xl bg-BlueCharcoal py-20 text-white">
              <Paragraph content={text} css="text-center" />
              <Button content={btnContent} onClick={onclick} />
            </div>
          </div>,
          idElement,
        )
      ) : (
        <>section non trouvée</>
      )}
    </>
  );
};

export default Component;
