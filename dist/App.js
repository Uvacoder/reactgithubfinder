import React, {useState} from "../_snowpack/pkg/react.js";
import Input from "./components/Input.js";
import {Profile} from "./components/Profile.js";
import {Header} from "./components/Header.js";
function App() {
  const [profile, setProfile] = useState();
  const [showProfile, setShowProfile] = useState(false);
  const handleResponse = (res) => {
    if (res) {
      setProfile(res);
      setShowProfile(true);
    } else {
      setShowProfile(false);
      setProfile(null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Input, {
    handleResponse
  }), showProfile && /* @__PURE__ */ React.createElement(Profile, {
    profile
  }));
}
export default App;
