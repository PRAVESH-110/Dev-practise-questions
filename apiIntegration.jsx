// •	Call an API and show data
// •	Handle loading, success, error
// •	Retry or show fallback UI
// Edge cases
// •	API returns 500
// •	Network is slow
// •	API returns empty list

import React, { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [userdata, setUserdata] = useState([]);
  const [error, setError] = useState(null);

  const fetchUserlist = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      // Handle API 500
      if (!res.ok) {
        throw new Error("Server error");
      }

      const data = await res.json();

      setUserdata(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Optional: auto-fetch on mount
  useEffect(() => {
    fetchUserlist();
  }, []);

  return (
    <div>
      <button onClick={fetchUserlist}>Retry</button>

      {/* Loading */}
      {loading && <h1>Loading...</h1>}

      {/* Error */}
      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchUserlist}>Retry</button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && userdata.length === 0 && (
        <p>No users found</p>
      )}

      {/* Success */}
      {!loading && !error && userdata.length > 0 && (
        <ul>
          {userdata.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;