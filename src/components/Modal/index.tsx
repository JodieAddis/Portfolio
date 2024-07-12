import { createPortal } from "react-dom";
import Paragraph from "../../typographies/Paragraph";
import Button from "../Button";
import { useEffect, useState } from "react";
import Meteors from "../MagicUi/Meteors";
import IconNavBar from "../../icons/IconNavBar";
import IconCheck from "../../icons/IconCheck";

interface ModalProps {
  text: string;
  onclose: () => void;
}

const Component = ({ text, onclose }: ModalProps) => {
  const [idElement, setIdElement] = useState<HTMLElement | null>(null);

  //Vérification que l'élément DOM avec l'id "contact-section" est rendu avant que la modale ne soit montré:
  useEffect(() => {
    const element = document.getElementById("contact-section");
    if (element) {
      setIdElement(element);
    }
  }, []);

  if (!idElement) {
    return null;
  }

  return idElement ? (
    createPortal(
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className=" relative flex w-[350px] flex-col justify-center rounded-xl border-[1px] border-solid border-Charm bg-BlueCharcoal py-12 font-bold text-white">
          <div className="flex justify-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-solid border-Charm">
              <IconCheck />
            </div>
          </div>
          <Paragraph
            content={text}
            css="mx-10 text-center font-light font-Kumbh text-lg tracking-widest leading-loose"
          />
          <div>
            <Button
              content={<IconNavBar kind="close" />}
              onClick={onclose}
              css="bg-Charm font-Montserrat rounded-md absolute top-2 right-2"
            />
          </div>
        </div>
      </div>,
      idElement,
    )
  ) : (
    <>section non trouvée</>
  );
};

export default Component;
