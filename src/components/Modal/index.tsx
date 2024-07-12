import { createPortal } from "react-dom";
import Paragraph from "../../typographies/Paragraph";
import Button from "../Button";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";

interface ModalProps {
  text: string;
  btnContent: string | ReactNode;
  onclose: () => void;
}

const Component = ({ text, btnContent, onclose }: ModalProps) => {
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
        <div className="flex w-[350px] flex-col justify-center rounded-xl border-[1px] border-solid border-Charm bg-BlueCharcoal py-12 font-bold text-white">
          <p className="mx-10 mb-6 text-center font-Kumbh text-lg tracking-widest">
            {text}
          </p>
          <button
            onClick={onclose}
            className="border-[1px] border-solid border-Charm font-Montserrat"
          >
            {btnContent}
          </button>
        </div>
      </div>,
      idElement,
    )
  ) : (
    <>section non trouvée</>
  );
};

// return (
//   <>
//     {idElement ? (
//       createPortal(
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
//           <div className="flex w-[350px] flex-col justify-center rounded-xl border-[1px] border-solid border-Charm bg-BlueCharcoal py-12 font-bold text-white">
//             <Paragraph
//               content={text}
//               css="text-center mx-10 text-lg mb-6 font-Kumbh tracking-widest"
//             />
//             <Button
//               content={btnContent}
//               onClick={onclose}
//               css="font-Montserrat border-Charm border-solid border-[1px]"
//             />
//           </div>
//         </div>,
//         idElement,
//       )
//     ) : (
//       <>section non trouvée</>
//     )}
//   </>
//   );
// };

export default Component;
