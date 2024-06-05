import { formError } from "../../types/interface";

interface Validation {
  userName: string;
  userEmail: string;
  message: string;
}

export const validateForm = ({ userName, userEmail, message }: Validation) => {
  let isValid: boolean = true;
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  const error: formError = {};

  if (!userName && userName.trim() === "") {
    isValid = false;
    error.userName = "Name is required";
  }
  if (!message && message.trim() === "") {
    isValid = false;
    error.message = "Please, write your message";
  }
  if (!userEmail && userEmail === "") {
    isValid = false;
    error.userEmail = "Email is required";
  }
  if (!re.test(userEmail)) {
    isValid = false;
    error.formatError = "The email format is incorrect";
  }

  return { isValid, error };
};
