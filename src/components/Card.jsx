import React from "react";

const Card = ({ profile }) => {
  return (
    <div className="p-5">
      <div className="max-w-xs rounded overflow-hidden shadow-xl">
        <img className="w-full" src={profile.avatar_url} alt="Profile" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-900">{profile.name}</div>
          <div className="font-bold text-xs mb-2 -mt-2 text-gray-600">@{profile.login}</div>
          <p className="text-gray-700 text-base">{profile.bio}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {!profile.location ? null : (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div data-tip="Location" className="tooltip">
                {profile.location}
              </div>
            </span>
          )}

          {!profile.blog ? null : (
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <div data-tip="Blog" className="tooltip">
                {profile.blog}
              </div>
            </span>
          )}

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <div data-tip="Year Joined" className="tooltip">
              #{new Date(profile.created_at).getFullYear()}
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
