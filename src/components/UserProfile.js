// UserProfile.js
import React from "react";
import { FaStar, FaCodeBranch, FaCalendar } from "react-icons/fa";
import { truncateText } from "../utils/utils";

const UserProfile = ({ userData }) => (
  <div className="profile">
    <div className="profileDetails">
      <img
        src={userData.avatar_url}
        alt={userData.name}
        className="profileImage"
      />
      <h2 className="name">{userData.name || userData.login}</h2>
      <p className="username">
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="githubLink"
        >
          @{userData.login}
        </a>
      </p>
      <p className="bio">{userData.bio || "Account doesn't have a bio."}</p>
      <div className="stats">
        <p>
          <span className="statsLabel">Repositories:</span>{" "}
          <span className="statsValue">{userData.public_repos}</span>
        </p>
        <p>
          <span className="statsLabel">Followers:</span>{" "}
          <span className="statsValue">{userData.followers}</span>
        </p>
        <p>
          <span className="statsLabel">Following:</span>{" "}
          <span className="statsValue">{userData.following}</span>
        </p>
      </div>
      <div className="media">
        <p>
          <span className="mediaLabel">Location:</span>{" "}
          <span
            className="mediaValue"
            title={userData.location || "Not Available"}
          >
            {truncateText(userData.location, 20)}
          </span>
        </p>
        <p>
          <span className="mediaLabel">Blog:</span>{" "}
          <span className="mediaValue" title={userData.blog || "Not Available"}>
            {userData.blog ? (
              <a
                href={userData.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="externalLink"
              >
                {truncateText(userData.blog, 30)}
              </a>
            ) : (
              "Not Available"
            )}
          </span>
        </p>
        <p>
          <span className="mediaLabel">Twitter:</span>{" "}
          <span
            className="mediaValue"
            title={userData.twitter_username || "Not Available"}
          >
            {truncateText(userData.twitter_username, 20)}
          </span>
        </p>
        <p>
          <span className="mediaLabel">Company:</span>{" "}
          <span
            className="mediaValue"
            title={userData.company || "Not Available"}
          >
            {truncateText(userData.company, 30)}
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default UserProfile;
