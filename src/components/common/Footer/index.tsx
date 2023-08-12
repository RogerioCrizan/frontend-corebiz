import React from "react";

import Address from "./components/address";
import Contacts from "./components/Contacts";
import Copyright from "./components/Copyright";

import "./style/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Address />
        <Contacts />
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
