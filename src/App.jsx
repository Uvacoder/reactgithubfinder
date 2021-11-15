import React, { useState } from "react";
import Input from "./components/Input";
import { Profile } from "./components/Profile";
import { Header } from "./components/Header";
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
  return (
    <div>
      <Header />
      <Input handleResponse={handleResponse} />
      {showProfile && <Profile profile={profile} />}
    </div>
  );
}

export default App;
