import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";

import "./styles/header.scss";

function Header() {
  return <>{window.outerWidth < 959 ? <HeaderMobile /> : <HeaderDesktop />}</>;
}

export default Header;
