import React from "../../_snowpack/pkg/react.js";
const Card = ({profile}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "p-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-xs rounded overflow-hidden shadow-xl"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-full",
    src: profile.avatar_url,
    alt: "Profile"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 py-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-xl mb-2 text-gray-900"
  }, profile.name), /* @__PURE__ */ React.createElement("div", {
    className: "font-bold text-xs mb-2 -mt-2 text-gray-600"
  }, "@", profile.login), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base"
  }, profile.bio)), /* @__PURE__ */ React.createElement("div", {
    className: "px-6 pt-4 pb-2"
  }, !profile.location ? null : /* @__PURE__ */ React.createElement("span", {
    className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    "data-tip": "Location",
    className: "tooltip"
  }, profile.location)), !profile.blog ? null : /* @__PURE__ */ React.createElement("span", {
    className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    "data-tip": "Blog",
    className: "tooltip"
  }, profile.blog)), /* @__PURE__ */ React.createElement("span", {
    className: "inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
  }, /* @__PURE__ */ React.createElement("div", {
    "data-tip": "Year Joined",
    className: "tooltip"
  }, "#", new Date(profile.created_at).getFullYear())))));
};
export default Card;
