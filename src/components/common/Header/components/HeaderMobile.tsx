import Menu from "./Menu";
import Logo from "../components/Logo";
import Minicart from "../components/Minicart";
import SearchInput from "../components/SearchInput";

import "../styles/header.scss";

function HeaderMobile() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Menu />
          <Logo />
          <Minicart />
        </div>

        <div className="header__search">
          <SearchInput />
        </div>
      </header>
    </>
  );
}

export default HeaderMobile;
