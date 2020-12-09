import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <Menu>
      <Menu.Item as={Link} to="/">
        Streamy
      </Menu.Item>
      <Menu.Item position="right" as={Link} to="/streams">
        All Streams
      </Menu.Item>
      <Menu.Item>
        <GoogleAuth />
      </Menu.Item>
    </Menu>
  );
};

export default Header;
