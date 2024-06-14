// User.js
import React, { useEffect, useReducer, useRef, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { initialState, reducer } from "../utils/reducer";
import BackHomeButton from "../components/BackHomeButton";
import UserProfile from "../components/UserProfile";
import RepositoriesList from "../components/RepositoriesList";
import { FaGithubAlt, FaExclamation } from "react-icons/fa";

const User = () => {
  const { username } = useParams();
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userData, userRepos, error, loading, hasMore } = state;
  const repoContainerRef = useRef(null);

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch({ type: "SET_LOADING", payload: { loading: true } });
      try {
        const userResponse = await axios.get(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
          }
        );

        const reposResponse = await axios.get(userResponse.data.repos_url, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
          params: {
            per_page: 30,
          },
        });

        dispatch({
          type: "FETCH_USER_DATA",
          payload: {
            userData: userResponse.data,
            userRepos: reposResponse.data,
          },
        });
      } catch (error) {
        dispatch({
          type: "SET_ERROR",
          payload: { error: error.response?.data?.message || "User not found" },
        });
      }
    };

    dispatch({ type: "SET_LOADING", payload: { loading: true } });

    setTimeout(fetchUserData, 3000);
  }, [username]);

  const handleLoadMoreRepos = useCallback(async () => {
    if (loading || !userData) return;

    dispatch({ type: "SET_LOADING", payload: { loading: true } });
    try {
      const reposResponse = await axios.get(userData.repos_url, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
        params: {
          page: Math.ceil(userRepos.length / 30) + 1,
          per_page: 30,
        },
      });

      dispatch({
        type: "LOAD_MORE_REPOS",
        payload: {
          userRepos: reposResponse.data,
        },
      });
    } catch (error) {
      console.error("Error fetching repositories:", error);
      dispatch({
        type: "SET_ERROR",
        payload: { error: "Failed to load repositories." },
      });
    }
  }, [loading, userRepos.length, userData]);

  useEffect(() => {
    const container = repoContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (
        container.scrollTop + container.clientHeight >=
          container.scrollHeight &&
        !loading &&
        hasMore
      ) {
        handleLoadMoreRepos();
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [loading, handleLoadMoreRepos, hasMore]);

  if (error) {
    return <div className="errorMessage">{error}</div>;
  }

  if (!userData) {
    return (
      <div className="loadingContainer">
        <FaExclamation className="exclamationIcon-loading" />
        <FaGithubAlt className="githubIcon-loading" />
        <div className="loadingText">
          <p className="loadingText-p">Loading</p>
          <span className="dot dot1">.</span>
          <span className="dot dot2">.</span>
          <span className="dot dot3">.</span>
        </div>
      </div>
    );
  }

  const redirectToRepo = (repoUrl) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        <BackHomeButton />
        <div className="userDetails">
          <UserProfile userData={userData} />
          <RepositoriesList
            userRepos={userRepos}
            userData={userData}
            repoContainerRef={repoContainerRef}
            redirectToRepo={redirectToRepo}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default User;
