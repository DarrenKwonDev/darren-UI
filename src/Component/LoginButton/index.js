import React from "react";
import path from "path";
import { StyledLoginButton } from "./style";

function LoginButton({ provider = "google", text = "" }) {
  return (
    <StyledLoginButton provider={provider}>
      {provider === "google" && (
        <img
          src={path.resolve(process.env.PUBLIC_URL, "./icons/google.png")}
          alt="logo"
        />
      )}
      {provider === "apple" && (
        <img
          src={path.resolve(process.env.PUBLIC_URL, "./icons/apple.svg")}
          alt="logo"
        />
      )}
      <h4 className="text">{text}</h4>
    </StyledLoginButton>
  );
}

export default LoginButton;
