import React from "../../_snowpack/pkg/react.js";
import Card from "./Card.js";
import Repos from "./Repos.js";
import Stat from "./Stat.js";
export const Profile = ({profile}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-auto justify-center"
  }, /* @__PURE__ */ React.createElement(Card, {
    profile
  }), /* @__PURE__ */ React.createElement(Stat, {
    profile
  }), /* @__PURE__ */ React.createElement(Repos, {
    username: profile.login
  }));
};
