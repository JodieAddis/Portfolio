// import { useState } from "react";
// import Button from "../Button";
// import emailjs from "@emailjs/browser";

// const Component = () => {
//   const [userName, setUserName] = useState<string>("");
//   const [userEmail, setUserEmail] = useState<string>("");
//   const [message, setMessage] = useState<string>("");

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();

//     const formParams = {
//       user_name: userName,
//       user_email: userEmail,
//       to_name: "Jodie",
//       message: message,
//     };

//     emailjs
//       .send(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_TEMPLATE_ID,
//         formParams,
//         import.meta.env.VITE_PUBLIC_KEY,
//       )
//       .then((response) => {
//         console.log("Email send succefully", response);
//         setUserName("");
//         setUserEmail("");
//         setMessage("");
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//       });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center lg:ml-8 lg:items-start ">
//       <form
//         action=""
//         className="mt-8 flex w-5/6 flex-col lg:w-1/4"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
//           placeholder="Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//         />
//         <input
//           type="text"
//           className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
//           placeholder="Email"
//           value={userEmail}
//           onChange={(e) => setUserEmail(e.target.value)}
//         />
//         <textarea
//           className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         ></textarea>
//         <div className="flex justify-center">
//           <Button
//             content={"send"}
//             css="mb-6 capitalize font-Kumbh py-2 px-4 border-Charm border-solid border-2 rounded-lg hover:bg-white hover:text-Charm hover:font-extrabold"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Component;

import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [userName, setUserName] = useState<string>("");
  const [userNameIsValid, setUserNameIsValid] = useState<boolean>(false); //Vérifie si le champ de l'input est valide
  const [userNameTouched, setUserNameTouched] = useState<boolean>(false);

  const [userEmail, setUserEmail] = useState<string>("");
  const [userEmailIsValid, setUserEmailIsValid] = useState<boolean>(false);
  const [userEmailTouched, setUserEmailTouched] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");
  const [messageIsValid, setMessageIsValid] = useState<boolean>(false);
  const [messageTouched, setMessageTouched] = useState<boolean>(false);

  useEffect(() => {
    if (userNameTouched) {
      setUserNameIsValid(userName.trim() !== "");
    }
  }, [userName, userNameTouched]);

  const nameInputIsInvalid = !userNameIsValid && userNameTouched;

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (userEmailTouched) {
      setUserEmailIsValid(userEmail.trim() !== "" && re.test(userEmail));
    }
  }, [userEmail, userEmailTouched]);

  const emailInputIsInvalid = !userEmailIsValid && userEmailTouched;
  const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(e.target.value);
  };

  useEffect(() => {
    if (messageTouched) {
      setMessageIsValid(message.trim() !== "");
    }
  }, [userName, userNameTouched]);

  const messageInputIsInvalid = !messageIsValid && messageTouched;

  const inputMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUserNameTouched(true);
    setUserEmailTouched(true);
    setMessageTouched(true);

    if (!userNameIsValid) {
      return;
    }
    if (!userEmailIsValid) {
      return;
    }
    if (!messageIsValid) {
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
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center lg:ml-8 lg:items-start ">
      <form
        action=""
        className="mt-8 flex w-5/6 flex-col lg:w-1/4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Name"
          value={userName}
          onChange={inputNameHandler}
        />
        {nameInputIsInvalid && (
          <Paragraph
            content="Name is required"
            css="mb-6 text-xs text-red-500"
          />
        )}
        <input
          type="email"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Email"
          value={userEmail}
          onChange={inputEmailHandler}
        />
        {emailInputIsInvalid && (
          <Paragraph
            content="Email is required"
            css="text-md mb-6 text-red-500"
          />
        )}
        <textarea
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Message"
          value={message}
          onChange={inputMessageHandler}
        ></textarea>
        {messageInputIsInvalid && (
          <Paragraph
            content="Please, write your message"
            css="text-md mb-6 text-red-500"
          />
        )}
        <div className="flex justify-center">
          <Button
            content={"send"}
            css="mb-6 capitalize font-Kumbh py-2 px-4 border-Charm border-solid border-2 rounded-lg hover:bg-white hover:text-Charm hover:font-extrabold"
          />
        </div>
      </form>
    </div>
  );
};

export default Component;
