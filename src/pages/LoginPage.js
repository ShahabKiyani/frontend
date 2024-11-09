import React, { useState } from "react";
import { auth } from "../components/firebase"; // Import Firebase auth
import { signInWithEmailAndPassword } from "firebase/auth"; // Firebase login function
import { useNavigate } from "react-router-dom"; // To redirect after login
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // For redirecting after successful login

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in successfully:", user);
        navigate("/dashboard"); // Redirect to a different page (e.g., dashboard)
      })
      .catch((error) => {
        setError(error.message); // Show error message if login fails
        console.error("Error logging in:", error.message);
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default LoginPage;
