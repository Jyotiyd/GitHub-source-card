
import React, { useState } from "react";
import GithubCard from "./components/GithubCard";
import "./App.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

   
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUserData(null);

    if (!username) {
      setError("Please enter a username");
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container">
      <h1>GitHub User Info</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {userData && <GithubCard user={userData} />}
    </div>
  );
}
