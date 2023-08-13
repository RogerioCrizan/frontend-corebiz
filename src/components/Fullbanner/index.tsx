import React from "react";

import Glider from "react-glider";
import banners from "./static/banners.json";
import bannersMobile from "./static/banners-mobile.json";

import "./style/fullbanner.scss";

function Fullbanner() {
  return (
    <section className="fullbanner">
      <Glider draggable hasDots slidesToShow={1} slidesToScroll={1}>
        {window.outerWidth < 959
          ? bannersMobile.map((item, index) => {
              return <img key={index} src={item.path} />;
            })
          : banners.map((item, index) => {
              return <img key={index} src={item.path} />;
            })}
      </Glider>
    </section>
  );
}

export default Fullbanner;
