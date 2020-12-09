import React, { Component } from "react";
import { Button, Icon } from "semantic-ui-react";

class GoogleAuth extends Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "579900251248-m92e98qadl4polj9k53qtdhrkgtic0le.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChage);
        });
    });
  }

  onAuthChage = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <Button onClick={this.onSignOut} color="red">
          <Icon name="google" />
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button onClick={this.onSignIn} color="red">
          <Icon name="google" />
          Sign In
        </Button>
      );
    }
  };

  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

export default GoogleAuth;
