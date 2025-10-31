
import React from "react";
import "./GithubCard.css";

export default function GithubCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar_url} alt={user.login} className="avatar" />
      <h2>{user.name || "No name available"}</h2>
      <p className="username">@{user.login}</p>

      <div className="stats">
        <div>
          <p className="number">{user.public_repos}</p>
          <p className="label">Repos</p>
        </div>
        <div>
          <p className="number">{user.public_gists}</p>
          <p className="label">Gists</p>
        </div>
      </div>

      <p className="joined">
        Joined: <span>{new Date(user.created_at).toISOString().split("T")[0]}</span>
      </p>

      <a href={user.html_url} target="_blank" rel="noreferrer" className="profile-btn">
        View Profile
      </a>
    </div>
  );
}

