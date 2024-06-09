import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { Button } from "react-bootstrap";

/**
 * Renders a button for logging in with a popup or redirect
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  /**
   * 
   * @param {"popup"|"redirect"} loginType 
   */
  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <Button
      variant="outline-primary"
      onClick={() => handleLogin("popup")}
      role="button"
      aria-label="sign in"
    >
      Sign In
    </Button>
  );
};
