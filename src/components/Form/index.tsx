// import { ChangeEvent, useEffect, useState } from "react";
// import Button from "../Button";
// import emailjs from "@emailjs/browser";
// import Paragraph from "../../typographies/Paragraph";

// const Component = () => {
//   const [userName, setUserName] = useState<string>("");
//   const [userNameIsValid, setUserNameIsValid] = useState<boolean>(false);
//   // const [userNameTouched, setUserNameTouched] = useState<boolean>(false);

//   const [userEmail, setUserEmail] = useState<string>("");
//   const [userEmailIsValid, setUserEmailIsValid] = useState<boolean>(false);
//   // const [userEmailTouched, setUserEmailTouched] = useState<boolean>(false);

//   const [message, setMessage] = useState<string>("");
//   const [messageIsValid, setMessageIsValid] = useState<boolean>(false);
//   // const [messageTouched, setMessageTouched] = useState<boolean>(false);

//   // useEffect(() => {
//   //   if (userNameTouched) {
//   //     setUserNameIsValid(userName.trim() !== "");
//   //   }
//   // }, [userName, userNameTouched]);

//   // const nameInputIsInvalid = !userNameIsValid && userNameTouched;

//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (userName.trim() !== "") {
//     setUserNameIsValid(true);
//   }
//   // if (userEmail.trim() !== "" && re.test(userEmail)) {
//   //   setUserEmailIsValid(true);
//   // }
//   // if (message.trim() !== "") {
//   //   setMessageIsValid(true);
//   // }

//   const nameInputIsInvalid = !userNameIsValid;
//   // const emailInputIsInvalid = !userEmailIsValid;
//   // const messageInputIsInvalid = !messageIsValid;

//   const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     setUserName(e.target.value);
//   };
//   // const inputEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
//   //   setUserEmail(e.target.value);
//   // };
//   // const inputMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//   //   setMessage(e.target.value);
//   // };

//   // useEffect(() => {
//   //   if (userEmailTouched) {
//   //     setUserEmailIsValid(userEmail.trim() !== "" && re.test(userEmail));
//   //   }
//   // }, [userEmail, userEmailTouched]);

//   // const emailInputIsInvalid = !userEmailIsValid && userEmailTouched;

//   // useEffect(() => {
//   //   if (messageTouched) {
//   //     setMessageIsValid(message.trim() !== "");
//   //   }
//   // }, [userName, userNameTouched]);

//   // const messageInputIsInvalid = !messageIsValid && messageTouched;

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // setUserNameTouched(true);
//     // setUserEmailTouched(true);
//     // setMessageTouched(true);

//     if (!userNameIsValid) {
//       return;
//     }
//     // if (!userEmailIsValid) {
//     //   return;
//     // }
//     // if (!messageIsValid) {
//     //   return;
//     // }

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
//           onChange={inputNameHandler}
//         />
//         {nameInputIsInvalid && (
//           <Paragraph
//             content="Name is required"
//             css="mb-6 text-xs text-red-500"
//           />
//         )}
//         {/* <input
//           type="email"
//           className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
//           placeholder="Email"
//           value={userEmail}
//           onChange={inputEmailHandler}
//         />
//         {emailInputIsInvalid && (
//           <Paragraph
//             content="Email is required"
//             css="text-md mb-6 text-red-500"
//           />
//         )} */}
//         {/* <textarea
//           className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
//           placeholder="Message"
//           value={message}
//           onChange={inputMessageHandler}
//         ></textarea>
//         {messageInputIsInvalid && (
//           <Paragraph
//             content="Please, write your message"
//             css="text-md mb-6 text-red-500"
//           />
//         )} */}
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

import { ChangeEvent, useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import Paragraph from "../../typographies/Paragraph";

const Component = () => {
  const [userName, setUserName] = useState<string>("");
  const [userNameIsValid, setUserNameIsValid] = useState<boolean>(false);
  // const nameInputIsInvalid = !userNameIsValid;
  const [error, setError] = useState<boolean>(false);

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (!userName) setError(true);
    setUserName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("...");
    if (!userName) {
      console.log("fail");
      setError(true);
      return;
    }
    const formParams = {
      user_name: userName,
      // user_email: userEmail,
      to_name: "Jodie",
      // message: message,
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
        setError(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
    console.log("- - -");
  };

  return (
    <div className="flex flex-col items-center justify-center lg:ml-8 lg:w-full lg:items-start ">
      <Paragraph
        content="Envie de me contacter ? Remplissez le formulaire ci-dessous !"
        css="font-Kumbh text-left uppercase tracking-widest lg:w-4/5 w-5/6 mt-8 lg:mt-0"
      />
      <form
        action=""
        className="mt-6 flex w-5/6 flex-col"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white lg:py-2"
          placeholder="Name"
          value={userName}
          onChange={inputNameHandler}
        />
        {error && (
          <Paragraph
            content="Name is required"
            css="mb-6 text-xs text-red-500"
          />
        )}
        <input
          type="email"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white lg:py-2"
          placeholder="Email"
          // value={userEmail}
          // onChange={inputEmailHandler}
        />
        <textarea
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Message"
          // value={message}
          // onChange={inputMessageHandler}
          rows={6}
          required
        ></textarea>
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
