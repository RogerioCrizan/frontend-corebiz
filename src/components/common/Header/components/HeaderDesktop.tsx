import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";
import MyAccount from "../components/MyAccount";
import Minicart from "../components/Minicart";

import "../styles/header.scss";

function HeaderDesktop() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Logo />
          <SearchInput />
          <MyAccount />
          <Minicart />
        </div>
      </header>
    </>
  );
}

export default HeaderDesktop;
