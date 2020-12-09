import React, { useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";

const GoogleAuth = () => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "579900251248-m92e98qadl4polj9k53qtdhrkgtic0le.apps.googleusercontent.com",
        scope: "email",
      });
    });
  });

  return (
    <Button color="red">
      <Icon name="google" />
      Login with Google
    </Button>
  );
};

export default GoogleAuth;
