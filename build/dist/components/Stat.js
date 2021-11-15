import React from "../../_snowpack/pkg/react.js";
const Stat = ({profile}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex-col",
    style: {marginTop: "5%"}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500"
  }, "Location"), " ", /* @__PURE__ */ React.createElement("br", null), profile.location), /* @__PURE__ */ React.createElement("div", {
    className: "grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500"
  }, "Followers"), " ", /* @__PURE__ */ React.createElement("br", null), profile.followers), /* @__PURE__ */ React.createElement("div", {
    className: "grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500"
  }, "Following"), " ", /* @__PURE__ */ React.createElement("br", null), profile.following), /* @__PURE__ */ React.createElement("div", {
    className: "grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-500"
  }, "Public Repos"), " ", /* @__PURE__ */ React.createElement("br", null), profile.public_repos));
};
export default Stat;
