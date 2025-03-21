import Button from "../Button";
import { ChangeEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { formError } from "../../types/interface";
import Modal from "../Modal";
import Paragraph from "../../typographies/Paragraph";
import { validateForm } from "../../utils/validateForm";

const Component = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isInvalidForm, setIsInvalidForm] = useState<boolean>(true);
  const [error, setError] = useState<formError>({
    userName: "",
    userEmail: "",
    message: "",
    formatError: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const isValidate = validateForm({
    userName: userName,
    userEmail: userEmail,
    message: message,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    callback: (newValue: string) => void,
  ) => {
    callback(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsInvalidForm(!isValidate.isValid);
    setError(isValidate.error);

    if (!isValidate.isValid) {
      alert("error");
      return;
    }

    const formParams = {
      user_name: userName,
      user_email: userEmail,
      to_name: "Jodie",
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formParams,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then((response) => {
        console.log("Email send succefully", response);
        setUserName("");
        setUserEmail("");
        setMessage("");
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("server down, contact me by email");
      });
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden lg:ml-8 lg:w-full lg:items-start ">
      {modalIsOpen && (
        <Modal
          text="Your message has been successfully sent !"
          onclose={() => setModalIsOpen(false)}
        />
      )}
      <form className="mt-6 flex w-5/6 flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white lg:py-2"
          placeholder="Name"
          value={userName}
          onChange={(e) => {
            handleInputChange(e, setUserName);
          }}
        />
        {isInvalidForm && (
          <Paragraph
            content={<>{error.userName}</>}
            css="mb-6 text-xs text-red-500"
          />
        )}
        <input
          type="email"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white lg:py-2"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => {
            handleInputChange(e, setUserEmail);
          }}
        />
        {isInvalidForm && (
          <Paragraph
            content={<>{error.userEmail}</>}
            css="mb-6 text-xs text-red-500"
          />
        )}
        <textarea
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Message"
          value={message}
          onChange={(e) => {
            handleInputChange(e, setMessage);
          }}
          rows={6}
        ></textarea>
        {isInvalidForm && (
          <Paragraph
            content={<>{error.message}</>}
            css="mb-6 text-xs text-red-500"
          />
        )}
        <div className="flex justify-center">
          <Button
            content={"send"}
            css="capitalize font-Montserrat py-2 px-4 border-Charm border-solid border-2 rounded-lg hover:bg-Charm hover:text-white hover:font-extrabold"
          />
        </div>
      </form>
    </div>
  );
};

export default Component;
