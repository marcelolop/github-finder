// RepositoriesList.js
import React from "react";
import { FaStar, FaCodeBranch, FaCalendar } from "react-icons/fa";

const RepositoriesList = ({
  userRepos,
  userData,
  repoContainerRef,
  redirectToRepo,
}) => (
  <div className="repositories">
    <div className="repositoriesHeader">
      <h3>Repositories</h3> <p>{userData.public_repos} results</p>
    </div>
    <ul className="repositoriesList" ref={repoContainerRef}>
      {userRepos.map((repo) => (
        <li
          key={repo.id}
          className="repositoryItem"
          onClick={() => redirectToRepo(repo.html_url)}
        >
          <h4 className="repoName">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="repoLink"
            >
              {repo.name}
            </a>{" "}
            <span className="repoUpdatedAt">
              Updated: {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </h4>
          <p className="repoDescription">
            {repo.description || "No description available"}
          </p>
          <div className="repoStats">
            <span className="repoStat">
              <FaStar /> {repo.stargazers_count}
            </span>
            <span className="repoStat">
              <FaCodeBranch />
              {repo.forks_count}
            </span>
            <span className="repoStat">
              <FaCalendar />
              {new Date(repo.created_at).toLocaleDateString()}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RepositoriesList;
