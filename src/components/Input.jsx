import React, { useState } from "react";
import axios from "axios";
const Input = ({ handleResponse }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  // get envs from Snowpack
  const API_URL = "https://api.github.com/users";

  const handleChange = async (e) => {
    handleResponse(null);
    setUsername(e.target.value);
    const user = e.target.value;
    const url = `${API_URL}/${user}`;
    setError(true);

    try {
      const { data } = await axios.get(url);
      setError(false);
      handleResponse(data);
    } catch (error) {
      setError(true);
      handleResponse(null);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center my-2 p-12 bg-white text-gray-900 antialiased">
      <div
        className={`b-8 px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg space-x-6 flex items-center w-3/5 hover:shadow-xl ${
          error ? "border-red-600" : "border-green-500"
        } border-2 -mt-14`}
      >
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.917 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"
            fill="currentColor"
          />
        </svg>
        <input
          type="search"
          autoFocus
          value={username}
          className="w-full bg-transparent focus:outline-none text-2xl "
          placeholder="@username"
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Input;
