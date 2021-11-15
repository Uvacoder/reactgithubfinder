import React from "react";
const Stat = ({ profile }) => {
  return (
    <div className="flex-col" style={{ marginTop: "5%" }}>
      <div className="grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold">
        <span className="text-gray-500">Location</span> <br />
        {profile.location}
      </div>
      <div className="grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold">
        <span className="text-gray-500">Followers</span> <br />
        {profile.followers}
      </div>
      <div className="grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold">
        <span className="text-gray-500">Following</span> <br />
        {profile.following}
      </div>
      <div className="grid w-36 h-24 rounded bg-white shadow-xl text-green-500 place-content-center text-center font-mono font-extrabold">
        <span className="text-gray-500">Public Repos</span> <br />
        {profile.public_repos}
      </div>
    </div>
  );
};

export default Stat;
