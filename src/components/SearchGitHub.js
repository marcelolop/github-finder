import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaGithubAlt, FaQuestion } from "react-icons/fa";

const SearchGithub = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchGithub = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        setError(null);
        navigate(`/user/${username}`);
      } else {
        setError("User not found");
      }
    } catch (error) {
      setError(error.response?.data?.message || "User not found");
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username.trim() !== "") {
      searchGithub();
    } else {
      setError("Please enter a valid GitHub username");
    }
  };

  return (
    <div className="searchContainer">
      <h1 className="title">GitHub Finder</h1>
      <div className="iconsContainer">
        <FaQuestion className="questionIcon" />
        <FaGithubAlt className="githubIcon" />
        <FaQuestion className="questionIcon" />
      </div>
      <h2>Search GitHub Users</h2>
      <form onSubmit={handleSubmit} className="searchForm">
        <div className="searchInputContainer">
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </div>
      </form>
      <div className="error-container">
        {error && <div className="errorMessage">{error}</div>}
      </div>
    </div>
  );
};

export default SearchGithub;
