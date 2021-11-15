import axios from "axios";
import React, { useEffect, useState } from "react";
const Repos = ({ username }) => {
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);
  const API_URL = "https://api.github.com/users";

  const url = `${API_URL}/${username}/repos?sort=stars&per_page=4`;

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await axios.get(url);
      setRepos(response.data);
      setLoading(false);
    };
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="grid-flow-row shadow-2xl stats ml-14">
      {repos.map((repo) => {
        return (
          <div className="stat" key={repo.id}>
            <a className="stat-value text-xl underline hover:text-blue-600" target="_blank" href={repo.html_url}>
              {repo.name}
            </a>
            <div class="stat-desc break-all	">{repo.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Repos;
