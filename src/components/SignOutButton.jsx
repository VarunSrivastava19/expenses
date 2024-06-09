import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "react-bootstrap";

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal();
  /**
   *
   * @param {"popup"|"redirect"} logoutType
   */
  const handleLogout = (logoutType) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      });
    }
  };

  return (
    <Button
      variant="outline-danger"
      onClick={() => handleLogout("popup")}
      role="button"
      aria-label="sign out"
    >
      Sign out
    </Button>
  );
};
