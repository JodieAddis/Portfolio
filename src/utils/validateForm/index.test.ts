import { expect, it, describe } from "vitest";
import { validateForm } from ".";

describe("validateForm Unit Test Suite", () => {
  it("should return isValid is true when the field is completed", () => {
    expect(
      validateForm({
        userName: "Paul",
        userEmail: "test@gmail.com",
        message: "Test",
      }).isValid,
    ).toBe(true);
  });
  it("should return an error when all field are not completed", () => {
    expect(
      validateForm({
        userName: "",
        userEmail: "",
        message: "",
      }).isValid,
    ).toBe(false);
  });
  it("should return an error when the name field is empty", () => {
    expect(
      validateForm({
        userName: "",
        userEmail: "test@gmail.com",
        message: "Test",
      }).error.userName,
    ).toBe("Name is required");
  });
  it("should return an error when the email field is empty", () => {
    expect(
      validateForm({
        userName: "Paul",
        userEmail: "",
        message: "Test",
      }).error.userEmail,
    ).toBe("Email is required");
  });
  it("should return an error when the message field is empty", () => {
    expect(
      validateForm({
        userName: "Paul",
        userEmail: "test@gmail.com",
        message: "",
      }).error.message,
    ).toBe("Please, write your message");
  });
  it("should return something when fields are complete", () => {
    expect(
      validateForm({
        userName: "Paul",
        userEmail: "test@gmail.com",
        message: "Hello, it' Paul",
      }),
    ).toBeDefined();
  });
  it("should return something when fields are complete", () => {
    expect(
      typeof validateForm({
        userName: "Paul",
        userEmail: "test@gmail.com",
        message: "Hello, it' Paul",
      }).isValid,
    ).toBe("boolean");
  });
  //   it("should return an error message if there is en error type", () => {
  //     expectTypeOf(validateForm).returns.toMatchTypeOf<{
  //         isValid: boolean;
  //         errors: ErrorMessage;
  //       }>();
  //     });
});
