import React from "react";
import Card from "./Card";
import Repos from "./Repos";
import Stat from "./Stat";

export const Profile = ({ profile }) => {
  return (
    <div className="flex flex-auto justify-center">
      <Card profile={profile} />
      <Stat profile={profile} />
      <Repos username={profile.login} />
    </div>
  );
};
