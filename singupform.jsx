// I want you to build a user signup form.
// Requirements:
// The form should have at least:
// name
// email
// password
// Basic validation:
// required fields
// valid email format
// On submit:
// call an API
// show a loading state
// handle success and error cases


import React, { useState } from "react";

export function App() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = input;

    setLoading(true);
    setError(null);
    setSuccess(false);

    if (!name || !email || !password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Invalid email format");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>SUBMISSION FORM</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input.name}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, name: e.target.value }))
          }
          placeholder="Enter your name"
        />

        <input
          type="email"
          value={input.email}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Enter your email"
        />

        <input
          type="password"
          value={input.password}
          onChange={(e) =>
            setInput((prev) => ({ ...prev, password: e.target.value }))
          }
          placeholder="Enter your password"
        />

        <button type="submit">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Success!</p>}
    </div>
  );
}