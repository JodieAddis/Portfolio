import { useState } from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";

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

interface InputField {
  userName: string;
  userEmail: string;
  message: string;
}

const Component = () => {
  // const [userName, setUserName] = useState<string>("");
  // const [userEmail, setUserEmail] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

  const [inputField, setInputField] = useState<InputField>({
    userName: "",
    userEmail: "",
    message: "",
  });

  const [submit, setSubmit] = useState<boolean>(false);

  const validationForm = (field: InputField) => {
    if (field.userName == "") {
      console.log("empty field");
    } else if (field.userEmail == "") {
      console.log("empty field");
    } else if (field.message == "") {
      console.log("empty field");
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const formParams = {
      user_name: inputField.userName,
      user_email: inputField.userEmail,
      to_name: "Jodie",
      message: inputField.message,
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
        setInputField({
          userName: "",
          userEmail: "",
          message: "",
        });
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
          value={inputField.userName}
          onChange={(e) =>
            setInputField({ ...inputField, userName: e.target.value })
          }
        />
        <input
          type="text"
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Email"
          value={inputField.userEmail}
          onChange={(e) =>
            setInputField({ ...inputField, userEmail: e.target.value })
          }
        />
        <textarea
          className="mb-6 rounded-lg border-b-[2px] border-solid border-white bg-Charm bg-opacity-20 py-1 pl-3 font-Kumbh text-white"
          placeholder="Message"
          value={inputField.message}
          onChange={(e) =>
            setInputField({ ...inputField, message: e.target.value })
          }
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
